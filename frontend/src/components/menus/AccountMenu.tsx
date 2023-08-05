"use client";
// import Avatar from "@mui/material/Avatar";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
// import Divider from "@mui/material/Divider";
// import PersonAdd from "@mui/icons-material/PersonAdd";
// import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { styled } from "@mui/material";
import { authLogout } from "@/api/auth/auth";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { atomUserName } from "@/state/atoms/atom.username";
import { useMutation } from "@apollo/client";
import LOGOUT from "@/api/graphql/mutations/logout.graphql";
import { Dashboard } from "@mui/icons-material";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    // marginTop: theme.spacing(1),
    minWidth: 180,
    color: "#fafafa",
    backgroundColor: "#2d2d2d",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "#fafafa",
        // marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: "#383838",
      },
    },
  },
}));

export default function AccountMenu({
  anchorEl,
  setAnchorEl,
}: {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}) {
  const [, setUserState] = useRecoilState(atomUserName);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const [logout] = useMutation(LOGOUT);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledMenu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      //   style={{
      //     backgroundColor: "var(--dark-bg)",
      //   }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {/* <MenuItem onClick={handleClose}>
        <Avatar /> Profile
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>*/}
      <MenuItem
        onClick={() => {
          // send to dashboard
          router.push("/dashboard");
          handleClose();
        }}
      >
        <ListItemIcon>
          <Dashboard fontSize="small" />
        </ListItemIcon>
        <span className="semi14">Dashboard</span>
      </MenuItem>
      <MenuItem
        onClick={() => {
          authLogout({
            router,
            setUsername: setUserState,
            localStorage,
            sessionStorage,
            logoutApi: logout,
          });
          handleClose();
        }}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        <span className="semi14">Logout</span>
      </MenuItem>
    </StyledMenu>
  );
}
