import React, {useState} from 'react';
import './style.scss';

export default function Question({question, finalQuestion}) {
  const [answered, setAnswered] = useState(false);
  const [finalQuestionDone, setFinalQuestionDone] = useState(false);

  return (
    <div className="question">
      <div className="question__inner" style={{opacity: `${finalQuestionDone ? 0 : 1}`}}>
        <div className="question__inner__img">
          <img loading="lazy" src={question.img} alt="img"/>
        </div>
        <div className="question__inner__choice">
        <h2>{question.question}</h2>
        {question.answers.map((response, index) => (
          <div
            className={`question__inner__choice__answer ${answered ? 'answered' : ''} ${response.isCorrect ? 'correct' : 'false'}
            `}
            onClick={() => {
              if (finalQuestion) {
                setFinalQuestionDone(true);

                // scroll the user in view of the answer
                setTimeout(() => {
                  const answers = document.querySelectorAll('.question__final')
                  answers[answers.length - 1].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }, 800);

                return;
              }
              setAnswered(true)}
            }
          >
            {response.copy}
          </div>
        ))}
        </div>
      </div>
      <div className="question__final" style={{opacity: `${finalQuestionDone ? 1 : 0}`, visibility: `${finalQuestionDone ? 'visible' : 'hidden'}` }}>
          <div className="question__final__inner">
            <h3>
              Watch <i>A Confession</i> to see which choice Detective Superintendent Fulcher made. And how it changed his life forever.
            </h3>
            <h4>
              <i>A Confession</i> - Mondays at 9pm on ITV. Watch now on <a className="underline" href="https://www.itv.com/hub/a-confession/2a5507a0001" target="blank" rel="noreferrer noopener">ITV Hub</a>
            </h4>
          </div>
      </div>
    </div>
  );
}
