import React from 'react';
import './style.scss';

export default function PostBodyCopy({children}) {
  return (
    <div className="post-body">
      {children}
    </div>
  );
}