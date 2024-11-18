import axiosAPI from "../axiosAPI.ts";
import {
  addContact,
  deleteContact,
  editContact,
  setContacts,
} from "./contactReducer.ts";
import { AppDispatch } from "../app/store.ts";
import { Contact } from "../types";

export const fetchContacts = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axiosAPI.get("/contacts.json");
    const contacts = Object.keys(response.data).map((key) => ({
      ...response.data[key],
      id: key,
    }));
    dispatch(setContacts(contacts));
  } catch (error) {
    console.error("error fetching contacts", error);
  }
};

export const addNewContact =
  (contact: Contact) => async (dispatch: AppDispatch) => {
    try {
      const response = await axiosAPI.post("/contacts.json", contact);
      dispatch(addContact({ ...contact, id: response.data.name }));
    } catch (error) {
      console.error("error adding contact", error);
    }
  };

export const updateContact =
  (contact: Contact) => async (dispatch: AppDispatch) => {
    try {
      await axiosAPI.put(`/contacts/${contact.id}.json`, contact);
      dispatch(editContact(contact));
    } catch (error) {
      console.error("error updating contact", error);
    }
  };

export const removeContact =
  (contactId: string) => async (dispatch: AppDispatch) => {
    try {
      await axiosAPI.delete(`/contacts/${contactId}.json`);
      dispatch(deleteContact(contactId));
    } catch (error) {
      console.error("error deleting contact", error);
    }
  };
