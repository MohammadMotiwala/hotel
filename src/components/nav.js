import './nav.css';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const CustomNavbar = () => {
    return (
        <>
            <nav className="navigation">
                <div className="container">
                    <div className='row'>
                        <Navbar expand="md p-0">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse >
                                <Nav className="custom m-auto justify-content-center w-100">
                                    <Link to='/'>Home</Link>
                                    <Link to='/about'>About Us</Link>
                                    <NavDropdown title="Our Hotels" id="basic-nav-dropdown">
                                        <Link to='/inner'> Page 1</Link>
                                        <Link to='/inner'>Page 2</Link>
                                        <Link to='/inner'>Page 3</Link>
                                    </NavDropdown>
                                    <Link to='/ameneties'>Ameneties</Link>
                                    <Link to='/rooms'>Rooms</Link>
                                    <Link to='/blog'>Blog</Link>
                                    <Link to='/gallery'>Gallery</Link>
                                    <Link to='/contact'>Contact Us</Link>
                                </Nav>
                            </Navbar.Collapse>
                            <a href='https://www.godaddy.com' target="_" className='book-now'>Book Now</a>
                        </Navbar>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default CustomNavbar;