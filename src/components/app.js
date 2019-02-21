import React from 'react';
import ContactList from './contact_list';
import './app.scss';

export default props => {
    return (
        <div className="container">
            <h1 className="text-center">Address Book</h1>
            <div className="row">
                <ContactList/>
            </div>    
        </div>
    );
}