import {
  BottomNavigation as BN,
  BottomNavigationAction,
} from "@/components/thirdParty/mui";
import muiTheme from "@/helper/muiTheme";
import { BottomNavigationProps } from "@/types/types.menu";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/navigation";
const BottomNavigation = ({
  menu,
  active,
  setActive,
}: BottomNavigationProps) => {
  const router = useRouter();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActive(newValue);
  };
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <BN
          sx={{ width: "100%" }}
          style={{ position: "fixed", bottom: 0 }}
          value={active}
          onChange={handleChange}
        >
          {menu.map((item, index) => (
            <BottomNavigationAction
              key={index + item.name}
              label={item.name}
              value={item.name}
              icon={item.icon}
              onClick={(e) => {
                router.push(item.href);
                handleChange(e, item.name);
              }}
            />
          ))}
        </BN>
      </ThemeProvider>
    </>
  );
};

export default BottomNavigation;
