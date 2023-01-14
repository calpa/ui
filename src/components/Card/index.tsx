import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { map } from "lodash";
// import Date from "../Date";
import Tag from "../Tag";
import { CustomCardProps } from "./card";

const CustomCard = (props: CustomCardProps) => {
  const {
    onClick,
    title,
    description,
    date,
    moreText,
    tags,
    Link,
    showDateComponent,
    showTagsComponent,
    imageProps,
  } = props;

  return (
    <Card
      sx={{
        marginBottom: "10px",
      }}
      onClick={onClick}
    >
      <CardActionArea>
        {imageProps && <CardMedia {...imageProps} />}

        <CardContent>
          <Typography
            variant="h1"
            sx={{
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
          {showDateComponent && (
            <Typography
              sx={{
                fontSize: "14px",
                color: "#585858",
              }}
            >
              {date}
            </Typography>
          )}
          <Typography
            sx={{
              fontSize: `14px`,
            }}
          >
            {description}
          </Typography>
          {showTagsComponent && (
            <Grid container item xs={12}>
              {map(tags, (tag) => (
                <Tag tag={tag} key={tag} Link={Link}>
                  {tag}
                </Tag>
              ))}
            </Grid>
          )}
          <Typography color="blue.main">{moreText}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CustomCard.defaultProps = {
  moreText: "Read More",
  tags: [],
  showTagsComponent: true,
  showDateComponent: true,
};

export default CustomCard;
