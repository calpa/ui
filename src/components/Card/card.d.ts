export type CustomCardProps = {
  onClick: () => void;
  title: string;
  description: string;
  date?: string;
  moreText?: string;
  tags: string[];
  Link: any;
  showDateComponent?: boolean;
  showTagsComponent?: boolean;
};
