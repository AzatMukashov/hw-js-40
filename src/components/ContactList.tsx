import React from "react";
import { Contact } from "../types";

interface ContactListProps {
  contacts: Contact[];
  openContactModal: (contact: Contact) => void;
  addNewContact: () => void;
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  openContactModal,
  addNewContact,
}) => {
  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={addNewContact}>Add new contact</button>
      <ul>
        {contacts.map((contact, index) => (
          <li
            key={index}
            onClick={() => openContactModal(contact)}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={contact.photo}
              alt={`${contact.name}'s photo`}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
