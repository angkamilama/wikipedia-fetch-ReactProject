

function DisplayItems({item, index}) {
return (
    <div key={index}>
        <h3>{item.title}</h3>
        <p>{item.snippet}</p>
        <p>{item.pageid}</p>
    </div>
);
}

export default DisplayItems;