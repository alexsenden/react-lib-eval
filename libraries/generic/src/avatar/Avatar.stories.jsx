import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  src: "https://picsum.photos/150",
  alt: "Small Avatar",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  src: "https://picsum.photos/150",
  alt: "Medium Avatar",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  src: "https://picsum.photos/150",
  alt: "Large Avatar",
  size: "large",
};

export const CustomAltText = Template.bind({});
CustomAltText.args = {
  src: "https://picsum.photos/150",
  alt: "Custom Alt Text",
  size: "medium",
};
