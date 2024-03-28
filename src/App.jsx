import React from "react";
//import Answers from "./components/Answers";
import Quiz from "./components/Quiz";
import QUESTIONS from "./questions";
import { useState, useEffect } from "react";
import Summary from "./components/Summary";

function App() {

  function shuffleArray(array) {
    if (!array || !Array.isArray(array)) {
      return [];
    }
  
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  
      // Shuffle answers within the question object
      if (shuffledArray[i].answers) {
        shuffledArray[i].answers = shuffleArray(shuffledArray[i].answers);
      }
    }
    return shuffledArray;
  }
  
  const shuffledQuestions = shuffleArray(QUESTIONS);

  const [shuffQIndex, setShuffQIndex] = useState(shuffledQuestions.length);
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (shuffQIndex === 2) {
      setShowResults(true);
    }
  }, [shuffQIndex]);

  return (
    
      <div id={showResults ? "summary" :"quiz"}>
        {showResults ? <Summary/> :<Quiz shuffledQuestions={shuffledQuestions} shuffQIndex={shuffQIndex} setShuffQIndex={setShuffQIndex}/>}
        
      </div>
   
  );
}

export default App;
