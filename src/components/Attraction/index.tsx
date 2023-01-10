import { Grid, Typography } from "@mui/material";
import EnhancedLink from "../EnhancedLink";
import type { AttractionProps } from "./Attraction";

function Attraction(props: AttractionProps) {
  const { description, title, location, articles, Image, Link } = props;

  return (
    <Grid container id={`attraction-${location}`}>
      <Typography
        variant="h2"
        sx={{
          borderLeft: `5px solid red`,
          paddingLeft: `10px`,
        }}
      >
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
        {Image !== undefined && (
          <Grid item xs={12} sm={3}>
            <Image />
          </Grid>
        )}

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
              },
            }}
          >
            <Typography>立刻探索{location}！</Typography>
            <ul
              style={{
                paddingInlineStart: 0,
                listStyleType: `none`,
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
