import Header from "@/components/header/Header";

const HeroCoursesBg = ({
  children,
  height = 388,
  heroHeight = 308,
}: {
  children: React.ReactNode;
  height?: number | string;
  heroHeight?: number | string;
}) => {
  return (
    <>
      <div
        className="topContainer"
        style={{
          borderBottom: "1px solid var(--light-bg)",
        }}
      >
        <div
          className="container1200"
          style={{
            height: height,
            backgroundImage: "url(/svgs/coursesHeroBg.svg)",
          }}
        >
          <Header style={{ paddingInline: 0 }} />
          <div className="gcc" style={{ height: heroHeight }}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCoursesBg;
