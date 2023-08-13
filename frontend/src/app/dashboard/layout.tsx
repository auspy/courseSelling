import DashLayout from "./DashLayout";
import "@/static/styles/dashboard.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashLayout>{children}</DashLayout>
    </>
  );
};
export default Layout;
