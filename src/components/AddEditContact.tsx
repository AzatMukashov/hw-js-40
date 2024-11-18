import React, { useEffect, useState } from 'react';
import { Contact } from '../types';
import { useNavigate } from 'react-router-dom';

interface AddEditContactProps {
  contact?: Contact;
  onSubmit: (contact: Contact) => void;
}

const AddEditContact: React.FC<AddEditContactProps> = ({contact, onSubmit}) => {
  const [name, setName] = useState(contact ? contact.name : '');
  const [phone, setPhone] = useState(contact ? contact.phone : '');
  const [email, setEmail] = useState(contact ? contact.email : '');
  const [photo, setPhoto] = useState(contact ? contact.photo : '');
  const [preview, setPreview] = useState(contact ? contact.photo : '');
  const navigate = useNavigate();
  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
      setPhoto(contact.photo);
      setPreview(contact.photo);
    }
  }, [contact]);
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto(e.target.value);
    setPreview(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContact: Contact = {id: contact ? contact.id : Date.now().toString(), name, phone, email, photo};
    onSubmit(newContact);
  };
  return (
    <div>
      <h1>{contact ? 'Edit Contact' : 'Add New Contact'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Photo URL:</label>
          <input
            type="text"
            value={photo}
            onChange={handlePhotoChange}
          />
        </div>
        <div>
          {preview && <img src={preview} alt="Photo prewiew" width={200} height={200}/>}
        </div>
        <button type="submit">Save</button>
      </form>
      <button onClick={() => navigate('/')}>Back to contacts</button>
    </div>
  );
};

export default AddEditContact;