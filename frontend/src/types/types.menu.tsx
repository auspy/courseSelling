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

export interface LeftMenuProps extends React.PropsWithChildren {
  menu: LeftMenuItemProps[];
  active: string;
  username: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export type LeftMenuBottomNaviProps = {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};
