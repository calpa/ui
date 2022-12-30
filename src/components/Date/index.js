import { Typography } from "@mui/material";

function Date(props) {
  const { date } = props;
  return (
    <Typography
      sx={{
        backgroundColor: "blue.main",
        color: "#fff",
        padding: "10px",
        width: "110px",
        textAlign: "center",
      }}
    >
      {date}
    </Typography>
  );
}

export default Date;
