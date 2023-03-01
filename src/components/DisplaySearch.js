
const DisplaySearch = (props) => {
    console.log(props);
    const renderedItem = props.showSearch.map(item => { 
        console.log(item);
        //how to return a div with the details of the object found inside the item???
    });
    return <p>hello!!!</p>

};

export default DisplaySearch;