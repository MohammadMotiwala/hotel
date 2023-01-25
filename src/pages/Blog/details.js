import { useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import { Breadcrumb } from "react-bootstrap";
import Data from "./Data";
import Layout from "../Layouts";

const RoomsDetail = () => {
    const { id } = useParams();

    return (
        <>
            <Layout>
                <Breadcrumb className="bg">
                    <h1 className="d-flex justify-content-center align-items-center w-100 m-0 text-white position-relative">{Data[id].rname}</h1>
                </Breadcrumb>
                <div className="container">
                    <div className="row">
                        <div className="singlePage d-flex justify-content-between py-5">
                            <div className="left col-lg-8">
                                <div key={id} className="singlePage d-flex flex-column align-items-center ">
                                    <div className="img">
                                        <Carousel variant="dark">
                                            <Carousel.Item>
                                                <img src={`../../${Data[id].src}`} alt="Room Image" />
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <div className="info py-5">
                                        <h3>{Data[id].rname}</h3>
                                        <p className="pt-2" style={{ textAlign: "justify" }}>{Data[id].desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right col-lg-4 text-center">
                                <h3>Right Panel</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>



        </>
    );
}
export default RoomsDetail;