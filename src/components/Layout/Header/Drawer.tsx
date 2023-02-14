import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Drawer.module.scss";
import { useTranslation } from "react-i18next";
import { Stack, Typography } from "@mui/material";
import Router, { useRouter } from "next/router";
import * as Cookies from "../../../utils/cookies";

type Anchor = "left";

export default function MobileDrawer() {
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    left: false,
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

  const [language, setLanguage] = React.useState("en");
  const router = useRouter();

  const handleChange = (event: string) => {
    Cookies.setLanguage(event);
    setLanguage(event);

    Router.replace(
      { pathname: router.asPath },
      { pathname: router.asPath },
      { locale: event }
    );
  };

  React.useEffect(() => {
    const storedLocale = Cookies.getLanguage();
    if (storedLocale) {
      setLanguage(storedLocale);
    }

    console.log(storedLocale, "storedLocale");
  }, [language]);

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 290 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <Button onClick={toggleDrawer("left", false)}>
          <CloseIcon style={{ color: "#f69300", fontSize: "25px" }} />
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          margin: "30px 0",
          paddingRight: "20px",
          paddingLeft: Cookies.getLanguage() === "he" ? "20px" : "0",
        }}
      >
        <img
          src="/images/logo.png"
          alt="logo"
          style={{ maxWidth: "200px", width: "100%" }}
        />
      </Box>
      <List className={styles._left_menu}>
        <ListItem disablePadding className={styles._single_menu}>
          <ListItemText
            primary={<div className={styles._list}>{t("common:Services")}</div>}
          />
        </ListItem>
        <ListItem disablePadding className={styles._single_menu}>
          <ListItemText
            primary={<div className={styles._list}>{t("common:Projects")}</div>}
          />
        </ListItem>
        <ListItem disablePadding className={styles._single_menu}>
          <ListItemText
            primary={<div className={styles._list}>{t("common:About_us")}</div>}
          />
        </ListItem>
        <ListItem disablePadding className={styles._single_menu}>
          <ListItemText
            primary={
              <div className={styles._list}>{t("common:Contact_us")}</div>
            }
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={
              <Button
                variant="contained"
                color="inherit"
                className={styles._button}
              >
                {t("common:Learn_more")}
              </Button>
            }
          />
        </ListItem>
      </List>

      <Stack
        direction="column"
        spacing={1}
        sx={{ margin: "0 20px" }}
        className={styles._lan_wrapper}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          onClick={() => handleChange("en")}
        >
          <img src="/images/lag2.svg" alt="language" />
          <Typography
            variant="h6"
            color="inherit"
            sx={{ paddingRight: Cookies.getLanguage() === "he" ? "8px" : "0" }}
          >
            English
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          onClick={() => handleChange("he")}
        >
          <img src="/images/lng1.svg" alt="language" />
          <Typography
            variant="h6"
            color="inherit"
            sx={{ paddingRight: Cookies.getLanguage() === "he" ? "8px" : "0" }}
          >
            עברית
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon style={{ color: "white", fontSize: "25px" }} />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          PaperProps={{
            sx: {
              animationDuration: "0.5s",
              backgroundColor: "#249BEB",
              backgroundImage:
                "url(https://aptenobytes.com/wp-content/uploads/2022/08/one.png)",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              boxShadow: "2px 8px 23px 3px rgb(0 0 0 / 20%)",
            },
          }}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
