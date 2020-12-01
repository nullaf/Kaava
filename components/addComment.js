import styles from "../styles/Comment.module.css";
import {TextField} from "@material-ui/core";

export default function Addcomment()  {
    return <div className={styles.addComment}>
        <TextField label="Add Comment" variant="outlined" fullWidth />
    </div>;
};

