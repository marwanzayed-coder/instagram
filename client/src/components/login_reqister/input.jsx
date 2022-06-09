import React from "react";
import { FormControl, TextField, Typography } from "@mui/material";

const Input = ({ messageError, ...props }) => {
  const ErrorStyle = {
    color: "#da5252",
    fontSize: "16px",
    whiteSpace: "nowrap",
  };
  return (
    <FormControl>
      <TextField
        required
        variant="outlined"
        autoComplete="on"
        {...props}
      ></TextField>
      <Typography style={ErrorStyle}>{messageError}</Typography>
    </FormControl>
  );
};

export default Input;
