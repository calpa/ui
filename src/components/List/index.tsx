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
    <div>
      <h2 className={cx(classes.topic)}>
        <span>{topic}</span>
      </h2>
      <ol className={cx(classes.content)}>
        {listItems.map((item, index) => (
          <ListItem key={index} {...item} Link={Link} />
        ))}
      </ol>
    </div>
  );
};

export default List;
