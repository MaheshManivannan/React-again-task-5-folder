import { useState } from "react";

const Content = () => {
    const [items,setItems] = useState([
        {id: 1, checked: false, item: "Coding"},
        {id: 2, checked: false, item: "Playing cricket"},
        {id: 3, checked: false, item: "Read about AI"},

    ]);
const handleCheck = (id) => {
    const check = items.map((item) => item.id === id ? {id:item.id,checked:!item.checked,item:item.item} : item);
    setItems(check);
    localStorage.setItem("todolist",JSON.stringify(check));
}
const handleDelete = (id) => {
    const del = items.filter((item) => item.id !== id ? {id:item.id,checked:!item.checked,item:item.item} : null);
    setItems(del);
    localStorage.setItem("todolist",JSON.stringify(del));
}

    return (
        <>
        { items.length > 0  ? (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <input type="checkbox"
                           checked={item.checked}
                           onChange={() => handleCheck(item.id)}
                     />
                     <label style={item.checked === true ? {textDecoration: "line-through"} : null} onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                     <button onClick={() => handleDelete(item.id)}>Delete</button>
                </li>
                ))}
        </ul>
        ) : (<h2>The list is empty</h2>)
}
        </>
    );
}
export default Content;