import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles({
  name: "List",
})((theme) => ({
  container: {},
  topic: {
    margin: "0",
    padding: "0 0 0 28px",
    display: "flex",
    boxSizing: "border-box",
    justifyContent: "space-between",
    height: "32px",
    position: "relative",
    borderBottom: "2px solid #dadada",
    lineHeight: "30px",
    background: "no-repeat left center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: "21px",
  },
  content: {
    border: `2px solid #dadada`,
    borderTop: `0 none`,
    padding: `16px 25px 15px`,
  },
}));
