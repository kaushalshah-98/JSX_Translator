import React from "react";
import "./textarea.css";

const TextArea = ({ input, translate }) => (
  <textarea onChange={translate} defaultValue={input} />
);

export default TextArea;
