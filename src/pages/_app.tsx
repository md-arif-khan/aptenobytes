/* eslint-disable react-hooks/exhaustive-deps */
import { Box, ThemeProvider } from "@mui/material";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Cookies from "../utils/cookies";
import "../style/index.scss";
import theme from "../theme/theme";
import { AppProps } from "next/app";
import ThemeDrawer from "@/components/common/ThemeDrawer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const currentLanguageCode = Cookies.getLanguage();

  const router = useRouter();
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    const storedLocale = Cookies.getLanguage();
    if (storedLocale) {
      setLanguage(storedLocale);
    }
  }, [language]);

  function rerouteLocale(wantedLocale: string) {
    if (router.locale) {
      if (router.locale !== wantedLocale) {
        router.replace(router.asPath, router.asPath, { locale: wantedLocale });
      }
    } else if (router.defaultLocale && router.defaultLocale !== wantedLocale) {
      router.replace(router.asPath, router.asPath, { locale: wantedLocale });
    }
  }

  useEffect(() => {
    const storedLocale = Cookies.getLanguage();
    if (!storedLocale) Cookies.setLanguage("en");
  }, []);

  useEffect(() => {
    const storedLocale = Cookies.getLanguage();

    if (storedLocale) {
      rerouteLocale(storedLocale);
    } else if (
      router.locale &&
      (router.locale === "it" || router.locale === "en")
    ) {
      Cookies.setLanguage(router.locale);
    }
  }, []);

  useEffect(() => {
    if (currentLanguageCode) {
      document.body.dir = currentLanguageCode === "en" ? "ltr" : "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [currentLanguageCode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ position: "fixed", top: "150px", right: "0", zIndex: 999 }}>
          <ThemeDrawer />
        </Box>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
