import Layout from "../Layouts";

import { Link } from "react-router-dom";
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineRoomService, MdOutlineBathroom } from "react-icons/md";
import { CiParking1 } from "react-icons/ci";
import { TfiWheelchair } from "react-icons/tfi";
import { BiDrink } from "react-icons/bi";
import { GiVacuumCleaner } from "react-icons/gi";
import Data from "./Data";


const Rooms_Main = () => {
    return (
        <>
            <Layout>
                <h1 className="pb-5">Our Rooms</h1>
                <div className="container">
                    <div className="row xy-5">
                        <div className="rooms-main d-flex justify-content-between flex-wrap">
                            {Data.map((room) => {
                                return (
                                    <div className="rblock" key={room.id}>
                                        <Link to={`details/${room.id}`}>
                                            <img src={`${room.src}`} alt="Room Image" />
                                        </Link>
                                        <div className="info">
                                            <div className="rooms-amenities">
                                                <ul className="d-flex justify-content-center">
                                                    <li><AiOutlineWifi /></li>
                                                    <li><MdOutlineRoomService /></li>
                                                    <li><MdOutlineBathroom /></li>
                                                    <li><CiParking1 /></li>
                                                    <li><TfiWheelchair /></li>
                                                    <li><BiDrink /></li>
                                                    <li><GiVacuumCleaner /></li>
                                                </ul>
                                            </div>
                                            <h3><Link to={`details/${room.id}`}>{room.rname}</Link></h3>
                                            <p>{room.desc}</p>
                                            <div className="rbtns d-flex justify-content-between flex-wrap">
                                                <a href={"https://live.ipms247.com/booking/book-rooms-royalbeachresort"} className="book-now" target={"_room"}>Book Now</a>
                                                <Link to={`details/${room.id}`} className="book-now read-more" >Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Rooms_Main;