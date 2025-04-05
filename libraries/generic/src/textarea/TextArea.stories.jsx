import React, { useState } from "react";
import TextArea from "./TextArea";

export default {
  title: "Components/TextArea",
  component: TextArea,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);
  const handleChange = (e) => setValue(e.target.value);

  return <TextArea {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: "",
  placeholder: "Enter text...",
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  value: "Initial text",
  placeholder: "Enter text...",
};
