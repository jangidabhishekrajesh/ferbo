import image from "../image/image7.png";

let Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" style={{marginBottom:"-32px"}}>
                <a className="navbar-brand mx-5" href="/"><img className="navbarBrand" src={image} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-column ml-lg-0 ml-3" id="navbar">
                    <div className="icon">
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link py-0 pr-3" href="/"><i className="fas fa-search mx-1 text-dark"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link py-0 pr-3" href="/"><i className="fas fa-user mx-1 text-dark"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link py-0 pr-3" href="/"><i className="far fa-heart mx-1 text-dark"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link py-0 pr-3" href="/"><i className="fas fa-shopping-cart text-dark"></i></a>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav" style={{marginBottom:'15px'}}>
                        <li className="nav-item">
                            <a className="nav-link mx-5" style={{color:'black'}} href="/">DRAPERY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-5" style={{color:'black'}} href="/">LOOKS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-5" style={{color:'black'}} href="/">GUIDE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-5" style={{color:'black'}} href="/">BLINDS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-5" style={{color:'black'}} href="/">EXPERIENCE CENTER</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="icon-bar" style={{marginBottom:"-8px"}}>
                <a href="/"><i className="fab fa-instagram text-danger"></i></a> 
                <a href="/"><i className="fab fa-facebook-square text-primary"></i></a> 
                <a href="/"><i className="fab fa-pinterest text-danger"></i></a> 
                <a href="/"><i className="fab fa-youtube text-danger"></i></a>
            </div>
        </nav>
        </>
    );
}
export default Navbar;