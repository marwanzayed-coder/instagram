import { Box, Button, Link, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "../input";
import {
  ContainerStyle,
  PaperStyleOne,
  LogoStyle,
  FormStyle,
  PaperStyleTwo,
} from "./styles";
import Logo from "../../../assets/images/logo-write.png";

const LoginComp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const inputs = [
    {
      id: "1",
      name: "email",
      type: "email",
      label: "Email",
      messageError: "Email Error",
    },
    {
      id: "2",
      name: "password",
      type: "password",
      label: "Password",
      messageError: "Password Error",
    },
  ];

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const checkButton = values.email < 6 && values.password < 6 ? true : false;

  return (
    <Box style={ContainerStyle}>
      <Box>
        <Paper variant="outlined" square style={PaperStyleOne}>
          <Box
            display="flex"
            sx={{ padding: "20px" }}
            justifyContent="center"
            alignItems="center"
          >
            <img style={LogoStyle} alt="logo" src={Logo} loading="lazy" />
          </Box>
          <form action="" autoComplete="off" style={FormStyle}>
            {inputs.map((input) => (
              <Input
                key={input.id}
                messageError={input.messageError}
                value={values[input.name]}
                onChange={handleChange}
                {...input}
              />
            ))}
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              disabled={checkButton}
            >
              Login
            </Button>
          </form>
        </Paper>
        <Paper variant="outlined" square style={PaperStyleTwo}>
          <Box
            display="flex"
            sx={{ padding: "20px" }}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h6" sx={{ margin: 1, fontSize: "16px" }}>
              Don't have an account?
            </Typography>
            <Link to="/register">
              <Typography
                variant="h6"
                sx={{ color: "#2196f3", fontSize: "16px", fontWeight: "bold" }}
              >
                Register
              </Typography>
            </Link>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginComp;
