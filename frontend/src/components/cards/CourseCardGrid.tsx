import { CourseCardGridProps } from "@/types/types.card";
import CourseCard from "./CourseCard";

const CourseCardGrid = ({
  cardData,
  gridClass,
  gridStyle,
  type,
}: CourseCardGridProps) => {
  const defaultStyle =
    type == "row"
      ? {
          display: "flex",
          gap: 10,
          overflowX: "auto",
        }
      : {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 10,
        };
  return (
    <>
      <div
        className={`container1200 scrollbar ${gridClass}`}
        style={{
          paddingBottom: 7,
          ...(defaultStyle as React.CSSProperties),
          ...gridStyle,
        }}
      >
        {cardData?.map(
          (card, index) =>
            index < 4 && (
              <CourseCard
                key={index + card.course.title}
                course={card.course}
              />
            )
        )}
      </div>
    </>
  );
};

export default CourseCardGrid;
