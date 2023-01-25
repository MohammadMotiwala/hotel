import CustomSlider from "../../components/slider";
import Layout from "../Layouts";
import { AiOutlineWifi } from "react-icons/ai";
import { BiDrink } from "react-icons/bi";
import { MdOutlineCleaningServices, MdOutlineCoffeeMaker, MdBed } from "react-icons/md";

import about1 from '../../img/about1.webp';
import about2 from '../../img/about2.webp';
import room1 from '../../img/home-rooms/1.webp';
import room2 from '../../img/home-rooms/2.webp';
import room3 from '../../img/home-rooms/3.webp';
import room4 from '../../img/home-rooms/4.webp';
import room5 from '../../img/home-rooms/5.webp';
import Slider from "../Slider";

import { SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Layout>
                <CustomSlider />
                <div className="col-md-12">
                    <div className="about-us d-flex justify-content-between align-items-center">
                        <h3 className="main-title pb-5">Our History</h3>
                        <div className="img box">
                            <img src={about1} title="About 1" />
                            <img src={about2} title="About 2" className="abt-img2" />
                        </div>
                        <div className="info box">
                            <h4>BEST STAY IN THE TOWN</h4>
                            <h3>Reserve a Cool Suite</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget erat scelerisque vehicula. Phasellus nec blandit metus. Nulla quis molestie risus. Nunc non auctor dui. In consequat augue eu eros luctus cursus.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="ameneties">
                        <h5>SINCE <span>1994</span></h5>
                        <h3 className="main-title pb-5">Our Best Amenities</h3>
                        <div className="inner d-flex justify-content-between text-center">
                            <div className="box">
                                <p>
                                    <AiOutlineWifi />
                                    <h6>WiFi</h6>
                                </p>
                            </div>
                            <div className="box">
                                <p>
                                    <BiDrink />
                                    <h6>Drink</h6>
                                </p>
                            </div>
                            <div className="box">
                                <p>
                                    <MdOutlineCoffeeMaker />
                                    <h6>Coffee Maker</h6>
                                </p>
                            </div>
                            <div className="box">
                                <p>
                                    <MdOutlineCleaningServices />
                                    <h6>Cleaning</h6>
                                </p>
                            </div>
                            <div className="box">
                                <p>
                                    <MdBed />
                                    <h6>Queen Bed</h6>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homerSlider">
                <h3 className="col-md-12 main-title pb-5">Our Best Rooms</h3>
                <Slider>
                        <SwiperSlide>
                            <div className="item">
                                <div className="img">
                                    <img src={room1} title="Image" />
                                </div>
                                <div className="info">
                                    <div className="inner">
                                        <div className="icon"></div>
                                        <h3>Deluxe Room</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                        <Link to='/rooms/details/0'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <div className="img">
                                    <img src={room2} title="Image" />
                                </div>
                                <div className="info">
                                    <div className="inner">
                                        <div className="icon"></div>
                                        <h3>Deluxe Room</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                        <Link to='/rooms/details/1'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <div className="img">
                                    <img src={room3} title="Image" />
                                </div>
                                <div className="info">
                                    <div className="inner">
                                        <div className="icon"></div>
                                        <h3>Deluxe Room</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                        <Link to='/rooms/details/2'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <div className="img">
                                    <img src={room4} title="Image" />
                                </div>
                                <div className="info">
                                    <div className="inner">
                                        <div className="icon"></div>
                                        <h3>Deluxe Room</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                        <Link to='/rooms/details/3'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <div className="img">
                                    <img src={room5} title="Image" />
                                </div>
                                <div className="info">
                                    <div className="inner">
                                        <div className="icon"></div>
                                        <h3>Deluxe Room</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                        <Link to='/rooms/details/4'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                </Slider>
                    </div>

            </Layout>
        </>
    );
}
export default Home;