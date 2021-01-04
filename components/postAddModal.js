import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styles from "../styles/addPostModal.module.css";
import AddPost from "./addPost";
import Modal from "@material-ui/core/Modal";
import React from "react";

const PostAddModal = ({ setAddPostClicked, isAddPostClicked, mutate }) => {
  const handleClose = () => {
    setAddPostClicked(false);
  };

  return (
    <Modal
      className={styles.container}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isAddPostClicked}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 400,
      }}
    >
      <Fade in={isAddPostClicked}>
        <div>
          {" "}
          {isAddPostClicked && (
            <AddPost
              setAddPostClicked={setAddPostClicked}
              isAddPostClicked={isAddPostClicked}
              mutate={mutate}
            />
          )}
        </div>
      </Fade>
    </Modal>
  );
};
export default PostAddModal;
