import React, { useContext } from "react";
import { Button, Box, Typography } from "@mui/material";

import { SocketContext } from "../SocketContext";

const Notifications = ({ sx }) => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <Box sx={sx}>
      {call.isReceivedCall && !callAccepted && (
        <Box sx={{}}>
          <Typography variant="h5">{call.name} is calling...</Typography>
          <Button
            color="secondary"
            variant="contained"
            sx={{ mt: 1 }}
            onClick={answerCall}
          >
            Answer
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Notifications;
