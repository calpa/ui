import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { map } from "lodash";
import Date from "../Date";
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
  } = props;

  return (
    <Card
      sx={{
        marginBottom: "10px",
      }}
      onClick={onClick}
    >
      <CardActionArea>
        <CardContent>
          <Grid
            container
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Typography
              variant="h1"
              sx={{
                textDecoration: "none",
              }}
            >
              {title}
            </Typography>
            {showDateComponent && <Date date={date} />}
          </Grid>
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
