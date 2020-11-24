import styles from "../../../styles/Forum.module.css";
import React, { useState } from "react";
import DetailedPost from "../../../components/detailedPost";
import Head from "next/head";
import useSWR from "swr";
import fetcher from "../../../lib/fetch";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";



const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00adb5",
    },
  },
});

function Pid() {
  const { data, error } = useSWR("/api/dummyposts", fetcher);

  const router = useRouter();
  const { pid } = router.query;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Forum</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.container}>

            <IconButton aria-label="back" onClick={() => router.back()}>
              <ArrowBackIcon color="primary" fontSize="large" />
            </IconButton>

          <div className={styles.postContainer}>
            {!data && <Typography variant="h2">Loading</Typography>}
            {data?.posts.post.map((post) => {
              return (
                post.id === pid && (
                  <DetailedPost
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    likeCount={post.likeCount}
                    commentCount={post.commentCount}
                    date={post.date}
                  />
                )
              );
            })}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Pid;
