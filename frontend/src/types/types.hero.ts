import { CourseProps } from "./types.course";
import { ImgProps } from "./types.img";
import { HeadingProps } from "./types.text";

export interface HeroImgContainerProps extends ImgProps {
  img: string;
  alt: string;
  width: number;
  height: number;
  needGradient?: boolean;
  style?: React.CSSProperties;
  heading?: string;
}

export type HeroProps = Omit<HeadingProps, "text"> & { text?: string } & {
  heading?: string | React.ReactNode;
  headingClass?: string;
  headingStyle?: React.CSSProperties;
  desc?: string;
  descClass?: string;
  descStyle?: React.CSSProperties;
  buttons?: React.ReactNode;
  containerStyle?: React.CSSProperties;
};

export type HeroCourseProps = {
  courseData: CourseProps;
};
