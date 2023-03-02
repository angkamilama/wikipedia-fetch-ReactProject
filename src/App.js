import { useState } from "react";
import DisplayItems from "./components/DisplayItems";


function App() { 
  const [display, setDisplay] = useState([]);
  const [term, setTerm] = useState('');
  
 
    const handleChange = (event) => {
        setTerm(event.target.value);     
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleFetch(term);
    };

    const handleFetch = (term) => {
        return (
        fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${term}`)
        .then(response => response.json())
        .then(data => {
            const retrievedData = data.query.search;
            setDisplay(retrievedData);
          })
          )
        }
   
      const list = display.map((item, index) => {
        console.log(item);
        return <DisplayItems key={index} item={item}/>
      });


  return (
    <div>
          <div className="container">
            <h1><span>Wikipedia Search</span></h1>
            <form onSubmit ={handleSubmit}>
              <input type="text" value={term} onChange={handleChange} placeholder='   Enter Search Term'/>
              <button type="submit">Search</button>
            </form>
          </div>
          <div>{list}</div>    
    </div>
  );
}

export default App;

