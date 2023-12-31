"use client";
import { convertCamelCaseToSentence } from "@/helper/common";
import { TabButtonProps } from "@/types/types.button";

const TabButton = ({
  value = "Button",
  buttonClass,
  buttonStyle,
  buttonTextStyle,
  buttonTextClass,
  active,
  type,
  setActive,
}: TabButtonProps) => {
  const isActive = active === value;
  return (
    <>
      <button
        className={`${buttonClass}`}
        style={{
          height: 70,
          backgroundColor: "transparent",
          borderBottom: `${isActive ? 2 : 1}px solid ${
            isActive ? "var(--primary)" : "#707070"
          }`,
          color: isActive ? "var(--primary)" : "#c2c2c2",
          padding: "0px 20px",
          width: "100%",
          ...buttonStyle,
        }}
        onClick={() => {
          setActive(value);
        }}
      >
        <div
          className={`bold16 caps ${buttonTextClass}`}
          style={{
            fontWeight: isActive ? 700 : 500,
            ...buttonTextStyle,
          }}
        >
          {convertCamelCaseToSentence(value)}
        </div>
      </button>
    </>
  );
};

export default TabButton;
