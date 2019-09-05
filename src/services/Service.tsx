import IService from '../services/IService';
import { ContactsList } from '../components/ContactsList';
import { Contact } from '../model/Contact';

let contact: Contact;
export default class Service implements IService {
    getAllContacts() {
        return ContactsList;
    }
    addContact(newContact: Contact) {
        ContactsList.push(newContact);
    }

    findSelectedContact(contactId: number) {
        ContactsList.map((e) => {
            if (e.id === contactId) {
                contact = e;
            }

        });
        return contact;
    }
    deleteContact(id: number) {
        var index = ContactsList.findIndex((s) => s.id == id);
        if (index > -1) {
            ContactsList.splice(index, 1);
        }       
        return ContactsList;
    }
}
