import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

import Date from "../Date";

function CustomCard(props) {
  const { onClick, title, description, date, moreText } = props;
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
          <Typography color="primary">{moreText}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;

CustomCard.defaultProps = {
  moreText: "Read More",
};

CustomCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  moreText: PropTypes.string,
};
