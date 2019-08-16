import React from 'react';
import './style.scss';

const ReadMore = props => (
  <div className="read-more">
    <p className="read-more__copy">{props.content}</p>
  </div>
);

export default ReadMore;
