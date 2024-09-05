import { useState } from "react";
import "../index.css";
import questions from "./Pertanyaan";

export default function Quiz() {
  const [showResult, setShowResult] = useState(false);
  const  [score,setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
 
   const optionClicked = (isCorrect) => {
     if(isCorrect) {
      setScore(score + 1);
     }
     if(currentQuestion + 1 < questions.length){
      setCurrentQuestion(currentQuestion + 1)
     }else{
      setShowResult(true);
     }
   }

   const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
   }
   
  return (
    <>
      <div className="app">
        <h1 className="h1quiz">faiz quiz</h1>
        <h2>score : {score}</h2>

        {/* show result */}
        {/* final  result */}
        {showResult ? (
          <div className="final-result">
            <h1>Final Result</h1>
            <h2>{score} out of {questions.length} correct - ({(score/questions.length) * 100}%) </h2>
            <button onClick={() => restartGame()}>Restart Game</button>
          </div>
        ) : (
          <div className="question card">
            <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
            <h3>{questions[currentQuestion].text}</h3>

            {/* list */}

            <ul>
             {questions[currentQuestion].options.map((option)=> (
              <li key={option.id} onClick={()=> optionClicked(option.isCorrect)}>{option.text}</li>
             ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
