import LineItem from "./LineItem";

const ItemsList = ({items,handleCheck,handleDelete}) => {

    return(
    <ul>
            {items.map((item) => (
                <LineItem item = {item}
                          key={item.id}
                          handleDelete = {handleDelete}
                          handleCheck = {handleCheck}
                />
                ))}
        </ul>
    )
}
export default ItemsList;