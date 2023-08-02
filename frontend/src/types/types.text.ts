export type HeadingProps = {
  text: string;
  headingClass?: string;
  headingStyle?: React.CSSProperties;
  highlightText?: string;
  highlightTextStyle?: React.CSSProperties;
  highlightTextClass?: string;
  afterHighlightText?: string;
  type?: HeadingType;
  capitalise?: boolean;
  uppercase?: boolean;
};

export type LinkItem = {
  name: string;
  href: string;
  class: string;
};

export enum HeadingType {
  h1,
  h2,
  h3,
  h4,
  h5,
}

export type DetailTabProps = {
  title: string;
  value: string;
};

export type DetailTabGroupProps = {
  data: DetailTabProps[];
};
