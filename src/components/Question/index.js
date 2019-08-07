import React, {useState} from 'react';
import './style.scss';

export default function Question({question}) {

  const [answered, setAnswered] = useState(false);

  return (
    <div className="question">
      <div className="question__inner">
        <div className="question__inner__img">
          <img src="https://via.placeholder.com/570x440" alt="img"/>
        </div>
        <div className="question__inner__choice">
        <h2>{question.question}</h2>
        {question.answers.map(response => (
          <div
            className={`question__inner__choice__answer ${answered ? 'answered' : ''} ${response.isCorrect ? 'correct' : 'false'}
            `}
            onClick={() => setAnswered(true) }
          
          >{response.copy}</div>
        ))}
        </div>
      </div>
    </div>
  );
}