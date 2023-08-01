import Button from "@/components/buttons/Button";
import Header from "@/components/header/Header";
import DetailTabGroup from "@/components/text/DetailTabGroup";
import Heading from "@/components/text/Heading";
import { CourseProps } from "@/types/types.course";
import Image from "next/image";

const Course = () => {
  // get data from api
  const courseData: CourseProps = {
    id: "1",
    title: "creative writing: Crafting personal essays with impact",
    price: 649,
    creator: "John Doe",
    purchaseCount: 156000,
    img: {
      img: "/images/hero/business.png",
      alt: "business",
      height: 1,
      width: 1,
    },
  };
  return (
    <div className="topContainer" style={{ height: "100vh" }}>
      <div
        className="topContainer"
        style={{
          borderBottom: "1px solid var(--light-bg)",
        }}
      >
        <Header />
      </div>
      {/* Course */}
      <div className="container1200 mt40">
        {/* HERO */}
        <div
          className="w100"
          style={{
            padding: "30px 20px",
            borderRadius: 5,
            backgroundColor: "var(--bg)",
            border: "1px solid var(--light-bg)",
            position: "relative",
          }}
        >
          {/* TEXT CONTAINER */}
          <div style={{ width: "100%", paddingInlineEnd: 350 }}>
            <Heading
              headingStyle={{ lineHeight: "125%" }}
              text="creative writing: Crafting personal essays with impact"
            />
            <p className="regu16 os mt15 mb20" style={{ opacity: 0.8 }}>
              Speed up the skill acquisition process by finding unlimited
              courses that matches your niche.
            </p>
            <DetailTabGroup
              data={[
                { title: "Price", value: "₹ 467" },
                { title: "Price", value: "₹ 467" },
              ]}
            />
          </div>
          {/* BUY BTN CONTAINER */}
          <div
            className="fcc"
            style={{
              width: 307,
              position: "absolute",
              right: 20,
              top: 20,
              border: "1px solid #383838",
              boxShadow: "0px 5px 15px 0px rgba(4, 4, 4, 0.30)",
              borderRadius: 5,
              backgroundColor: "var(--dark-bg)",
            }}
          >
            <Image
              src={courseData.img.img}
              alt={courseData.img.alt}
              height={176}
              width={303}
            />
            {/* BELOW IMAGE DATA */}
            <div className="p20 w100">
              <div className="frc" style={{ gap: 10 }}>
                <h3 className="os">₹ 699</h3>
                <p
                  className="regu16 os"
                  style={{ textDecorationLine: "line-through" }}
                >
                  ₹ 3129
                </p>

                <p className="mw bold16" style={{ color: "var(--primary)" }}>
                  80% off
                </p>
              </div>
              {/* SALE ALARM */}
              <p className="regu12 mt5" style={{ color: "var(--red)" }}>
                Hurry 😱<span className="semi"> 7 hours</span> left at this
                price!
              </p>
              {/* BUTTON */}
              <Button value="buy now" buttonClass="mt20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Course;
