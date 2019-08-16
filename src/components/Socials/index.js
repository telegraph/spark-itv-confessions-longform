import React from 'react';

import fbImg from '../../assets/socials/facebook.svg';
import twitterImg from '../../assets/socials/twitter.svg';
import mailImg from '../../assets/socials/mail.svg';

import fbImgWhite from '../../assets/socials/facebook-white.svg';
import twitterImgWhite from '../../assets/socials/twitter-white.svg';
import mailImgWhite from '../../assets/socials/mail-white.svg';

import './style.scss';

function Socials({ nobackground, white }) {
  return (
    <div className={`socials ${nobackground ? 'socials--nobackground' : ''}`}>
      <div className="socials__inner">
        <a className="addthis_button_facebook" href="#">
          <img src={!white ? fbImg : fbImgWhite} />
        </a>
        <a className="addthis_button_twitter" href="#">
          <img src={!white ? twitterImg : twitterImgWhite} />
        </a>
        <a className="addthis_button_mailto" href="#">
          <img src={!white ? mailImg : mailImgWhite} />
        </a>
      </div>
    </div>
  );
}

export default Socials;
