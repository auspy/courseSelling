export type ListDataProps = {
  text: string;
  textClass?: string;
  textStyle?: React.CSSProperties;
  icon: React.ReactNode;
  iconClass?: string;
  iconStyle?: React.CSSProperties;
};

export type ListProps = {
  maxColumns: number;
  maxRows: number;
  data: Omit<ListDataProps, "iconClass" | "iconStyle">[];
  textClass?: string;
  textStyle?: React.CSSProperties;
  listItemClass?: string;
  listItemStyle?: React.CSSProperties;
  listStyle?: React.CSSProperties;
  listClass?: string;
};
