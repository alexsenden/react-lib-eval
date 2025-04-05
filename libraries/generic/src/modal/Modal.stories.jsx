import React, { useState } from "react";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  title: "Default Modal",
  content: "This is the default modal content.",
};

export const AutomaticallyOpen = Template.bind({});
AutomaticallyOpen.args = {
  isOpen: true,
  title: "Automatically Open Modal",
  content: "This is a model that is automatically open when the page loads.",
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
  isOpen: false,
  title: "Modal with Long Content",
  content: "This is a modal with a very long content. ".repeat(30),
};
