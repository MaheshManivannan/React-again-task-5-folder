const AddItems = ({newItem,setNewItem,handleSubmit}) => {

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="additems">Add Item:</label>
            <input type="text"
                   required
                   value={newItem}
                   onChange={(e) => setNewItem(e.target.value)}
                    />
            <button>Add</button>
        </form>
        </>
    );
}
export default AddItems;