import Logo from "../header/Logo";

const Footer = () => {
  return (
    <div
      className="topContainer"
      style={{ height: 200, border: "var(--light-border)" }}
    >
      <div className="container1200 frcc" style={{ height: "100%" }}>
        <Logo />
        <h3
          className="ml10 semi16 upper"
          style={{ color: "#fafafa50", fontWeight: 200, letterSpacing: 2 }}
        >
          |
        </h3>
        <h3
          className="ml10 semi16 upper"
          style={{ color: "#fafafa50", fontWeight: 200, letterSpacing: 2 }}
        >
          Unlock Your Potential
        </h3>
      </div>
    </div>
  );
};

export default Footer;
