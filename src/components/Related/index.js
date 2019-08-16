import React from 'react';

import './style.scss';

const Related = () => (
  <div className="related-wrap">
    <h3>Related content</h3>
    <div className="related">
      <div className="block">
        <a href="https://www.telegraph.co.uk/tv/a-confession/why-do-we-love-true-crime/" target="_blank" rel="noopener noreferrer">
          <div className="thumbnail t1" />
        </a>
        <a href="https://www.telegraph.co.uk/tv/a-confession/why-do-we-love-true-crime/" target="_blank" rel="noopener noreferrer">
          <span className="description">Why are we obsessed with true crime?</span>
        </a>
      </div>
      <div className="block">
        <a href="https://www.telegraph.co.uk/tv/a-confession/martin-freeman-new-role/" target="_blank" rel="noopener noreferrer">
          <div className="thumbnail t2" />
        </a>
        <a href="https://www.telegraph.co.uk/tv/a-confession/martin-freeman-new-role/" target="_blank" rel="noopener noreferrer">
          <span className="description">Is this Martin Freeman’s most challenging role yet?</span>
        </a>
      </div>
      <div className="block">
        <a href="https://www.telegraph.co.uk/tv/a-confession/five-best-true-crime-podcasts/" target="_blank" rel="noopener noreferrer">
          <div className="thumbnail t3" />
        </a>
        <a href="https://www.telegraph.co.uk/tv/a-confession/five-best-true-crime-podcasts/" target="_blank" rel="noopener noreferrer">
          <span className="description"> Five of the best true crime podcasts to download right now</span>
        </a>
      </div>
    </div>
  </div>
);
export default Related;
