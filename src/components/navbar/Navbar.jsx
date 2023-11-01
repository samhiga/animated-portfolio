import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <span>Sam Higa</span>
                <div className="social">
                    <a href="#"><img src ="/linkedin.png" alt="" /></a>
                    <a href="#"><img src ="/facebook.png" alt="" /></a>
                    <a href="#"><img src ="/github.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar