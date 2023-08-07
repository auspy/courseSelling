import { MenuItemProps } from "@/types/types.menu";
import { SchoolRounded } from "@/components/thirdParty/mui";

export const dummyLeftMenuItems: MenuItemProps[] = [
  {
    name: "Courses",
    href: "/dashboard",
    icon: <SchoolRounded color="inherit" fontSize="small" />,
  },
];
