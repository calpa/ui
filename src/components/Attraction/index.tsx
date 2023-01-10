import React from "react";
import { Grid, Typography } from "@mui/material";
import EnhancedLink from "../EnhancedLink";

type Article = {
  url: string;
  title: string;
};

type AttractionProps = {
  description: string;
  title: string;
  location: string;
  articles?: Article[];
  image: string;
  Link?: React.ElementType;
};

function Attraction(props: AttractionProps) {
  const { description, title, location, articles, image, Link } = props;

  return (
    <Grid container id={`attraction-${location}`}>
      <Typography variant="h2">
        {title}：{location}
      </Typography>

      <Grid
        container
        sx={{
          marginTop: {
            sm: `10px`,
          },
        }}
      >
        <Grid item xs={12} sm={3}>
          <img
            src={image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>

        <Grid
          container
          xs
          sm
          sx={{
            marginLeft: {
              sm: `10px`,
            },
            marginTop: {
              xs: `10px`,
              sm: `0`,
            },
          }}
        >
          <Grid item xs={12}>
            <Typography variant="body1">{description}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginTop: {
                xs: `10px`,
                // sm: `0`
              },
            }}
          >
            <Typography>立刻探索{location}</Typography>
            <ul
              style={{
                paddingInlineStart: 0,
              }}
            >
              {articles &&
                articles.map((article, index) => (
                  <li key={index}>
                    <EnhancedLink url={article.url} className="" Link={Link}>
                      {article.title}
                    </EnhancedLink>
                  </li>
                ))}
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Attraction;

Attraction.defaultProps = {
  articles: [],
};
