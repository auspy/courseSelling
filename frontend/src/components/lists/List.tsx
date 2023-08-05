"use client";
import { ListProps } from "@/types/types.list";
import ButtonThird from "../buttons/ButtonThird";
import { useState } from "react";

const List = ({
  data,
  maxColumns,
  maxRows,
  listItemClass,
  listItemStyle,
  textClass,
  textStyle,
  listClass,
  listStyle,
}: ListProps) => {
  const [showMore, setShowMore] = useState(1);
  const showViewMore =
    maxColumns && maxRows && data.length > maxColumns * maxRows;
  const itemsShown = maxColumns * maxRows * showMore;
  const maxItemsShown = itemsShown >= data.length;
  return (
    <div className="fcc">
      <div
        style={{
          display: "grid",
          grid: `auto / repeat(${maxColumns},1fr)`,
          rowGap: 10,
          columnGap: 20,
          ...listStyle,
        }}
        className={`${listClass}`}
      >
        {data.map(
          (item, index) =>
            index < itemsShown && (
              <div
                key={index + item.text}
                className={`frc ${listItemClass}`}
                style={{ gap: 20, ...listItemStyle }}
              >
                {item.icon}
                <p
                  className={`regu14 os ${textClass} ${item.textClass} `}
                  style={{
                    ...textStyle, // This is the default text style
                    ...item.textStyle, // this can be used for custom styling
                  }}
                >
                  {item.text[0].toUpperCase() + item.text.slice(1)}
                </p>
              </div>
            )
        )}
      </div>
      {showViewMore && (
        <ButtonThird
          buttonClass="mt20"
          value={maxItemsShown ? "less" : "more"}
          buttonTextClass="bold12"
          buttonTextStyle={{ padding: "7px 16px" }}
          onClick={() => {
            if (maxItemsShown) {
              setShowMore(1);
            } else {
              setShowMore(showMore + 1);
            }
          }}
        />
      )}
    </div>
  );
};

export default List;
