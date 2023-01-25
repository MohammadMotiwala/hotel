import './footer.css';
import flogo from '../../img/footer-logo.png';

const Footer = () => {
    let footerAbout = 'Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed doing eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat ion ullamco laboris nisi.';

    let footerAddress = 'D-113, International Trade Center, Majura Gate, Surat, Gujarat 395002';

    

    return (
        <>
            <footer className="custom-footer mt-5">
                <div className="f-about f-box">
                    <img src={flogo} />
                    <h3>About Us</h3>
                    <p>{footerAbout}</p>
                </div>
                <div className="f-links f-box">
                    <h3>Page Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="f-info f-box">
                    <h3>Contact Us</h3>
                    <p>{footerAddress}</p>
                    <p><a href="mailto:info@Holidayinn.Com">info@Holidayinn.Com</a></p>
                    <p><a href="tel:+91 01234 56789">+91 01234 56789</a></p>
                </div>
            </footer>
            <div className="copyright">
                <div className="f-copy">React App &copy; 2022 All Rights Reserved</div>
                <div className="f-copy">Develope By <span>Mohammad Motiwala</span></div>
            </div>


        </>
    );
}
export default Footer;