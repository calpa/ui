export type Article = {
  url: string;
  title: string;
};

export type AttractionProps = {
  description: string;
  title: string;
  location: string;
  articles?: Article[];
  Image: any;
  Link?: React.ElementType;
};
