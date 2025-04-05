import React from "react";
import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    type: {
      control: { type: "select", options: ["title", "subtitle", "body", "caption"] },
    },
    content: { control: "text" },
  },
};

const Template = (args) => <Text {...args} />;

export const Title = Template.bind({});
Title.args = {
  type: "title",
  content: "This is a Title",
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  type: "subtitle",
  content: "This is a Subtitle",
};

export const Body = Template.bind({});
Body.args = {
  type: "body",
  content: "This is body text.",
};

export const Caption = Template.bind({});
Caption.args = {
  type: "caption",
  content: "This is a caption.",
};
