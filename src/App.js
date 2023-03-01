import { useState } from "react";
import DisplaySearch from "./components/DisplaySearch";
import FormCreate  from './components/FormCreate';

function App() { 
  const [display, setDisplay] = useState([]);

  const getData = (list) => {
    setDisplay(list);
    console.log(display);
  };

  return (
    <div>
          <FormCreate gettingData={getData}/>   
          <DisplaySearch showSearch={display}/>
    </div>
  );
}

export default App;
