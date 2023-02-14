import { Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import * as Cookies from "../../../utils/cookies";
import styles from "./Footer.module.scss";
import Router, { useRouter } from "next/router";

const Footer = () => {
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
    <div>
      <div className={styles._wrapper}>
        <img
          src="https://aptenobytes.com/wp-content/uploads/2022/06/Mask-Group-8.png"
          className={styles._right_img}
          alt=""
          loading="lazy"
        ></img>
        <img
          src="https://aptenobytes.com/wp-content/uploads/2022/06/Mask-Group-7.png"
          className={styles._left_img}
          alt=""
          loading="lazy"
        ></img>
        <Container maxWidth="xl">
          <Grid container spacing={{ md: 1, sm: 1, xs: 4 }}>
            <Grid item md={4} sm={12} xs={12}>
              <div className={styles._first_wrapper}>
                <img src="/images/footer.png" alt="logo" />
                <Typography
                  variant="subtitle1"
                  color="inherit"
                  component="p"
                  className={styles._title}
                >
                  {t("common:footer_title")}
                </Typography>

                <Stack
                  direction="row"
                  spacing={2}
                  className={styles._social_wrapper}
                >
                  <Link href="https://www.facebook.com/">
                    <FacebookIcon />
                  </Link>
                  <Link href="https://www.twitter.com/">
                    <TwitterIcon />
                  </Link>
                  <Link href="https://www.linkeding.com/">
                    <LinkedInIcon />
                  </Link>
                  <Link href="https://www.google.com/">
                    <GoogleIcon />
                  </Link>
                </Stack>
              </div>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <div className={styles._menu_list}>
                <div className={styles._menu_header}>
                  {t("common:Contacts")}
                </div>

                <Stack direction="column" spacing={3}>
                  <>
                    <Link href="/">
                      <div className={styles._menu_item}>
                        {t("common:Services")}
                      </div>
                    </Link>
                  </>
                  <>
                    <Link href="/">
                      <div className={styles._menu_item}>
                        {t("common:Projects")}
                      </div>
                    </Link>
                  </>
                  <>
                    <Link href="/">
                      <div className={styles._menu_item}>
                        {t("common:About_us")}
                      </div>
                    </Link>
                  </>
                  <>
                    <Link href="/">
                      <div className={styles._menu_item}>
                        {t("common:Contact_us")}
                      </div>
                    </Link>
                  </>
                </Stack>
              </div>
            </Grid>
            <Grid item md={3} sm={4} xs={12}>
              <div className={styles._menu_list}>
                <div className={styles._menu_header}>
                  {t("common:Services")}
                </div>

                <Stack direction="column" spacing={3}>
                  <>
                    <Link href="/">
                      <div className={styles._menu_item}>
                        {t("common:Application_Development")}
                      </div>
                    </Link>
                  </>
                  <>
                    <Link href="/">
                      <div className={styles._menu_item}>
                        {t("common:Design_Creative")}
                      </div>
                    </Link>
                  </>
                  <>
                    <Link href="/">
                      <div className={styles._menu_item}>
                        {t("common:Software_development")}
                      </div>
                    </Link>
                  </>
                  <>
                    <Link href="/">
                      <div className={styles._menu_item}>
                        {t("common:System_Specification")}
                      </div>
                    </Link>
                  </>
                  <>
                    <Link href="/">
                      <div className={styles._menu_item}>
                        {t("common:Web_Interface_Design")}
                      </div>
                    </Link>
                  </>
                </Stack>
              </div>
            </Grid>
            <Grid item md={3} sm={4} xs={12}>
              <div className={styles._menu_list}>
                <div className={styles._menu_header}>
                  {t("common:Quick_Links")}
                </div>

                <Stack direction="column" spacing={2}>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent={{
                      md: "flex-start",
                      sm: "flex-start",
                      xs: "center",
                    }}
                  >
                    <LocationOnIcon style={{ color: "#010181" }} />
                    <div className={styles._menu_item}>Rehovot, Israel</div>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent={{
                      md: "flex-start",
                      sm: "flex-start",
                      xs: "center",
                    }}
                  >
                    <EmailIcon style={{ color: "#010181" }} />
                    <div className={styles._menu_item}>roi@aptenobytes.com</div>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent={{
                      md: "flex-start",
                      sm: "flex-start",
                      xs: "center",
                    }}
                  >
                    <PhoneIcon style={{ color: "#010181" }} />
                    <div className={styles._menu_item}>+972526039309</div>
                  </Stack>
                </Stack>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles._bottom_wrapper}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
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
              sx={{
                paddingRight: Cookies.getLanguage() === "he" ? "8px" : "0",
              }}
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
              sx={{
                paddingRight: Cookies.getLanguage() === "he" ? "8px" : "0",
              }}
            >
              עברית
            </Typography>
          </Stack>
        </Stack>
      </div>

      <div className={styles._copy_wrapper}>
        <Stack
          direction="row"
          spacing={0}
          alignItems="center"
          justifyContent="center"
        >
          <ErrorOutlineIcon />
          <Typography variant="subtitle1" color="inherit" component="p">
            This site is registered on wpml.org as a development site.
          </Typography>
        </Stack>
      </div>
    </div>
  );
};

export default Footer;
