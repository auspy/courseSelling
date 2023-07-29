import { HeadingProps, HeadingType } from "@/types/types.text";

const Heading = ({
  text,
  highlightText,
  afterHighlightText,
  type,
  capitalise = false,
  uppercase = false,
  highlightTextStyle,
  highlightTextClass,
  highlightTextContaineClass,
}: HeadingProps) => {
  const headingStyles: React.CSSProperties = {};
  if (capitalise) {
    headingStyles["textTransform"] = "capitalize";
  }
  if (uppercase) {
    headingStyles["textTransform"] = "uppercase";
  }
  const data = (
    <>
      {text}
      {highlightText && (
        <div className={`frc ${highlightTextContaineClass}`}>
          <div
            className={`h${type + 1}Highlight mr15 ${highlightTextClass}`}
            style={highlightTextStyle}
          >
            {" "}
            {highlightText}{" "}
          </div>
          {afterHighlightText}
        </div>
      )}
    </>
  );
  const HeadingElement = () => {
    switch (type) {
      case HeadingType.h1:
        return <h1 style={headingStyles}>{data}</h1>;
      case HeadingType.h2:
        return <h2 style={headingStyles}>{data}</h2>;
      case HeadingType.h3:
        return <h3 style={headingStyles}>{data}</h3>;
      case HeadingType.h4:
        return <h4 style={headingStyles}>{data}</h4>;
      case HeadingType.h5:
        return <h5 style={headingStyles}>{data}</h5>;
      default:
        return null;
    }
  };
  return HeadingElement();
};

export default Heading;
