import ButtonPrimaryLong from "@/components/buttons/ButtonPrimaryLong";
import Heading from "@/components/text/Heading";
import DashCourses from "./DashCourses";

const page = () => {
  return (
    <>
      <div
        id="dashHeader"
        className="frcsb"
        style={{ padding: "30px 0", gap: "30px 50px", flexWrap: "wrap" }}
      >
        <Heading
          text="Skillz"
          highlightText="Dashboard"
          type={1}
          headingStyle={{
            maxWidth: 185,
            lineHeight: "102.4%",
          }}
          highlightTextStyle={{ color: "var(--primary)" }}
        />
        <ButtonPrimaryLong
          value="Create new course"
          buttonTextClass="w100"
          href="/dashboard/create-course"
          buttonStyle={{ height: "min-content", alignSelf: "center" }}
        />
      </div>
      <div className="mt30">
        <h4 className="upper semi mb20" style={{ opacity: 0.5 }}>
          Created Courses
        </h4>
        <DashCourses />
      </div>
    </>
  );
};

export default page;
