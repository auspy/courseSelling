import CoursePage from "@/components/coursesPage/CoursePage";
import HeaderAnimateScrollFadeWrapper from "@/components/header/HeaderAnimateScrollFadeWrapper";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <HeaderAnimateScrollFadeWrapper>
        <CoursePage id={params.id} />
      </HeaderAnimateScrollFadeWrapper>
    </>
  );
}
