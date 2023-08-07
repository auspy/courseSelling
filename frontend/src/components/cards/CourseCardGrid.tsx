import { CourseCardGridProps } from "@/types/types.card";
import CourseCard from "./CourseCard";

const CourseCardGrid = ({
  cardData,
  gridClass,
  gridStyle,
  type,
  maxItems,
}: CourseCardGridProps) => {
  const defaultStyle =
    type == "row"
      ? {
          display: "flex",
          overflowX: "auto",
        }
      : {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,260px)",
        };
  return (
    <>
      <div
        className={`container1200 scrollbar ${gridClass}`}
        style={{
          paddingBottom: 7,
          gap: 10,
          ...(defaultStyle as React.CSSProperties),
          ...gridStyle,
        }}
      >
        {cardData?.map(
          (card, index) =>
            (maxItems ? index < maxItems : true) && (
              <CourseCard
                key={index + card.course.title}
                course={card.course}
                href={Boolean(card.href) && card.href + card.course._id}
              />
            )
        )}
      </div>
    </>
  );
};

export default CourseCardGrid;
