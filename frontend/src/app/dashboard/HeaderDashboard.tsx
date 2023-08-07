import ButtonLogin from "@/components/buttons/ButtonLogin";
import Logo from "@/components/header/Logo";

const HeaderDashboard = () => {
  return (
    <>
      <div
        className="topContainer frcsb"
        style={{
          position: "fixed",
          top: 0,
          height: 80,
          paddingInline: 30,
          zIndex: 3,
          borderBottom: "var(--light-border)",
        }}
      >
        <Logo />
        <ButtonLogin />
      </div>
    </>
  );
};

export default HeaderDashboard;
