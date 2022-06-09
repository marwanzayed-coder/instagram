import React from "react";
import { Box, Typography } from "@mui/material";
import { ContainerStyle, LogoStyle, LinkStyle } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-write.png";

const NotFound = () => {
  return (
    <Box style={ContainerStyle}>
      <Box marginTop="3rem">
        <Link to="/" style={LogoStyle}>
          <img src={Logo} alt="Logo" style={LogoStyle} loading="lazy" />
        </Link>
        <Typography variant="h6">Sorry, this page isn't available</Typography>
      </Box>
      <Box marginTop="3rem">
        <Typography variant="h6">
          The Link you followed may be broken, or the page may have been
          removed.
        </Typography>
        <Link to="/" style={LinkStyle}>
          Go back to Instagram
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
