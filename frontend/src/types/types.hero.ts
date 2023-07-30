import { ImgProps } from "./types.img";

export interface HeroImgContainerProps extends ImgProps {
  img: string;
  alt: string;
  width: number;
  height: number;
  needGradient?: boolean;
  style?: React.CSSProperties;
  heading?: string;
}

export type HeroLeftContainerProps = {
  heading: string | React.ReactNode;
  headingClass?: string;
  headingStyle?: React.CSSProperties;
  desc: string;
  descClass?: string;
  descStyle?: React.CSSProperties;
  buttons?: React.ReactNode;
  containerStyle?: React.CSSProperties;
};
