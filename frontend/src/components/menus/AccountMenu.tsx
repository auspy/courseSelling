"use client";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import { Divider, styled } from "@mui/material";
import { authLogout } from "@/api/auth/auth";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { atomUserName } from "@/state/atoms/atom.username";
import { useMutation } from "@apollo/client";
import LOGOUT from "@/api/graphql/mutations/logout.graphql";
import { Dashboard, MenuBook } from "@mui/icons-material";

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
    marginTop: theme.spacing(1),
    minWidth: 280,
    color: "#fafafa",
    backgroundColor: "#2d2d2d",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "10px 5px",
    },
    "& .MuiMenuItem-root": {
      minHeight: 40,
      fontFamily: "Raleway,sans-serif",
      fontWeight: 500,
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
  clicked,
  setClicked,
}: {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  clicked: boolean;
}) {
  const [userState, setUserState] = useRecoilState(atomUserName);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const [logout, { client }] = useMutation(LOGOUT);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledMenu
      anchorEl={anchorEl}
      id="account-menu"
      open={open && !clicked}
      onClose={handleClose}
      onClick={handleClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem disabled={true}>
        <span className="bold16 caps">{userState.username}</span>
      </MenuItem>
      <Divider />
      {userState.role == "ADMIN" && (
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
          <span className="medi14">Dashboard</span>
        </MenuItem>
      )}
      {userState.role == "USER" && (
        <MenuItem
          onClick={() => {
            // send to dashboard
            router.push("/purchased");
            handleClose();
          }}
        >
          <ListItemIcon>
            <MenuBook fontSize="small" />
          </ListItemIcon>
          <span className="medi14">My Learnings</span>
        </MenuItem>
      )}
      <MenuItem
        onClick={() => {
          try {
            setClicked(true);
            client.clearStore();
            authLogout({
              router,
              setUsername: setUserState,
              localStorage,
              sessionStorage,
              logoutApi: logout,
              setClicked,
            });
            handleClose();
          } catch (error) {
            console.log("error in logout", error);
          }
        }}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        <span className="medi14">Logout</span>
      </MenuItem>
    </StyledMenu>
  );
}
