export type HeadingProps = {
  text: string;
  headingStyle?: React.CSSProperties;
  highlightText?: string;
  highlightTextStyle?: React.CSSProperties;
  highlightTextClass?: string;
  afterHighlightText?: string;
  type?: HeadingType;
  capitalise?: boolean;
  uppercase?: boolean;
};

export enum HeadingType {
  h1,
  h2,
  h3,
  h4,
  h5,
}
