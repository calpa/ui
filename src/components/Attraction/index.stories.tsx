import React from "react";

import Attraction from ".";

export default {
  title: "Components/Attraction",
  component: Attraction,
};

const Template = (args) => <Attraction {...args} />;

export const Default = Template.bind({});

const mockData = {
  title: "東京的電子商圈和動漫天堂",
  location: "秋葉原",
  description:
    "秋葉原是位於東京的一個知名地區，以電腦和消費電子產品為主的電子商圈。在這裡，你可以找到許多各式各樣的電子產品，包括電腦、掌上型電腦、智慧型手機等。除了電子商圈之外，秋葉原還有許多漫畫店和動漫商店，是日本動漫迷和玩具收藏家的天堂。",
  image:
    "https://images.unsplash.com/photo-1613487957484-32c977a8bd62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
  articles: [
    {
      title: `秋葉原文章1`,
      url: `article-1`,
    },
    {
      title: `秋葉原文章2`,
      url: `article-2`,
    },
  ],
};

Default.args = mockData;

export const List = (props) => {
  return props.attractions.map((attraction, index) => {
    return (
      <Attraction
        title={attraction.title}
        location={attraction.location}
        description={attraction.description}
        image={attraction.image}
        articles={attraction.articles}
      />
    );
  });
};

List.args = {
  attractions: [
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
  ],
};
