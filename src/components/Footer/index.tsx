import { Grid, Link, List, ListItem, Typography } from "@mui/material";

import "./index.css";

const LinkColor = `info.dark`;

const ExternalLink = (props) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      color={LinkColor}
    >
      {props.children || props.title}
    </Link>
  );
};

const Footer = (props) => {
  const { categories, quickLinks } = props;

  return (
    <Grid
      container
      className="site-footer"
      sx={{
        padding: `10px`,
        backgroundColor: `#f0f0f0`,
      }}
    >
      <Grid container>
        <Grid item sm={12} md={6}>
          <Typography variant="h6">About</Typography>
          <Typography textAlign="justify">{props.about}</Typography>
        </Grid>

        <Grid item xs={6} md={3}>
          <Typography variant="h6">Categories</Typography>
          <List
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            {categories.map((category, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: 0,
                }}
              >
                <ExternalLink href={category.link}>
                  {category.title}
                </ExternalLink>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={6} md={3}>
          <Typography variant="h6">Quick Links</Typography>
          <List
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            {quickLinks.map((link, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: 0,
                }}
              >
                <ExternalLink href={link.link}>{link.title}</ExternalLink>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      <Grid container>
        <Grid container>
          <Grid item md={8} sm={6} xs={12}>
            <p className="copyright-text">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved
              by&nbsp;
              <Link href="#" color={LinkColor}>
                Calpa Liu
              </Link>
              .
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
