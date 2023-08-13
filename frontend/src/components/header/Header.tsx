import Logo from "./Logo";
import Navigation from "./Navigation";
import { HeaderProps } from "@/types/types.ui";
import HeaderAnimateScrollFadeWrapper from "./HeaderAnimateScrollFadeWrapper";
import { memo } from "react";

export const HeaderItems = ({
  items = (
    <>
      <Logo />
      <Navigation />
    </>
  ),
  style,
}: {
  items?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <>
      <div
        id="header"
        className={`frcsb container1200`}
        style={{ height: 80, ...style }}
      >
        {items}
      </div>
    </>
  );
};

const Header = ({ style }: HeaderProps) => {
  return (
    <>
      <HeaderAnimateScrollFadeWrapper>
        <HeaderItems style={style} />
      </HeaderAnimateScrollFadeWrapper>
    </>
  );
};

export default memo(Header);
