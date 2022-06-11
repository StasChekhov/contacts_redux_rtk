import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterContacts } from "redux/clickSlice";

const Filter = () => {
 const [text, setText] = useState("");

 const dispatch = useDispatch();

 const handleChange = (e) => {
  const value = e.target.value;
  setText(value);
  dispatch(filterContacts({ text: value }));
 };

 return (
  <label>
   Filter
   <input type="text" value={text} onChange={handleChange} />
  </label>
 );
};

export default Filter;
