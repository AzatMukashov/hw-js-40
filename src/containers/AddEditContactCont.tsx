import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store.ts";
import {
  addNewContact,
  fetchContacts,
  updateContact,
} from "../components/contactAction.ts";
import AddEditContact from "../components/AddEditContact.tsx";
import { Contact } from "../types";
import { useNavigate, useParams } from "react-router-dom";

const AddEditContactCont: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const currentContact = id
    ? contacts.find((contact) => contact.id === id)
    : undefined;
  const navigate = useNavigate();
  useEffect(() => {
    if (!contacts.length) {
      dispatch(fetchContacts());
    }
  }, [dispatch, contacts]);
  const handleSubmit = (newContact: Contact) => {
    if (currentContact) {
      dispatch(updateContact(newContact));
    } else {
      dispatch(addNewContact(newContact));
    }
    navigate("/");
  };
  return <AddEditContact contact={currentContact} onSubmit={handleSubmit} />;
};

export default AddEditContactCont;
