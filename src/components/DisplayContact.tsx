import React from 'react';
import { Contact } from '../model/Contact';
import Service from '../services/Service';

interface IProps {
   selectedContact: Contact;
   toEdit: (id: number) => void;
   toDelete: (id: number) => void;
}

let service = new Service();
class DisplayContact extends React.Component<IProps> {

   edit(e: any, id: number) {
      this.props.toEdit(id);
   }

   delete(e: any, id: number) {
      this.props.toDelete(id);
   }

   render() {
      return (
         <div className="contact-details">
            <div className="col-lg-8 float-left">
               <h3 className="contact-name pb-2">{this.props.selectedContact.name}</h3>
               <p>Email:<span className="contact-data">{this.props.selectedContact.email}</span></p>
               <div className="py-3">
                  <p>Mobile:<span className="contact-data">{this.props.selectedContact.mobile}</span></p>
                  <p>LandLine:<span className="contact-data">{this.props.selectedContact.landLine}</span></p>
               </div>
               <p>Website:<span className="contact-data">{this.props.selectedContact.webSite}</span></p>
               <p>Address:<span className="contact-data">{this.props.selectedContact.address}</span></p>
            </div>
            <div className="col-lg-4 float-left">
               <div id="btnEdit" className="float-left">
                  <span><i className="fa fa-pencil" aria-hidden="true"></i></span><input type="button"
                     value="Edit" data-itemID={this.props.selectedContact.id} onClick={(e) => { this.edit(e, this.props.selectedContact.id) }} />
               </div>
               <div id="btnDelete" className="float-left">
                  <span><i className="fa fa-trash" aria-hidden="true"></i></span><input type="button"
                     value="Delete" data-itemID={this.props.selectedContact.id} onClick={(e) => { this.delete(e, this.props.selectedContact.id) }} />
               </div>
            </div>
         </div>
      );
   }
}
export default DisplayContact;