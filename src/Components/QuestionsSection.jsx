import React from "react";

const QuestionsSection = ({ question, text, icon, className }) => {
  return (
    <div className={className}>
      <div className="flex justify-between">
        <h3>{question}</h3>
        <img src={icon} />
      </div>
      <hr />
      <p>{text}</p>
    </div>
  );
};

export default QuestionsSection;
