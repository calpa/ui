import { useEffect, useState } from "react";

import { Pagination, Stack } from "@mui/material";

export default {
  title: "Components/Pagination",
  component: Pagination,
};

const Template = (args) => {
  const { count } = args;
  const [page, setPage] = useState(args.page);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(args.page);
  }, [args.page]);

  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={handleChange} />
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        color="primary"
      />
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        color="secondary"
      />
      <Pagination count={count} page={page} onChange={handleChange} disabled />
    </Stack>
  );
};

export const Default = Template.bind({});
Default.args = {
  count: 10,
  page: 1,
};
