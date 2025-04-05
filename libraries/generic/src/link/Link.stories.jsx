import React from "react";
import Link from "./Link";

export default {
  title: "Components/Link",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "https://example.com",
  text: "Default Link",
  target: "_self",
};

export const NewTab = Template.bind({});
NewTab.args = {
  href: "https://example.com",
  text: "Open in New Tab",
  target: "_blank",
};

export const Disabled = Template.bind({});
Disabled.args = {
  href: "https://example.com",
  text: "Disabled Link",
  target: "_self",
  disabled: true,
};
