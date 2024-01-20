import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import {useForm} from "react-hook-form"

const Login = () => {
  const {register, handleSubmit, watch, formState : {errors}} = useForm();

  const onSubmit = (data) => console.log("This is data",data)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          padding: "30px",
          backgroundColor: "#F3F8E0",
          width: "auto",
          height: "auto",
          margin: 0,
          borderRadius: "10px",
        }}
      >
        {/* //TODO: Integrate react-hook-form to the Login Page */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Typography
              style={{ fontFamily: "sans-serif", fontWeight: "bold", marginBottom: "2px" }}
            >
              Email
            </Typography>
            <TextField placeholder="Enter Email" />
          </div>
          {/* Password Field */}
          <div
            className="password-field"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "10px",
            }}
          >
            <Typography
              style={{ fontFamily: "sans-serif", fontWeight: "bold", marginBottom: "2px" }}
            >
              Password
            </Typography>
            <TextField placeholder="Enter Password" type="password"></TextField>
          </div>
          <Button variant="contained" style={{ marginTop: "20px" }} color="success">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
