import React from 'react';
import { Contact } from '../model/Contact';
import Service from '../services/Service';

interface IProps {
    contacts: Contact[],
    getSelectedContact: (id: number) => void;
    //contact:IContact,
}

class AllContacts extends React.Component<IProps> {   

    toGetContact(e: any, id: number) {
        this.props.getSelectedContact(id);
    }

    render() {
        const allContactsList = this.props.contacts.map((contact: Contact) => {
            return <div className="contact" data-itemID={contact.id} onClick={(e) => { this.toGetContact(e, contact.id) }}>
                <h3 className="name" >{contact.name}</h3>
                <p className="email">{contact.email}</p>
                <p className="mobile">{contact.mobile}</p>
            </div>
        });
        return (
            <div className="col-lg-3" id="allContacts">
                {
                    allContactsList
                }
            </div>
        );
    }
}
export default AllContacts;