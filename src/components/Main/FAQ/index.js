import React from "react";

import { Question } from "./Question";
import {aboutQuestions, hackingQuestions} from "../../../data";

export const FAQ = () => (
    <div className="container faq">
      <div className="row">
        <div className="col-12">
          <h2>
            Frequently Asked Questions
          </h2>
        </div>
        <div className="col-12 col-md-6">
          <h3>
            About
          </h3>

          {aboutQuestions.map((question) => (
              <Question key={question.question} question={question.question} answer={question.answer}/>
          ))}
        </div>
        <div className="col-12 col-md-6">
          <h3>
            Hacking
          </h3>
          {hackingQuestions.map((question) => (
              <Question key={question.question} question={question.question} answer={question.answer}/>
          ))}
        </div>
      </div>
    </div>
);
