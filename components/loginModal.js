import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styles from "../styles/loginModal.module.css";
import Login from "./login";
import Signup from "./signup";
import Modal from "@material-ui/core/Modal";
import React from "react";

const LoginModal = ({setLoginClicked,setSignupClicked,isLoginClicked,isSignupClicked}) => {

    const handleClose = () => {
        setLoginClicked(false);
        setSignupClicked(false);
    };

    return(<Modal
        className={styles.loginmodal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isSignupClicked || isLoginClicked}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 600,
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
    </Modal>)
}
export default LoginModal;
