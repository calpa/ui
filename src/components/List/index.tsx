import ListItem from "../ListItem";
import { ListItemProps } from "../ListItem/listitem";
import { useStyles } from "./makeStyles";

type ListProps = {
  listItems: ListItemProps[];
  topic: string;
};

const List = (props: ListProps) => {
  const { listItems, topic } = props;
  const { classes, cx } = useStyles();
  return (
    <div id="hotnews" className="block">
      <h2 className={cx(classes.topic)}>
        <span>{topic}</span>
      </h2>
      <div className={cx(classes.content)}>
        {listItems.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default List;
