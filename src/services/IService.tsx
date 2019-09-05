import { Contact } from '../model/Contact';
export default interface IService {
    getAllContacts(): Contact[];
    addContact(newContact: Contact): void;
    findSelectedContact(contactId: number): Contact;
    deleteContact(id: number): Contact[];
}