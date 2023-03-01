import { useState } from "react";


function FormCreate(props) {
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
            props.gettingData(data.query.search);
        })

        )
    };

    return (
        <>
        <div className="container">
            <h1><span>Wikipedia Search</span></h1>
            <form onSubmit ={handleSubmit}>
              <input type="text" value={term} onChange={handleChange} placeholder='   Enter Search Term'/>
              <button type="submit">Search</button>
            </form>
            
        </div>
        </>
    );
};

export default  FormCreate;