import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import * as Cookies from "../../utils/cookies";
import { Typography } from "@mui/material";

type Anchor = "right";

export default function ThemeDrawer() {
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box sx={{ width: 180, position: "relative" }} role="presentation">
      <Box
        onClick={toggleDrawer("right", false)}
        sx={{
          position: "absolute",
          top: "0px",
          right: "0px",
          cursor: "pointer",
          zIndex: "999",
          padding: "0",
          margin: "0",
        }}
      >
        <CloseIcon style={{ color: "#f69300", fontSize: "25px" }} />
      </Box>

      <List>
        <ListItem disablePadding sx={{ padding: "0px 15px" }}>
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                {Cookies.getLanguage() === "en"
                  ? "Accessibility Tools"
                  : "כלי נגישות"}
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ padding: "0px 15px", cursor: "pointer" }}
        >
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#f69300",
                  },
                }}
              >
                {Cookies.getLanguage() === "en" ? "Increase Text" : "הגדל טקסט"}
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ padding: "0px 15px", cursor: "pointer" }}
        >
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#f69300",
                  },
                }}
              >
                {Cookies.getLanguage() === "en"
                  ? "Decrease Text"
                  : "הקטנת טקסט"}
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ padding: "0px 15px", cursor: "pointer" }}
        >
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#f69300",
                  },
                }}
              >
                {Cookies.getLanguage() === "en" ? "Grayscale" : "גווני אפור"}
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ padding: "0px 15px", cursor: "pointer" }}
        >
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#f69300",
                  },
                }}
              >
                {Cookies.getLanguage() === "en"
                  ? "High Contrast"
                  : "ניגודיות גבוה"}
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ padding: "0px 15px", cursor: "pointer" }}
        >
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#f69300",
                  },
                }}
              >
                {Cookies.getLanguage() === "en"
                  ? "Negative Contrast"
                  : "ניגודיות שלילית"}
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ padding: "0px 15px", cursor: "pointer" }}
        >
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#f69300",
                  },
                }}
              >
                {Cookies.getLanguage() === "en"
                  ? "Light Background"
                  : "רקע בהיר"}
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ padding: "0px 15px", cursor: "pointer" }}
        >
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#f69300",
                  },
                }}
              >
                {Cookies.getLanguage() === "en"
                  ? "Links Underline"
                  : "קישורים קו תחתון"}
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          disablePadding
          sx={{ padding: "0px 15px", cursor: "pointer" }}
        >
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#f69300",
                  },
                }}
              >
                {Cookies.getLanguage() === "en" ? "Reset" : "אִתחוּל"}
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button
          onClick={toggleDrawer("right", true)}
          sx={{
            background: "#f69300",
            color: "white",
            "&:hover": {
              background: "#f69300",
              opacity: 0.8,
            },
          }}
        >
          {/* <MenuIcon style={{ color: "white", fontSize: "25px" }} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            width="2.5em"
          >
            <path d="M50 8.1c23.2 0 41.9 18.8 41.9 41.9 0 23.2-18.8 41.9-41.9 41.9C26.8 91.9 8.1 73.2 8.1 50S26.8 8.1 50 8.1M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 11.3c-21.4 0-38.7 17.3-38.7 38.7S28.6 88.7 50 88.7 88.7 71.4 88.7 50 71.4 11.3 50 11.3zm0 8.9c4 0 7.3 3.2 7.3 7.3S54 34.7 50 34.7s-7.3-3.2-7.3-7.3 3.3-7.2 7.3-7.2zm23.7 19.7c-5.8 1.4-11.2 2.6-16.6 3.2.2 20.4 2.5 24.8 5 31.4.7 1.9-.2 4-2.1 4.7-1.9.7-4-.2-4.7-2.1-1.8-4.5-3.4-8.2-4.5-15.8h-2c-1 7.6-2.7 11.3-4.5 15.8-.7 1.9-2.8 2.8-4.7 2.1-1.9-.7-2.8-2.8-2.1-4.7 2.6-6.6 4.9-11 5-31.4-5.4-.6-10.8-1.8-16.6-3.2-1.7-.4-2.8-2.1-2.4-3.9.4-1.7 2.1-2.8 3.9-2.4 19.5 4.6 25.1 4.6 44.5 0 1.7-.4 3.5.7 3.9 2.4.7 1.8-.3 3.5-2.1 3.9z"></path>{" "}
          </svg>
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          PaperProps={{
            sx: {
              animationDuration: "0.5s",
              backgroundColor: "#fff",
              //   backgroundColor: "#249BEB",
              //   backgroundImage:
              //     "url(https://aptenobytes.com/wp-content/uploads/2022/08/one.png)",
              //   backgroundPosition: "center center",
              //   backgroundRepeat: "no-repeat",
              //   backgroundSize: "cover",
              boxShadow: "2px 8px 23px 3px rgb(0 0 0 / 20%)",
              height: "auto",
              marginTop: "150px",
              width: "auto",
            },
          }}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
