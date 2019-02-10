import React from 'react';
import ReactDOM from 'react-dom';

let user = {
    name: 'Stuart',
    luckyNumber: luckyNumber()
};

/**
 * @returns A random integer between 1 and 1000
 */
function luckyNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

/**
 * @param {{name: string, luckyNumber: number}} user - Current user
 */
function greeting(user) {
    const {name, luckyNumber} = user;
    return (
        <div className="container">
            <h1>Welcome {name}</h1>
            <h2 className="text-muted">Your lucky number is: {luckyNumber}</h2>
        </div>
    );
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
