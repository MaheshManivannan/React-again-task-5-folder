import ItemsList from "./ItemsList";


const Content = ({items,handleCheck,handleDelete}) => {
    

    return (
        <>
        { items.length > 0  ? (
        <ItemsList items = {items}
                   handleCheck = {handleCheck}
                   handleDelete = {handleDelete} 
        />
        ) : (<h2>The list is empty</h2>)
}
        </>
    );
}
export default Content;