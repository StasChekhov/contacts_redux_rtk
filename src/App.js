import s from "./components/Phonebook.module.css";
import Section from "./components/Section";
import Phonebook from "./components/Phonebook";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { useGetContactsQuery } from "redux/contactsApi";
// import { getContacts } from "redux/clickSlice";

export default function App() {
 const { data, error, isLoading } = useGetContactsQuery();
 return (
  <div className={s.section}>
   <Section title="Phonebook">
    <Phonebook />
   </Section>
   <Section title="Contacts">
    {/* {data.length < 1 ? <p>Your contacts list is empty</p> : <Filter />} */}
    <ContactList />
   </Section>
  </div>
 );
}
