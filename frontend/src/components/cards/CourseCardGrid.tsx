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
          gridTemplateColumns: "repeat(auto-fit,minMax(240px,1fr))",
        };
  // const a = cardData?.sort((a, b) => {
  //   console.log("a", a.course.purchaseCount, "b", b.course.purchaseCount);
  //   return (b.course.purchaseCount || 0) - (a.course.purchaseCount || 0);
  // });
  // console.log(a);

  return (
    <>
      <div
        className={`container1200 scrollbar ${gridClass}`}
        style={{
          paddingBottom: 7,
          gap: 20,
          ...(defaultStyle as React.CSSProperties),
          ...gridStyle,
        }}
      >
        {cardData
          ?.sort(
            (a, b) =>
              (b.course.purchaseCount || 0) - (a.course.purchaseCount || 0)
          )
          .map(
            (card, index) =>
              (maxItems ? index < maxItems : true) && (
                <CourseCard
                  key={index + card.course.title}
                  course={card.course}
                  cardStyle={{
                    ...(card.cardStyle || {}),
                  }}
                  href={Boolean(card.href) && card.href + card.course._id}
                />
              )
          )}
      </div>
    </>
  );
};

export default CourseCardGrid;
