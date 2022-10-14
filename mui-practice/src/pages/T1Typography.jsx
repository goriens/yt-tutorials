import { Typography } from "@mui/material";
import React from "react";

export const T1Typography = () => {
  return (
    <>
      <Typography
        fontWeight="bold"
        color="red"
        fontSize="25px"
        backgroundColor="yellow"
      >
        This is Typography
      </Typography>
      <Typography variant="h1">This is heading h1</Typography>
      <Typography variant="h2">This is heading h2</Typography>
      <Typography variant="h3">This is heading h3</Typography>
      <Typography variant="h4">This is heading h4</Typography>
      <Typography variant="h5">This is heading h5</Typography>
      <Typography variant="h6">This is heading h6</Typography>
      <Typography variant="subtitle1">This is subtitle1</Typography>
      <Typography variant="subtitle2">This is subtitle2</Typography>
      <Typography variant="body1">This is body1</Typography>
      <Typography variant="body2">This is body2</Typography>
      <Typography variant="caption">This is caption</Typography>
    </>
  );
};
