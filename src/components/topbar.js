import './topbar.css'

const TopBar = () => {
    return (
        <>
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="inner">
                                <div className="left-info">
                                    <a href="tel:+911234567890">+91 1234567890</a>
                                    <a href="mailto:info@luxuryhotel.com">info@marinedrive.com</a>
                                </div>
                                <div className="right-info">
                                    <div className="social-links">
                                        <a href="#">F</a>
                                        <a href="#">I</a>
                                        <a href="#">T</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TopBar;