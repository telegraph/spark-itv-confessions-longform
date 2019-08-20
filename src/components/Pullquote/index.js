import React from 'react';
import makeVisible from '../../hooks/makeVisible';
import './style.scss';

export default function Pullquote({ quote, specialQuote, children, author, customName }) {
  const [bodyContent, isVisible] = makeVisible();

  return (
    <div className={`pullquote ${isVisible ? 'visible' : ''}`} ref={bodyContent}>
      <div className="pullquote__inner">
        <div className={`pullquote__inner__quote ${customName}`}>
          <h4>
            {quote}
          </h4>
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
}
