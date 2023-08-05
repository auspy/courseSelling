import CoursePage from "@/components/coursesPage/CoursePage";
import Header from "@/components/header/Header";

export default function Page() {
  return (
    <>
      <CoursePage
        children={
          <div
            className="topContainer"
            style={{
              borderBottom: "1px solid var(--light-bg)",
            }}
          >
            <Header />
          </div>
        }
      />
    </>
  );
}
