import styles from "../styles/Forum.module.css";
import Forumnav from "../components/forumnav";
import React, { useState } from "react";
import LoginModal from "../components/loginModal";
import Post from "../components/post";
import Head from "next/head";
import useSWR from "swr";
import fetcher from "../lib/fetch";
import Button from "@material-ui/core/Button";
import theme from "../components/muiThemes/postMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import PostAddModal from "../components/postAddModal";
import { CircularProgress } from "@material-ui/core";
import CorsUrl from "../lib/corsUrl";
import ParticleBackground from "../components/particleBackground";
import { motion } from "framer-motion";

function Forum() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoginClicked, setLoginClicked] = useState(false);
  const [isSignupClicked, setSignupClicked] = useState(false);

  const [isAddPostClicked, setAddPostClicked] = useState(false);

  const { data, error, mutate } = useSWR(
    CorsUrl + "https://kaavabackend.herokuapp.com/posts",
    fetcher
  );

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
        <Forumnav
          loginStatus={setLoginClicked}
          signupStatus={setSignupClicked}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <div className={styles.container}>
          <LoginModal
            isLoginClicked={isLoginClicked}
            isSignupClicked={isSignupClicked}
            setSignupClicked={setSignupClicked}
            setLoginClicked={setLoginClicked}
          />

          <div className={styles.postContainer}>
            <motion.div
              className={styles.addPost}
              animate={{
                scale: [0.4, 1],
                transition: { duration: 0.3 },
              }}
            >
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={() => setAddPostClicked(true)}
              >
                Add
              </Button>
              <PostAddModal
                setAddPostClicked={setAddPostClicked}
                isAddPostClicked={isAddPostClicked}
                mutate={mutate}
              />
            </motion.div>
            {!data && <CircularProgress color="primary" />}

            {data
              ?.slice(0)
              .reverse()
              .map((post) => {
                return (
                  String(post.postName)
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) && (
                    <Post
                      key={post.id}
                      id={post.id}
                      title={post.postName}
                      content={post.postDescription}
                      likeCount={post.postLike}
                      comments={[]}
                      date={post.postTime}
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

export default Forum;
