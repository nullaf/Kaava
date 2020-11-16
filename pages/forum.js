import styles from "../styles/Forum.module.css";
import Forumnav from "../components/forumnav";
import React, { useState } from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

function Forum() {
  const [isLoginClicked, setLoginClicked] = useState(false);
  const [isSignupClicked, setSignupClicked] = useState(false);

  const handleClose = () => {
    setLoginClicked(false);
    setSignupClicked(false);
  };

  return (
    <div >
      <Forumnav loginStatus={setLoginClicked} signupStatus={setSignupClicked} />

        <div className={styles.container}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={isSignupClicked || isLoginClicked}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isSignupClicked || isLoginClicked}>
              <div
                  className={
                      isLoginClicked || isSignupClicked ? styles.login : styles.default
                  }
              > {isLoginClicked && <Login />}

            {isSignupClicked && <Signup />}
              </div>
          </Fade>
        </Modal>
       </div>
    </div>
  );
}

export default Forum;
