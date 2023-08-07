import DashLayout from "./DashLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashLayout>{children}</DashLayout>
    </>
  );
};
export default Layout;
