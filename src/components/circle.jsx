import React from 'react';
import './recipe.css';


function Circle(props) {
  return (
    <div>
      <div className="circle"><p className="font-weight-bold">{props.value}</p></div>
      <p className="text-center">{props.text}</p>
    </div>
  );
}

export default Circle;