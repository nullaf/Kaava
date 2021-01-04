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
import Link from "next/link";
import Comment from "../../../components/comment";
import Addcomment from "../../../components/addComment";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00adb5",
    },
  },
});

function Pid() {
  const { data, error } = useSWR(
    "https://cors-anywhere.herokuapp.com/https://kaavabackend.herokuapp.com/posts",
    fetcher
  );

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
          <Link href="/forum">
            <IconButton aria-label="back">
              <ArrowBackIcon color="primary" fontSize="large" />
            </IconButton>
          </Link>

          <div className={styles.postContainer}>
            {!data && <Typography variant="h2">Loading</Typography>}
            {data?.map((post) => {
              return (
                post.id === parseInt(pid) && (
                  <div key={post.id}>
                    <DetailedPost
                      key={post.id}
                      title={post.postName}
                      content={post.postDescription}
                      likeCount={post.postLike}
                      comments={[]}
                      date={post.postTime}
                    />
                    <div className={styles.comments}>
                      <Addcomment />
                      {[].map((comment) => {
                        return <Comment comment={comment} />;
                      })}
                    </div>
                  </div>
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
