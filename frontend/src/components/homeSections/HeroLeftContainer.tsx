import { HeroLeftContainerProps } from "@/types/types.hero";

const HeroLeftContainer = ({
  heading,
  desc,
  headingClass,
  headingStyle,
  descClass,
  descStyle,
  buttons,
  containerStyle,
}: HeroLeftContainerProps) => {
  return (
    <div style={containerStyle}>
      {typeof heading == "string" ? (
        <h1 style={headingStyle} className={headingClass}>
          {heading}
        </h1>
      ) : (
        heading
      )}
      <div style={descStyle} className={descClass}>
        {desc}
      </div>
      {buttons}
    </div>
  );
};

export default HeroLeftContainer;
