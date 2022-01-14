import React, { useContext } from "react";
import { Grid, Typography, Box } from "@mui/material";

import { SocketContext } from "../SocketContext";

const VideoPlayer = ({ sx }) => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <Grid container sx={sx}>
      {stream && (
        <Grid item sx={{}}>
          <Typography variant="h5">{name || "Name"}</Typography>
          <Box sx={{ mt: 1, backgroundColor: "#000000" }}>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              width={320}
              height={180}
            />
          </Box>
        </Grid>
      )}
      {callAccepted && !callEnded && (
        <Grid item sx={{ ml: 2 }}>
          <Typography variant="h5">{call.name || "Name"}</Typography>
          <Box sx={{ mt: 1, backgroundColor: "#000000" }}>
            <video
              playsInline
              muted
              ref={userVideo}
              autoPlay
              width={320}
              height={180}
            />{" "}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default VideoPlayer;
