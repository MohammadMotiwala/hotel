import './header.css';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiTripadvisor } from "react-icons/si";
import { AiOutlineMail, AiFillFacebook, AiFillInstagram } from "react-icons/ai";



const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='inner d-md-flex justify-content-md-between'>
                                <div className='social-links box'>
                                    <ul className='d-flex align-items-center justify-content-md-start justify-content-center'>
                                        <li>
                                            <a href='#' target='_new'><AiFillFacebook /></a>
                                        </li>
                                        <li>
                                            <a href='#' target='_new'><AiFillInstagram /></a>
                                        </li>
                                        <li>
                                            <a href='#' target='_new'><SiTripadvisor /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="logo box">
                                    <Link to='/'>
                                        <img src={logo} />
                                    </Link>
                                </div>
                                <div className='info d-flex align-items-md-end justify-content-md-center box flex-column align-items-center'>
                                    <div className='phone'>
                                        <a href='tel:+919898785456'><BsFillTelephoneFill /> +91 989878 5456</a>
                                    </div>
                                    <div className='email'>
                                        <a href='mailto:hotel@gmail.com'><AiOutlineMail /> hotel@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;