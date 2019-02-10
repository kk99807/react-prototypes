import React from 'react';

export default ( props ) => {
    const {data} = props;

    let tableRows = data.map((student, i) => (
        <tr key={i}>
            <td>{student.name}</td>
            <td>{student.course}</td>
            <td>{student.grade}</td>
        </tr>
    ));

    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
};