import { CourseProps } from "./types.course";
import { ImgProps } from "./types.img";

export type CardProps = {
  img: ImgProps;
  course: CourseProps;
  cardClass?: string;
  cardStyle?: React.CSSProperties;
  cardImageClass?: string;
  cardImageStyle?: React.CSSProperties;
  cardTitleClass?: string;
  cardTitleStyle?: React.CSSProperties;
};
