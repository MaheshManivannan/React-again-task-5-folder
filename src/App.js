import AddItems from "./AddItems";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import SearchItem from "./SearchItem";

/* import ProductDetails from "./ProductDetails";

const App = () => {

  return (
    <>
    <ProductDetails />
    </>
  )
}
export default App; */
const App = () => {
  const [items,setItems] = useState(JSON.parse(localStorage.getItem("todolist")));
const [newItem,setNewItem] = useState("");
const [search,setSearch] = useState("");
const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1
  const obj = {id,checked:false,item};
  const all = [...items,obj];
  setItems(all);
  localStorage.setItem("todolist",JSON.stringify(all));


}
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
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(newItem);
  addItem(newItem);
  setNewItem("");
}

  return (
    <>
    <h1>Hello World, Good Day</h1>
    <Header title="TO DO LIST APPLICATION"/>
    <AddItems newItem = {newItem}
              setNewItem = {setNewItem}
              handleSubmit = {handleSubmit}
    />
    <SearchItem
                search = {search}
                setSearch = {setSearch}
    />
    <Content items = {items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
             setItems = {setItems}
             handleCheck = {handleCheck}
             handleDelete = {handleDelete} 
    />
    <Footer items = {items} 
    />
    </>
  );
}
export default App;