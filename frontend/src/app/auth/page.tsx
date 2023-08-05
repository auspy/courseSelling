"use client";
import Logo from "@/components/header/Logo";
import {
  Alert,
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

export default function Login() {
  const params = useSearchParams().get("t");
  const [pageType, setPageType] = useState<"login" | "register">(
    params == "r" ? "register" : "login"
  );
  const isLogin = pageType === "login";
  const [_, setUserState] = useRecoilState(atomUserName);
  const [role, setRole] = useState("USER");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const [clicked, setClicked] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
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
    if (username?.length < 4) {
      return "Username must be atleast 4 characters";
    }
    // if (data?.login?.msg.includes("user not found")) {
    //   return "user not found";
    // }
    return "";
  };
  const setErrorMsg = (msg: string, timer: number = 5000) => {
    setTimeout(() => {
      setError("");
    }, timer);
    setError(msg);
  };
  const [login, { data, loading }] = useMutation(isLogin ? LOGIN : REGISTER);
  const handleButtonClick = () => {
    console.log(username, password);
    setClicked(true);
    if (username?.length > 3 && password?.length > 3) {
      console.log("clicked");

      login({
        variables: {
          username,
          password,
          role,
        },
        onError: (error) => {
          console.log("error", error);
          setErrorMsg("Error: Login failed");
          setClicked(false);
        },
        onCompleted: (data) => {
          console.log("completed 2", data);
          if (
            data?.login?.status == "failed" ||
            data?.register?.status == "failed"
          ) {
            setUsername("");
            setPassword("");
            setErrorMsg(data?.login?.msg || data?.register?.msg);
            setClicked(false);
            return;
          }
          localStorage.setItem("user", JSON.stringify({ username, role }));
          setUserState({ username, role });
          router.push("/");
        },
      });
    }
    console.log("query data", data, loading, error);
  };
  return (
    <>
      <div
        className="topContainer"
        style={{ height: "100vh", width: "100%", padding: 30 }}
      >
        {Boolean(error) && (
          <Alert
            style={{
              position: "fixed",
              top: 40,
              right: 40,
              backgroundColor: "var(--red)",
              fontFamily: "Raleway,sans-serif",
            }}
            className="medi14"
            variant="filled"
            severity={"error"}
          >
            {error[0]?.toUpperCase() + error.slice(1)}
          </Alert>
        )}
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
              helperText={usernameHelperText()}
              color={"primary"}
              error={username.length > 0 && username?.length < 4}
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
                error={password.length > 0 && password?.length < 4}
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
              <ToggleButton value="USER">User</ToggleButton>
              <ToggleButton value="ADMIN">Creator</ToggleButton>
            </ToggleButtonGroup>
          </ThemeProvider>
          <Button
            type="submit"
            value={pageType}
            disabled={
              clicked || loading || username?.length < 4 || password?.length < 4
            }
            buttonClass="mt20"
            loading={clicked || loading}
            buttonStyle={{ boxShadow: "none" }}
            onClick={handleButtonClick}
          />
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
