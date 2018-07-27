import React from 'react';

const Card = props => (
  <div style={{textAlign: props.textAlign}}>
    <p>{props.children}</p>
  </div>
);

export default Card;
