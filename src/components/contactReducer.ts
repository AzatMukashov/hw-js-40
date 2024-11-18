import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../types";

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id,
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload,
      );
    },
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = action.payload;
    },
  },
});
export const { addContact, editContact, deleteContact, setContacts } =
  contactSlice.actions;
export default contactSlice.reducer;
