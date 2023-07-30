import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="topContainer">
      <div className="frcsb container1200" style={{ height: 80 }}>
        <Logo />
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
