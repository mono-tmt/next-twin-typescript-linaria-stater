import React from "react";

interface Props {
  text: string;
}
const Paragraph: React.FC<Props> = ({ text }) => {
  return <p className="text-gray-600">{text}</p>;
};
export default Paragraph;
