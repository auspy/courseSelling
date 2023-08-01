import Header from "@/components/header/Header";
import Heading from "@/components/text/Heading";
import Image from "next/image";
import { memo } from "react";

const HeroCourses = () => {
  return (
    <div
      className="topContainer"
      style={{
        borderBottom: "1px solid var(--light-bg)",
      }}
    >
      <div
        className="container1200"
        style={{
          height: 388,
          backgroundImage: "url(/svgs/coursesHeroBg.svg)",
        }}
      >
        <Header />
        <div className="gcc" style={{ height: 308 }}>
          <div className="frc" style={{ position: "relative", gap: 25 }}>
            <Image
              //   style={{ position: "absolute", right: 38, top: 20 }}
              src={"/svgs/girlAndBooks.svg"}
              alt="girl drawing"
              height={118.19}
              width={144.54}
            />
            <Heading
              text="Skillz"
              highlightText="Courses"
              type={0}
              headingStyle={{
                maxWidth: 235,
                lineHeight: "102.4%",
              }}
              highlightTextStyle={{ color: "var(--primary)" }}
            />
            <Image
              style={{ position: "absolute", right: 38, top: 20 }}
              src={"/svgs/girlDraw.svg"}
              alt="girl drawing"
              height={55.13}
              width={53}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroCourses);
