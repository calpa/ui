import ListItem from "../ListItem";
import { ListItemProps } from "../ListItem/listitem";
import { useStyles } from "./makeStyles";

type ListProps = {
  listItems: ListItemProps[];
  topic: string;
  Link?: React.ElementType;
};

const List = (props: ListProps) => {
  const { listItems, topic, Link } = props;
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.container)}>
      <h2 className={cx(classes.topic)}>
        <span>{topic}</span>
      </h2>
      <div className={cx(classes.content)}>
        {listItems.map((item, index) => (
          <ListItem key={index} {...item} Link={Link} />
        ))}
      </div>
    </div>
  );
};

export default List;
