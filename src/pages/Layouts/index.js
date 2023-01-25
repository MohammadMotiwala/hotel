import Header from "../../components/header";
import CustomNavbar from "../../components/nav";
import Footer from "../Footer";

const Layout = (props) => {
    return (
        <>
            <Header />
            <CustomNavbar />
            <div className="main py-5">
                <div className="container">
                    <div className="row">
                        {props.children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Layout;