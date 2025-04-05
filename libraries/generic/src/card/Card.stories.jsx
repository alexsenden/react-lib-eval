import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default Card",
  content: "This is the default card content.",
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: "Card with Footer",
  content: "This card has a footer.",
  footer: "This is the footer content.",
};

export const LongContent = Template.bind({});
LongContent.args = {
  title: "Card with Long Content",
  content: "This is a card with a very long content. ".repeat(100),
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  content: "This card has no title.",
};
