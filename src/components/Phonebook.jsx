import React, { useState } from "react";
// import PropTypes from "prop-types";
import s from "./Phonebook.module.css";
import { nanoid } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import { useAddContactMutation, useGetContactsQuery } from "redux/contactsApi";

export default function Phonebook() {
 //  const dispatch = useDispatch();

 const [name, setName] = useState("");
 const [number, setNumber] = useState("");

 const { data = [], error, isLoading } = useGetContactsQuery();
 const [addContact] = useAddContactMutation();

 const onSaveContact = async () => {
  const contact = {
   name,
   number,
  };

  if (
   data.find((item) => item.name.toLowerCase() === contact.name.toLowerCase())
  ) {
   return alert(`Contact ${name} already exists`);
  }
  await addContact({ id: nanoid(), name, number });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  onSaveContact();
  setName("");
  setNumber("");
 };

 return (
  <>
   <form onSubmit={handleSubmit} className={s.form}>
    <div className={s.div}>
     <label className={s.label}>Name</label>
     <input
      className={s.input}
      id={nanoid()}
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      placeholder="Ivan Dudka"
     />
     <label className={s.label}>Phone</label>
     <input
      className={s.input}
      type="tel"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
      required
      placeholder="+380"
     />
     <button type="submit" className={s.button}>
      Add contact
     </button>
    </div>
   </form>
  </>
 );
}

// Phonebook.propTypes = {
//  onAddContact: PropTypes.func.isRequired,
// };
