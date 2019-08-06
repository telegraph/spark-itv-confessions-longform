import React from 'react';
import './style.scss';

export default function Question({question, responses}) {
  return (
    <div className="question">
      <div className="question__inner">
        <img src="" alt="img"/>
        <div className="questions__inner__choice">
        <h2>{question}</h2>
        {responses.map(response => (
          <div>{response.copy}</div>
        ))}
        </div>
      </div>
    </div>
  );
}