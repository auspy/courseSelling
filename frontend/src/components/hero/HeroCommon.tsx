import { HeroProps } from "@/types/types.hero";
import HeroCoursesBg from "../coursesPage/hero/HeroCourseBg";
import Heading from "../text/Heading";

const HeroCommon = ({ text, highlightText }: HeroProps) => {
  return (
    <>
      <HeroCoursesBg
        height={302}
        heroHeight={222}
        children={<Heading text={String(text)} highlightText={highlightText} />}
      />
    </>
  );
};

export default HeroCommon;
