import React, { useState } from "react";
import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);
  const handleChange = (e) => setValue(e.target.value);

  return <Select {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  value: "option1",
};
