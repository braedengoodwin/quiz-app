import React from "react";
import quizCompleteImage from "../assets/quiz-complete.png";

export default function Summary() {
  return (
    <ol>
      <div>
        <img src={quizCompleteImage} alt="Quiz completed" />
        <h2>QUIZ COMPLETED</h2>
        <div id="summary-stats">
          <div>
            <span className="number">0</span>
            <p>Skipped</p>
          </div>
          <div>
            <span className="number">2</span>
            <p>Correct</p>
          </div>
          <div>
            <span className="number">5</span>
            <p>Incorrect</p>
          </div>
        </div>
        <li >
          <div className="text">
            <h3>1</h3>
            <span className="question">test here</span>
            <div className=".user-answer">question here </div>
          </div>

          <div className="text">
            <h3>2</h3>
            <span className="question">test here</span>
            <div className=".user-answer">question here </div>
          </div>
          <div>
            <h3>3</h3>
            <span className="question">test here</span>
            <div className=".user-answer">question here </div>
          </div>
          </li>
      </div>
    </ol>
  );
}
