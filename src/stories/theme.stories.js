import { Grid } from "@mui/material";

export default {
  title: `Theme`,
};

const Item = (props) => (
  <Grid
    item
    sx={{
      backgroundColor: props.backgroundColor,
      padding: `10px`,
      width: `100px`,
    }}
  >
    {props.children}
  </Grid>
);

const colors = ["primary", "secondary", "error", "info", "success", "warning"];

const Template = () => {
  return (
    <Grid container>
      {colors.map((color) => (
        <Item key={color} backgroundColor={`${color}.main`}>
          {color}
        </Item>
      ))}
    </Grid>
  );
};

export const Default = Template.bind({});
