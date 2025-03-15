const Footer = () => {
    const period = () => {
        const year = new Date();
        return year.getFullYear();
    }
    return (
        <p style={{backgroundColor: "darkblue",color: "snow",fontSize: "30px"}}>Copyright &copy; {period()}</p>
    );
}
export default Footer;