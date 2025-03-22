const LineItem = ({item,handleCheck,handleDelete}) => {

    return (
        <li>
                    <input type="checkbox"
                           checked={item.checked}
                           onChange={() => handleCheck(item.id)}
                     />
                     <label style={item.checked === true ? {textDecoration: "line-through"} : null} onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                     <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
    )
}
export default LineItem;