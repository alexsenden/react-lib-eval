import React, { useState } from "react";
import RadioButton from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const handleChange = () => setChecked(!checked);

  return <RadioButton {...args} checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Default RadioButton",
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked RadioButton",
  checked: true,
};

export const Group = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <div>
      <RadioButton
        label="Option 1"
        checked={selectedValue === "option1"}
        onChange={() => setSelectedValue("option1")}
      />
      <RadioButton
        label="Option 2"
        checked={selectedValue === "option2"}
        onChange={() => setSelectedValue("option2")}
      />
      <RadioButton
        label="Option 3"
        checked={selectedValue === "option3"}
        onChange={() => setSelectedValue("option3")}
      />
    </div>
  );
};
