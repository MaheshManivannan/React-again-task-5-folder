const SearchItem = ({search,setSearch}) => {
    
    return (
        <>
        <form onChange={(e) => e.preventDefault()}>
            <label htmlFor="search">Search:</label>
            <input type="text"
                   id="search"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        </>
    );
}
export default SearchItem;