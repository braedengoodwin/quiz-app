import React, { useEffect, useState, createContext } from "react";
import "../index.css";
import QUESTIONS from "../questions";
import ProgressBar from "./ProgressBar";
import Answers from "./Answers";

const TIMER = 4000;
export const AnswerContext = createContext(undefined);

export default function Quiz({
  shuffledQuestions,
  shuffQIndex,
  setShuffQIndex,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionSelected, setQuestionSelected] = useState(null);

  const [remainingTime, setRemaingingTime] = useState(TIMER);

  useEffect(() => {
    if (remainingTime < 0) {
      if (currentQuestionIndex === shuffledQuestions.length - 1) {
        //console.log("all done");
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

        //this is what's decreasing the shuffledQuestions.length index
        setShuffQIndex((prevIndex) => prevIndex - 1);
        console.log(shuffQIndex);

        setRemaingingTime(TIMER);
        shuffledQuestions.length - 1;
      }
    }
  }, [remainingTime, currentQuestionIndex]);

  useEffect(() => {
    if (shuffledQuestions.length === 0) {
      console.log("shuffledQuestions has 0 elements");
    } else {
      console.log(`shuffledQuestions has ${shuffledQuestions.length} elements`);
    }
  }, [shuffledQuestions]);

  function handleQuestionSelect(answer) {
    setQuestionSelected(answer);
  }

  return (
    <AnswerContext.Provider value={{ questionSelected, handleQuestionSelect }}>
      <div id="question">
        <ProgressBar
          timer={TIMER}
          remainingTime={remainingTime}
          setRemaingingTime={setRemaingingTime}
        />
        <div key={shuffledQuestions[currentQuestionIndex].id}>
          <h2>{shuffledQuestions[currentQuestionIndex].text}</h2>
          <Answers
            currentQuestionIndex={currentQuestionIndex}
            questionSelected={questionSelected}
            handleQuestionSelect={handleQuestionSelect}
          />
        </div>
      </div>
    </AnswerContext.Provider>
  );
}
