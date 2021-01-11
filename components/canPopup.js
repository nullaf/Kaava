import { Marker, Popup } from "react-leaflet";
import Typography from "@material-ui/core/Typography";
import TimeAgo from "react-timeago";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { iconEmptyCan } from "../lib/iconEmptyCan";
import { iconCan } from "../lib/iconCan";
import DeleteIcon from "@material-ui/icons/Delete";
import PetsIcon from "@material-ui/icons/Pets";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const CanPopup = ({ can }) => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#00adb5",
      },
      secondary: {
        main: "#ff2e63",
      },
    },
  });

  const [clickState, setClickState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);

  return deleteState ? null : (
    <ThemeProvider theme={theme}>
      <Marker
        position={[can.longitude, can.latitude]}
        icon={
          new Date().getTime() - new Date(can.fillingTime).getTime() >
          604800000 /*1 week*/
            ? iconEmptyCan
            : iconCan
        }
      >
        <div>
          <Popup maxWidth="60vw" maxHeight="35vh">
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                width: 200,
                height: 200,
              }}
            >
              <Typography variant="h6">Animal Food Can</Typography>
              <Typography variant="body2">
                Last Filled:{" "}
                {clickState ? "Now" : <TimeAgo date={can.fillingTime} />}
              </Typography>

              <Button
                color="primary"
                variant="contained"
                startIcon={<PetsIcon color="default" />}
                onClick={() => {
                  setClickState(true);
                }}
              >
                Fill
              </Button>
              <Button
                color="secondary"
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={() => {
                  if (
                    window.confirm("Are you sure you want to delete this can?")
                  ) {
                    setDeleteState(true);
                  }
                }}
              >
                Delete
              </Button>
            </div>
          </Popup>
        </div>
      </Marker>
    </ThemeProvider>
  );
};
export default CanPopup;
