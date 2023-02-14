import Header from "@/components/Layout/Header/Header";
import { Container, Grid, Typography, Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import styles from "./HeroArea.module.scss";

const HeroArea: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <div className={styles._wrapper}>
      <div className={styles._bg_wrapper}></div>
      <div className={styles._bg_position_wrapper}></div>
      <div className={styles._header}>
        <Header />
      </div>
      <Container maxWidth="xl">
        <div className={styles._content}>
          <Typography variant="h6" color="inherit" className={styles._title}>
            {t("common:hero_title")}
          </Typography>
          <Typography variant="h6" color="inherit" className={styles._subtitle}>
            {t("common:hero_subtitle")}
          </Typography>

          <div className={styles._button_wrapper}>
            <Button
              variant="contained"
              color="inherit"
              className={styles._button}
            >
              {t("common:hero_button")}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroArea;
