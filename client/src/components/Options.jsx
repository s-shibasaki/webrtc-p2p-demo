import React, { useContext, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";

import { SocketContext } from "../SocketContext";

const Options = ({ children, sx }) => {
  const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <Box sx={sx}>
      <form noValidate autoComplete="off">
        <Grid container sx={sx}>
          <Grid item sx={{ width: 320 }}>
            <Typography variant="h5">Account info</Typography>
            <TextField
              variant="filled"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              sx={{ mt: 1 }}
            />
            <CopyToClipboard text={me}>
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                startIcon={<Assignment fontSize="large" />}
                sx={{ mt: 1 }}
              >
                Copy your ID
              </Button>
            </CopyToClipboard>
          </Grid>
          <Grid item sx={{ ml: 2, width: 320 }}>
            <Typography variant="h5">Make a call</Typography>
            <TextField
              variant="filled"
              label="ID to call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
              fullWidth
              sx={{ mt: 1 }}
            />
            {callAccepted && !callEnded ? (
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                startIcon={<PhoneDisabled fontSize="large" />}
                sx={{ mt: 1 }}
                onClick={leaveCall}
              >
                Hang up
              </Button>
            ) : (
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                startIcon={<Phone fontSize="large" />}
                sx={{ mt: 1 }}
                onClick={() => callUser(idToCall)}
              >
                Call
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
      {children}
    </Box>
  );
};

export default Options;
