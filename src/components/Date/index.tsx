import { Typography } from "@mui/material";

type DateProps = {
  date?: string;
};

const Date = (props: DateProps) => {
  const { date } = props;

  if (!date) {
    return null;
  }

  return (
    <Typography
      sx={{
        backgroundColor: "blue.main",
        color: "#fff",
        padding: "10px",
        width: "110px",
        textAlign: "center",
        fontSize: `16px`,
      }}
    >
      {date}
    </Typography>
  );
};

export default Date;
