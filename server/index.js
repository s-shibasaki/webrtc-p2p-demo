const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    method: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running.");
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    console.log(socket.id, 'callended')
    socket.broadcast.emit("callended");
  });

  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    console.log(socket.id, 'calluser')
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  socket.on("answercall", (data) => {
    console.log(socket.id, 'callaccepted')
    io.to(data.to).emit("callaccepted", data.signal);
  });
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));
