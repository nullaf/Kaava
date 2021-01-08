import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import theme from "./muiThemes/postMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import styles from "../styles/addPost.module.css";

const AddPost = ({ setAddPostClicked, isAddPostClicked, mutate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addClicked = () => {
    setAddPostClicked(false);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postName: String(title),
        name: "Guest",
        postDescription: String(content),
        postLike: 0,
        postTime: new Date(),
      }),
    };
    fetch(
      "https://cors-anywhere.herokuapp.com/https://kaavabackend.herokuapp.com/posts",
      requestOptions
    ).then((response) => {
      response.json();
      mutate();
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Typography variant="h4" color="primary">
          Adding New Post
        </Typography>
        <TextField
          style={{ marginTop: 10 }}
          variant="outlined"
          color="secondary"
          label="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          style={{ marginTop: 10 }}
          variant="outlined"
          color="secondary"
          label="Text"
          multiline
          rows={4}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          fullWidth
          onClick={() => addClicked()}
        >
          Add
        </Button>
      </div>
    </ThemeProvider>
  );
};
export default AddPost;
