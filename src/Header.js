const Header = ({title}) => {
    const styles = {
        backgroundColor: "red",
        color: "white",
        fontWeight: "bold"
    }

    return (
        <h2 style={styles}>{title}</h2>
    );
}
export default Header;