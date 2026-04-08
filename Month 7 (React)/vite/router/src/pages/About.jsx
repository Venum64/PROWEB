import React, { useEffect, useState } from "react";

const About = () => {
  const [listTodo, setListTodo] = useState(null);
  const getTodo = async () => {
    let response = await fetch("https://dummyjson.com/todos");
    let data = await response.json();
    let result = [...data.todos];
    setListTodo(result);
  };
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="todos">
      {listTodo?.map((item) => (
        <div className="todos__item" key={item.id}>
          <p>{item.todo}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
