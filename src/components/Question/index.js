import React, {useState} from 'react';
import './style.scss';

export default function Question({question, finalQuestion}) {

  const [answered, setAnswered] = useState(false);
  const [finalQuestionDone, setFinalQuestionDone] = useState(false);

  return (
    <div className="question">
      <div className="question__inner" style={{opacity: `${finalQuestionDone ? 0 : 1}`}}>
        <div className="question__inner__img">
          <img src={question.img} alt="img"/>
        </div>
        <div className="question__inner__choice">
        <h2>{question.question}</h2>
        {question.answers.map((response, index) => (
          <div
            className={`question__inner__choice__answer ${answered ? 'answered' : ''} ${response.isCorrect ? 'correct' : 'false'}
            `}
            onClick={() => {if (finalQuestion) {setFinalQuestionDone(true); return;} setAnswered(true)} }
          >
            {response.copy}
          </div>
        ))}
        </div>
      </div>
      <div className="question__final" style={{opacity: `${finalQuestionDone ? 1 : 0}`}}>
          <div className="question__final__inner">
            <h3>
              Watch A Confession to see which choice Detective Superintendent Fulcher made. And how it changed his life forever.
            </h3>
            <h4>
              A Confession - Mondays at 9pm on ITV. Watch now on ITV Hub
            </h4>
          </div>
      </div>
    </div>
  );
}