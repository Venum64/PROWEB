import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increm, dicrement} from '../store/contact/ContactSlice';

const Home = () => {
  const { title, count } = useSelector((state) => state.contacts);
const dispatch = useDispatch();
  return (
    <div>
      <p>{title}</p>
      <p>{count}</p>
      <button onClick={()=>dispatch(increm(30))}>plus</button>
      <button onClick={()=>dispatch(dicrement(50))}>minus</button>
    </div>
  );
};

export default Home;
