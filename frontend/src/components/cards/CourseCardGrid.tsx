import { CourseCardGridProps } from "@/types/types.card";
import CourseCard from "./CourseCard";

const CourseCardGrid = ({
  cardData,
  gridClass,
  gridStyle,
}: CourseCardGridProps) => {
  return (
    <>
      <div
        className={`frc container1200 ${gridClass}`}
        style={{
          gap: 31,
          flexWrap: "wrap",
          justifyContent: cardData.length > 2 ? "space-evenly" : "start",
          ...gridStyle,
        }}
      >
        {cardData?.map(
          (card, index) =>
            index < 4 && (
              <CourseCard
                key={index + card.course.title}
                img={card.img}
                course={card.course}
              />
            )
        )}
      </div>
    </>
  );
};

export default CourseCardGrid;
