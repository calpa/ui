import { Typography } from "@mui/material";
import { useStyles } from "./makeStyles";

type MainImageProps = {
  backgroundImage: string;
};

function MainImage(props: MainImageProps) {
  const { backgroundImage } = props;

  const { classes, cx } = useStyles({
    backgroundImage,
  });
  return (
    <div id="mainImage" className={cx(classes.mainImage)}>
      <div>
        <figure>
          <div className={cx(classes.image)}></div>
        </figure>
      </div>
      <div className={cx(classes.mainCopy)}>
        <Typography variant="h1" className={cx(classes.text)}>
          秋葉原
        </Typography>
      </div>
    </div>
  );
}

export default MainImage;
