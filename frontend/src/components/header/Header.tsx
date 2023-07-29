import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return <>
    <div className="frcsb" style={{ height: 80 }}><Logo />
      <Navigation /></div>
  </>;
};

export default Header;
