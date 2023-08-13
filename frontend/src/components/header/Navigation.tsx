import Link from "next/link";
import { LinkItem } from "@/types/types.text";
import ButtonLogin from "../buttons/ButtonLogin";
import { DeviceTypeEnum } from "@/types/types.ui";
import { IconButton, MenuRounded } from "@/components/thirdParty/mui";
import { useContext, useState } from "react";
import { DeviceTypeContext } from "@/state/contexts/context";
import { Drawer, ThemeProvider } from "@mui/material";
import muiTheme from "@/helper/muiTheme";
import { CloseRounded } from "@mui/icons-material";
import Button from "../buttons/Button";
import ButtonSec from "../buttons/ButtonSec";

const linkClass = `semi14-os caps`;
const items: LinkItem[] = [
  { name: "explore", href: "/courses", class: linkClass },
  // { name: "purchased", href: "/courses/purchased", class: linkClass },
];

// type NavigationProps = {
//   active: string;
//   setActive: React.Dispatch<React.SetStateAction<string>>;
// };

const Navigation = ({ sticky }: { sticky: boolean }) => {
  const deviceType = useContext(DeviceTypeContext);
  const isDesktop = deviceType == DeviceTypeEnum.desktop;
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="frc" style={{ gap: 25 }}>
        {isDesktop ? (
          list(sticky)
        ) : (
          <IconButton aria-label="menu" color="inherit" onClick={toggleDrawer}>
            <MenuRounded color="inherit" />
          </IconButton>
        )}
        <ThemeProvider theme={muiTheme}>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={toggleDrawer}
            elevation={30}
          >
            <IconButton
              color="inherit"
              style={{ position: "absolute", top: 15, right: 15, zIndex: 2 }}
              onClick={toggleDrawer}
            >
              <CloseRounded color="inherit" />
            </IconButton>
            <h4 className="upper semi12 mb20" style={{ opacity: 0.4 }}>
              Menu
            </h4>
            {list(sticky)}
          </Drawer>
        </ThemeProvider>
        <ButtonLogin />
      </div>
    </>
  );
};

export default Navigation;
const list = (sticky: boolean) =>
  sticky ? (
    <div className="frc" style={{ position: "relative", top: 3 }}>
      <Button buttonStyle={{}} buttonClass="mr25" value="Try demo" />
      <ButtonSec value="explore" />
    </div>
  ) : (
    items.map((item, index) => (
      <Link
        className={item.class}
        // style={{
        //   color: active == item.name ? "var(--primary)" : "var(--white)",
        // }}
        href={item.href}
        key={item.name + index}
      >
        {item.name}
      </Link>
    ))
  );
