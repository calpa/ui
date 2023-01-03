import EnhancedLink from "../EnhancedLink";
import { ListItemProps } from "./listitem";
import { useStyles } from "./makeStyles";

const ListItem = (props: ListItemProps) => {
  const { number, title, url } = props;

  const { classes, cx } = useStyles();

  return (
    <li className={cx(classes.listItem)}>
      <EnhancedLink url={url} className={cx(classes.url)}>
        <b className={cx(classes.number)}>{number}</b>
        <span className={cx(classes.title)}>{title}</span>
      </EnhancedLink>
    </li>
  );
};

export default ListItem;
