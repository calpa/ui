import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles({
  name: "ListItem",
})((theme) => ({
  url: {
    textDecoration: "none",
    whiteSpace: "nowrap",
    lineHeight: "45px",
    color: "#585858",
    display: "flex",
  },
  title: {
    color: "#585858",
    flex: "1 1 auto",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  number: {
    flex: "0 0 25px",
    marginRight: "2px",
    width: "25px",
    fontSize: "21px",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  listItem: {
    listStyleType: "none",
    height: `45px`,
    borderBottom: `1px dotted #bfbfbf`,
  },
}));
