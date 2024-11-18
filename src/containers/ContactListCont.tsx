import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store.ts";
import { useEffect, useState } from "react";
import { fetchContacts, removeContact } from "../components/contactAction.ts";
import ContactList from "../components/ContactList.tsx";
import ContactModal from "../components/ContactModal.tsx";
import { Contact } from "../types";
import { useNavigate } from "react-router-dom";

const ContactListCont = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const openContactModal = (contact: Contact) => {
    setSelectedContact(contact);
  };
  const closeContactModal = () => {
    setSelectedContact(null);
  };
  const deleteContact = (contactId: string) => {
    dispatch(removeContact(contactId));
    closeContactModal();
  };
  const editContact = () => {
    if (selectedContact) {
      navigate(`/edit-contact/${selectedContact.id}`);
    }
  };
  const addNewContact = () => {
    navigate("/add-contact");
  };
  return (
    <>
      <ContactList
        contacts={contacts}
        openContactModal={openContactModal}
        addNewContact={addNewContact}
      />
      {selectedContact && (
        <ContactModal
          contact={selectedContact}
          onClose={closeContactModal}
          onEdit={editContact}
          onDelete={() => deleteContact(selectedContact.id)}
        />
      )}
    </>
  );
};

export default ContactListCont;
