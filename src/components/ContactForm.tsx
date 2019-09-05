import React from 'react';
import { Contact } from '../model/Contact';
import Service from '../services/Service';

interface IProps {
    toAddOrUpdate: (contact: Contact, update: boolean) => void;
    editContact: Contact;

}

interface IState {
    person: Contact;
    allContacts: Contact[],
    update: boolean,
}

let service = new Service();
export default class ContactForm extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            person: this.props.editContact,
            allContacts: service.getAllContacts(),
            update: false,
        };
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(event: any) {
        if (this.state.person.id !== 0) {
            this.props.toAddOrUpdate(this.state.person, true);
        }
        else {
            let min = 6;
            let max = 100;
            let randomID = Math.floor(Math.random() * (+max - +min) + +min);

            let contactObj = { ...this.state.person };
            contactObj.id = randomID;
            service.addContact(contactObj);
            this.props.toAddOrUpdate(contactObj, this.state.update);
        }

    }

    close() {
        //this.setState({ showResults: false });
    }


    render() {
        return (
            <div className="row">
                <form id="contactForm" className="col-lg-12">
                    <div className="col-lg-10">
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" id="txtName" placeholder="Enter name"
                                name="name" value={this.state.person.name} onChange={(event) => { this.setState({ person: { ...this.state.person, name: event.target.value } }) }} />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control" id="txtEmail" placeholder="Enter email"
                                name="email" value={this.state.person.email}
                                onChange={(event) => { this.setState({ person: { ...this.state.person, email: event.target.value } }) }} />
                            <label id="emailError" className="lbl-error"></label>
                        </div>
                        <div className="form-group">
                            <div className="form-group col-md-6 p-0 pr-4 float-left">
                                <label>Mobile:</label>
                                <input type="text" className="form-control" id="txtMobile"
                                    placeholder="Enter mobile number" name="mobile" value={this.state.person.mobile}
                                    onChange={(event) => { this.setState({ person: { ...this.state.person, mobile: event.target.value } }) }} />
                                <label id="mobileError" className="lbl-error"></label>
                            </div>
                            <div className="form-group col-md-6 p-0 float-left">
                                <label>LandLine:</label>
                                <input type="text" className="form-control" id="txtLand"
                                    placeholder="Enter landline number" name="land" value={this.state.person.landLine}
                                    onChange={(event) => { this.setState({ person: { ...this.state.person, landLine: event.target.value } }) }} />
                            </div>
                        </div>
                        <div className="form-group site-field">
                            <label>Website:</label>
                            <input type="text" className="form-control" id="txtSite" placeholder="Enter website"
                                name="site" value={this.state.person.webSite}
                                onChange={(event) => { this.setState({ person: { ...this.state.person, webSite: event.target.value } }) }} />
                            <label id="siteError" className="lbl-error"></label>
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                            <textarea className="form-control" id="txtAddress" placeholder="Enter Address"
                                name="address" value={this.state.person.address}
                                onChange={(event) => { this.setState({ person: { ...this.state.person, address: event.target.value } }) }}></textarea>
                        </div>

                    </div>
                    <div className="form-group float-right">
                        <input type="button" className="btn-add" value="Add" id="btnAdd" onClick={this.formSubmit} />
                    </div>
                    <input type="button" className="close" value="X" onClick={this.close} />
                </form>
            </div>

        );
    }
}