import React from 'react';
import { Contact } from '../types';

interface ContactModalProps {
  contact: Contact;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({contact, onClose, onEdit, onDelete}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{contact.name}</h2>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        {contact.photo && <img src={contact.photo}
                               alt={`${contact.name}'s photo`}
                               width={200} height={200}/>}
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ContactModal;