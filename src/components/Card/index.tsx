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

const CustomCard = ({
  onClick,
  title,
  description,
  date,
  moreText,
  tags,
  Link,
  showDateComponent,
  showTagsComponent,
}: CustomCardProps) => {
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
            <Grid item xs={6} sm={10}>
              <Typography
                variant="h1"
                sx={{
                  textDecoration: "none",
                  textAlign: "justify",
                }}
              >
                {title}
              </Typography>
            </Grid>
            {showDateComponent && <Date date={date} />}
          </Grid>
          <Typography>{description}</Typography>
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
