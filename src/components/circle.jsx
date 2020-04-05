import React from 'react';

function Circle(props) {
    return (
        <div>
            <div className="circle">
                <p>{props.value}</p>
            </div>
            <p>{props.text}</p>
        </div>
    );
}

export default Circle;