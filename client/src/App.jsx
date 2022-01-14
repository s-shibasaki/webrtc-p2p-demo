import React from "react";
import { Typography, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

const cssVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: cssVar("--color1"),
      },
      secondary: {
        main: cssVar("--color3"),
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ px: 6, pb: 2 }}>
        <Typography variant="h2" sx={{ mt: 3 }}>
          WebRTC Chat
        </Typography>
        <VideoPlayer sx={{ mt: 2 }} />
        <Options sx={{ mt: 2 }}>
          <Notifications sx={{ mt: 2 }} />
        </Options>
      </Box>
    </ThemeProvider>
  );
};

export default App;
