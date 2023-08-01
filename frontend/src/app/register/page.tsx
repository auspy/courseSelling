"use client";
import Logo from "@/components/header/Logo";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import muiTheme from "@/helper/muiTheme";
import Button from "@/components/buttons/Button";
import Link from "next/link";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <div
        className="topContainer"
        style={{ height: "100vh", width: "100%", padding: 30 }}
      >
        <div
          className="fccc"
          style={{
            height: "100%",
          }}
        >
          <Logo style={{ fontSize: 36 }} />
          <h4
            className="upper whiteBox mb30"
            style={{ fontSize: 20, color: "var(--dark-bg)" }}
          >
            Register
          </h4>
          <ThemeProvider theme={muiTheme}>
            <TextField
              sx={{ m: 1, width: "35ch" }}
              id="outlined-basic"
              label="Username"
              variant="outlined"
              type="text"
              color={"primary"}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <FormControl
              sx={{ m: 1, width: "35ch" }}
              variant="outlined"
              color="primary"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
          </ThemeProvider>
          <Button
            value="Register"
            buttonClass="mt20"
            buttonStyle={{ boxShadow: "none" }}
          />
          <p
            className="regu14 os mt40"
            style={{
              color: "#ccc",
            }}
          >
            Already registered?{" "}
            <Link
              href={"/login"}
              className="semi14 os"
              style={{
                color: "var(--primary)",
                textDecoration: "underline",
              }}
            >
              Click here to login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
