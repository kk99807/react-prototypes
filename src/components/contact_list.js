import React, {Component} from 'react';
import ContactCard from './contact_card';
import contactData from '../data/contacts';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: contactData
        };
    }

    render() {
        const {contacts} = this.state;

        const list = contacts.map((contact, i) => <ContactCard key={i} {...contact}/>);

        return (
            <div className="col-8">
                <div className="row">
                    {list}
                </div>
            </div>
        );
    }
}

export default ContactList;