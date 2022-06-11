import ContactItems from "./ContactItems";
import s from "./Phonebook.module.css";
// import PropTypes from "prop-types";
import { useMemo } from "react";
import { getFilter } from "redux/clickSlice";
import { useSelector } from "react-redux";
import { useGetContactsQuery } from "redux/contactsApi";

const ContactList = () => {
 const filter = useSelector(getFilter);
 const { data = [], error, isLoading } = useGetContactsQuery();
 const filteredContacts = useMemo(
  () =>
   filter ? data.filter((contact) => contact.name.includes(filter)) : data,
  [filter, data]
 );
 //  const filteredContacts = (data, filter) => {
 //   const normalizedFilter = filter.toLowerCase();
 //   return data.filter((contact) =>
 //    contact.name.toLowerCase().includes(normalizedFilter)
 //   );
 //  };
 return (
  <ul>
   {filteredContacts.map((e) => (
    <li key={e.id} className={s.contact}>
     <ContactItems id={e.id} name={e.name} number={e.number} />
    </li>
   ))}
  </ul>
 );
};

export default ContactList;

// ContactList.propTypes = {
//  listContacts: PropTypes.arrayOf(
//   PropTypes.shape({
//    id: PropTypes.string.isRequired,
//    name: PropTypes.string.isRequired,
//    number: PropTypes.string.isRequired,
//   })
//  ),
//  // onDelete: PropTypes.func.isRequired,
// };
