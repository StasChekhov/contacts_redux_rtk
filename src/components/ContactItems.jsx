import PropTypes from "prop-types";
import s from "./Phonebook.module.css";
import { useDispatch } from "react-redux";
import { useDeleteContactMutation } from "redux/contactsApi";

const ContactItems = ({ id, name, number }) => {
 const dispatch = useDispatch();
 const [deleteContact, result] = useDeleteContactMutation();

 return (
  <>
   <div className={s.contactBlock}>
    <span className={s.contactName}>{name}</span>
    <span className={s.contactPhone}>{number}</span>

    <button
     type="button"
     data-id={id}
     className={s.delete}
     onClick={() => deleteContact(id)}
    >
     Delete
    </button>
   </div>
  </>
 );
};
// onClick={() => dispatch(remove({ id }))}
export default ContactItems;

// ContactItems.propTypes = {
//  id: PropTypes.string.isRequired,
//  name: PropTypes.string.isRequired,
//  number: PropTypes.string.isRequired,
//  //   onDelete: PropTypes.func.isRequired,
// };
