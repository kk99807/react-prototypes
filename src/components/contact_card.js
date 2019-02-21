import React from 'react';

export default props => {
    const {firstName, lastName, phone, email} = props;

    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-header">{firstName} {lastName}</div>
                <div className="card-block">
                    <h4 className="card-title"></h4>
                    <div className="card-text">
                        <p>Phone: {phone}</p>
                        <p>Email: {email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}