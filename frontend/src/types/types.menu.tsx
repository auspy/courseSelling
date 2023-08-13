export type MenuItemProps = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

export type LeftMenuItemProps = MenuItemProps & {
  isExpanded: boolean;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export type MenuProps = {
  menu: LeftMenuItemProps[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export type ExpandingMenuProps = MenuProps & {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};
export interface LeftMenuProps
  extends React.PropsWithChildren,
    ExpandingMenuProps {
  username: string;
}

export type LeftMenuBottomNaviProps = {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export type BottomNavigationProps = MenuProps & {};
