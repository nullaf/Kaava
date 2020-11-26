import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#00adb5",
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                color: "#eee",
                backgroundColor: "#393e46",
            },
        },
    },
});
export default theme;
