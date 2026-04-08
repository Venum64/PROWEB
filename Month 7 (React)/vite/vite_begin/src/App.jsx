import { useState } from "react";
import Navbar from "./components/Navbar";
const App = () => {
  const [title, setTitle] = useState("Я пропс");
  const [listLinks, setlistLinks] = useState([
    {id:1,name:'html'},
    {id:2,name:'css'},
    {id:3,name:'js'},
    {id:4,name:'react'},
  ]);
  return (
    <div>
      <Navbar logo={title} listLinks={listLinks}/>
    </div>
  );
};

export default App;
