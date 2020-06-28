import React from "react";

export const Question = ({question, answer}) => (
  <div className="question">
    <h4>
      {question}
    </h4>
    <p>
      {answer}
    </p>
  </div>
);
