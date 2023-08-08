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
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import muiTheme from "@/helper/muiTheme";
import Button from "@/components/buttons/Button";
import { useMutation } from "@apollo/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useRecoilState } from "recoil";
import { atomUserName } from "@/state/atoms/atom.username";
// gql imports
import LOGIN from "@/api/graphql/mutations/login.graphql";
import REGISTER from "@/api/graphql/mutations/register.graphql";
import atomToast from "@/state/atoms/atom.toast";

export default function Login() {
  const params = useSearchParams().get("t");
  const [pageType, setPageType] = useState<"login" | "register">(
    params == "r" ? "register" : "login"
  );
  const isLogin = pageType === "login";
  const [_, setUserState] = useRecoilState(atomUserName);
  const [role, setRole] = useState<"USER" | "ADMIN">("USER");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [, setToast] = useRecoilState(atomToast);
  const router = useRouter();
  const [clicked, setClicked] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [login, { data, loading }] = useMutation(isLogin ? LOGIN : REGISTER);
  const buttonDisabled =
    clicked ||
    loading ||
    username?.length < 4 ||
    password?.length < 4 ||
    !role ||
    password?.length > 30 ||
    username?.length > 70;
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: "USER" | "ADMIN"
  ) => {
    setRole(newAlignment);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const usernameHelperText = (): string => {
    if (username?.length == 0) {
      return "";
    }
    if (username?.length > 70) {
      return "Username must be less than 70 characters";
    }
    if (username?.length < 4) {
      return "Username must be atleast 4 characters";
    }
    // if (data?.login?.msg.includes("user not found")) {
    //   return "user not found";
    // }
    return "";
  };
  const handleButtonClick = () => {
    console.log(username, password);
    setClicked(true);
    if (username?.length > 3 && password?.length > 3) {
      console.log("clicked");

      login({
        variables: {
          username: username.trim(),
          password: password.trim(),
          role,
        },
        onError: (error) => {
          console.log("error", error);
          setToast({
            text: "Error: Login failed",
            type: "error",
            secs: 5000,
          });
          setClicked(false);
        },
        onCompleted: (data) => {
          setUsername("");
          setPassword("");
          console.log("completed 2", data);
          if (
            data?.login?.status == "failed" ||
            data?.register?.status == "failed"
          ) {
            setToast({
              text: data?.login?.msg || data?.register?.msg,
              type: "error",
              secs: 5000,
            });
            setClicked(false);
            return;
          }
          if (!isLogin) {
            setToast({
              text: "Registration successful. Please login",
              type: "success",
              secs: 5000,
            });
            setPageType("login");
            setClicked(false);
            return;
          }
          setToast({
            text: "Login successful. Welcome To Skillz 🥳",
            type: "success",
            secs: 5000,
          });
          localStorage.setItem(
            "user",
            JSON.stringify({ username: data.login.data?.username, role })
          );
          setUserState({ username: data.login.data?.username, role });
          if (role == "ADMIN") {
            router.push("/dashboard");
            return;
          }
          router.push("/");
        },
      });
    }
    console.log("query data", data, loading);
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
            {pageType}
          </h4>
          {/* <form
            onError={() => {
              console.log("here error");
            }}
            className="fcc"
            onSubmit={handleButtonClick}
          > */}
          <ThemeProvider theme={muiTheme}>
            <TextField
              sx={{ m: 1, width: "35ch" }}
              id="outlined-basic"
              label="Username"
              variant="outlined"
              type="text"
              value={username}
              helperText={usernameHelperText()}
              color={"primary"}
              error={
                (username.length > 0 && username?.length < 4) ||
                username?.length > 70
              }
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
                value={password}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                error={
                  (password.length > 0 && password?.length < 4) ||
                  password?.length > 30
                }
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
            <ToggleButtonGroup
              sx={{ m: 1, width: "35ch" }}
              color="primary"
              value={role}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton disabled={role == "USER"} value="USER">
                User
              </ToggleButton>
              <ToggleButton disabled={role == "ADMIN"} value="ADMIN">
                Creator
              </ToggleButton>
            </ToggleButtonGroup>
          </ThemeProvider>
          <div>
            <Button
              type="submit"
              value={pageType}
              disabled={buttonDisabled}
              buttonClass="mt20"
              loading={clicked || loading}
              buttonStyle={{ boxShadow: "none" }}
              onClick={handleButtonClick}
            />
          </div>
          {/* </form> */}
          <SwitchPageType isLogin={isLogin} setPageType={setPageType} />
        </div>
      </div>
    </>
  );
}

const SwitchPageType = ({
  isLogin,
  setPageType,
}: {
  isLogin: boolean;
  setPageType: React.Dispatch<React.SetStateAction<"login" | "register">>;
}) => {
  const text = isLogin ? "New to Skillz?" : "Already registered?";
  const linkText = isLogin ? "Create new account" : "Click here to login";
  const handleClick = () => {
    setPageType(isLogin ? "register" : "login");
  };
  return (
    <>
      <div className="frc mt40">
        <p
          className="regu14 os mr5"
          style={{
            color: "#ccc",
          }}
        >
          {text}{" "}
        </p>
        <button
          onClick={handleClick}
          className="semi14 os"
          style={{
            color: "var(--primary)",
            textDecoration: "underline",
            textTransform: "none",
          }}
        >
          {linkText}
        </button>
      </div>
    </>
  );
};
