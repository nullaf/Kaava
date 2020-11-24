import styles from "../styles/Forum.module.css";
import Forumnav from "../components/forumnav";
import React, { useState } from "react";
import LoginModal from "../components/loginModal";
import Post from "../components/post";
import Head from "next/head";
import useSWR from "swr";
import fetcher from "../lib/fetch";
import Typography from "@material-ui/core/Typography";


function Forum() {

  const [searchValue, setSearchValue] = useState("");
  const [isLoginClicked, setLoginClicked] = useState(false);
  const [isSignupClicked, setSignupClicked] = useState(false);

  const { data, error } = useSWR("/api/dummyposts", fetcher);

  return (
    <div>
      <Head>
        <title>Forum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Forumnav loginStatus={setLoginClicked} signupStatus={setSignupClicked} searchValue={searchValue} setSearchValue={setSearchValue}/>

      <div className={styles.container}>
        <LoginModal
          isLoginClicked={isLoginClicked}
          isSignupClicked={isSignupClicked}
          setSignupClicked={setSignupClicked}
          setLoginClicked={setLoginClicked}
        />
        <div className={styles.postContainer}>

                {!data && <Typography variant="h2">Loading</Typography>}
        {data?.posts.post.map((post) => {
          return (
              post.title.toLowerCase().includes(searchValue.toLowerCase()) && (
            <Post
              key={post.id}
              id ={post.id}
              title={post.title}
              content={post.content.slice(0,100) + "..."}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              date={post.date}
            />
              ));
        })}

        </div>
      </div>
    </div>
  );
}

export default Forum;
