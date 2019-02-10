import React from 'react';
import Table from './table';

const students = [
    {"name":"Kippie","course":"English","grade":95},
    {"name":"Brant","course":"Calculus","grade":73},
    {"name":"Blanche","course":"English","grade":82},
    {"name":"Elias","course":"English","grade":75},
    {"name":"Keri","course":"Calculus","grade":90},
    {"name":"Yul","course":"Calculus","grade":87},
    {"name":"Kenton","course":"English","grade":79},
    {"name":"Oswald","course":"English","grade":72},
    {"name":"Nalani","course":"Psychology","grade":80},
    {"name":"Suzanna","course":"Psychology","grade":88},
    {"name":"Mercy","course":"Psychology","grade":81}
];

const App = ( props ) => {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students} />
        </div>
    );
}

export default App;