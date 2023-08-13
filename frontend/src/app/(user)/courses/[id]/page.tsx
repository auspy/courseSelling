import CoursePage from "@/components/coursesPage/CoursePage";
import Header from "@/components/header/Header";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <CoursePage
        id={params.id}
        header={
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
