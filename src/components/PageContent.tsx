import React from 'react';
import AllContacts from './AllContacts';
import { Contact } from '../model/Contact';
import ContactForm from './ContactForm';
import Service from '../services/Service';
import DisplayContact from './DisplayContact';

interface IProps {
    //    contacts:IContact[],
}

interface IState {
    contactsList: Contact[],
    isShow: boolean,
    selectedContact: Contact,
    editContact: Contact,
}
let service = new Service();
class PageContent extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);

        let list = service.getAllContacts().slice(0);
        this.state = {
            contactsList: list,
            selectedContact: new Contact(0, '', '', '', '', '', ''),
            editContact: new Contact(0, '', '', '', '', '', ''),
            isShow: true,
        }
    }

    addOrUpdate(contact: Contact, update: boolean) {
        if (update) {
            this.state.contactsList.map((scontact: Contact) => {
                if (scontact.id === contact.id) {
                    scontact.name = contact.name;
                    scontact.email = contact.email;
                    scontact.mobile = contact.mobile;
                    scontact.landLine = contact.landLine;
                    scontact.webSite = contact.webSite;
                    scontact.address = contact.address;
                }
            });

            this.setState({ isShow: false });
            alert("Contact Updated.");
        }
        else {
            let contactList = this.state.contactsList;
            contactList.push(contact);
            this.setState({ contactsList: contactList, isShow: true });
            alert("Contact Added.");
        }

    }

    getSelectedContact(id: number) {
        let data = service.findSelectedContact(id);
        this.setState({ selectedContact: data, isShow: false });
    }

    editing(id: number) {
        let contact = service.findSelectedContact(id);
        this.setState({ editContact: contact, isShow: true });
    }

    deleting(id: number) {
        let latestContacts = service.deleteContact(id);
        this.setState({ contactsList: latestContacts, selectedContact: this.state.contactsList[0] });
        alert("Contact Deleted.");
    }

    showForm() {
        alert("true");
        //this.setState({ isShow: true });
    }

    render() {

        return (
            <div className="page-content container-fluid">
                <div className="row">
                    <h3 className="title">Contacts</h3>
                </div>
                <div className="row">
                    <AllContacts contacts={this.state.contactsList} getSelectedContact={(id: number) => this.getSelectedContact(id)}></AllContacts>
                    <div className="offset-lg-1 col-lg-5">
                        {this.state.isShow
                            ? <ContactForm
                                toAddOrUpdate={(contact: Contact, update: boolean) => this.addOrUpdate(contact, update)}
                                editContact={this.state.editContact}>
                            </ContactForm>
                            : <DisplayContact
                                selectedContact={this.state.selectedContact}
                                toDelete={(id: number) => this.deleting(id)}
                                toEdit={(id: number) => this.editing(id)} >
                            </DisplayContact>}
                    </div>
                </div>
            </div>
        );
    }
}
export default PageContent;