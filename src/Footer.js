const Footer = ({items}) => {
    
    return (
        <p style={{backgroundColor: "darkblue",color: "snow",fontSize: "30px"}}>{items.length} List {items.length > 1 ? "Items" : "Item"}</p>
    );
}
export default Footer;