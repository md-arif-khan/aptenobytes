import { Stack, Button, Box } from "@mui/material";
import Router, { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import * as Cookies from "../../../utils/cookies";
import MobileDrawer from "./Drawer";
import styles from "./Header.module.scss";

const Header: FunctionComponent = () => {
  const { t } = useTranslation();
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
  return (
    <div className={styles._wrapper}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <div className={styles._logo}>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className={styles._right}>
          <Stack direction={"row"} spacing={2} alignItems="center">
            <Stack
              direction={"row"}
              // spacing={1}
              alignItems="center"
              className={styles._left_menu}
            >
              <div className={styles._list}>{t("common:Services")}</div>
              <div className={styles._list}>{t("common:Projects")}</div>
              <div className={styles._list}>{t("common:About_us")}</div>
              <div className={styles._list}>{t("common:Contact_us")}</div>
            </Stack>
            <Stack
              direction={"row"}
              spacing={2}
              alignItems="center"
              className={styles.right_menu}
            >
              <Button
                variant="contained"
                color="inherit"
                className={styles._button}
              >
                {t("common:Learn_more")}
              </Button>

              <>
                {Cookies.getLanguage() === "en" ? (
                  <img
                    src="/images/lng1.svg"
                    alt="language"
                    onClick={() => handleChange("he")}
                    style={{ marginLeft: "15px" }}
                  />
                ) : (
                  <img
                    src="/images/lag2.svg"
                    alt="language"
                    onClick={() => handleChange("en")}
                    style={{ marginRight: "15px" }}
                  />
                )}
              </>
            </Stack>
          </Stack>
        </div>
        <div className={styles._mobile}>
          <MobileDrawer />
        </div>
      </Stack>
    </div>
  );
};

export default Header;
