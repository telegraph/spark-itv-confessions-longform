import React from 'react';
import './style.scss';

import downArrow from '../../assets/d-arrow.svg';

const ReadMore = props => (
  <div className="read-more">
    <p className="read-more__copy">
      {props.content}
      <img className="read-more__arrow" src={downArrow} alt="V" />
    </p>
  </div>
);

export default ReadMore;
