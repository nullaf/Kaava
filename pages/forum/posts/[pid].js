import styles from "../../../styles/Forum.module.css";
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { ThemeProvider } from "@material-ui/core/styles";
import Link from "next/link";
import CommentComponent from "../../../components/commentComponent";
import theme from "../../../components/muiThemes/postMuiTheme";
import DetailedPostComponent from "../../../components/detailedPostComponent";
import ParticleBackground from "../../../components/particleBackground";

function Pid() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <ThemeProvider theme={theme}>
      <ParticleBackground
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: -10,
          top: 0,
          left: 0,
        }}
      />
      <div>
        <Head>
          <title>Forum</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.container}>
          <Link href="/forum">
            <IconButton aria-label="back">
              <ArrowBackIcon color="primary" fontSize="large" />
            </IconButton>
          </Link>

          <div className={styles.postContainer}>
            <DetailedPostComponent id={pid} />

            <CommentComponent id={pid} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Pid;
