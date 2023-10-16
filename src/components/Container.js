import React from 'react';

function Container(props) {
  return (
    <div className="container max-w-screen-xl mx-auto px-5">
      {props.children}
    </div>
  );
}

export default Container;
