import React, { createContext, useContext } from "react";
import QUESTIONS from "../questions";
import { useEffect, useState } from "react";


export default function Answers({currentQuestionIndex, questionSelected, handleQuestionSelect}) {


  return (
    <ul id="answers">
    {QUESTIONS[currentQuestionIndex].answers.map((answer, index) => {
      const isSelected = questionSelected === answer;
      const isCorrect = index === 0 && isSelected;

      return (
        <li key={index} className="answer">
          <button
            onClick={() => handleQuestionSelect(answer)}
            className={isCorrect ? "correct" : isSelected ? "selected" : ""}
          >
            {answer}
          </button>
        </li>
      );
    })}
  </ul>
);
}