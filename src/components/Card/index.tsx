import { FC } from "react";
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

const CustomCard: FC<CustomCardProps> = ({
  onClick,
  title,
  description,
  date,
  moreText,
  tags,
  Link,
}) => {
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
            <Date date={date} />
          </Grid>
          <Typography>{description}</Typography>
          <Grid container item xs={12}>
            {map(tags, (tag) => (
              <Tag tag={tag} key={tag} Link={Link}>
                {tag}
              </Tag>
            ))}
          </Grid>
          <Typography color="blue.main">{moreText}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CustomCard.defaultProps = {
  moreText: "Read More",
  tags: [],
};

export default CustomCard;
