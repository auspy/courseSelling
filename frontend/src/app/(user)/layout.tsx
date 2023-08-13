import Footer from "@/components/footer/Footer";

const layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default layout;
