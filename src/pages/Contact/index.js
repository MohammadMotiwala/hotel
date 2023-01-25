import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import React from 'react';
import Layout from "../Layouts";
import map from "../../img/map.webp";

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j97malw', 'template_yipe6fp', e.target, 'E-j-8t2-GacWQ2LrI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        alert("Your Inquiry is sent Successfully!");
    }
    return (
        <>
            <Helmet>
                <title>Contact Us</title>
                <meta name='description' content='Contact Us Beginner friendly page for learning React Helmet.' />
            </Helmet>

            <Layout>
                <div className='wrapper-contact py-5'>
                    <div className='info d-flex justify-content-between'>
                        <div className='box bg-white p-5'>
                            <h3>Office Address</h3>
                            <p>19/A, Cirikon City hall <br /> Tower New York, NYC</p>
                        </div>
                        <div className='box bg-white p-5'>
                            <h3>Phone Number</h3>
                            <a href='tel:+97656867578647'>+ 97656 8675 7864 7</a><br />
                            <a href='tel:+87676686757656'>+ 876 766 8675 765 6</a>
                        </div>
                        <div className='box bg-white p-5'>
                            <h3>Email Address</h3>
                            <a href='mailto:example@example.com'>example@example.com</a><br />
                            <a href='mailto:example.example@example.com'>example.example@example.com</a>
                        </div>
                    </div>
                    <div className='map py-5 my-5'>
                        <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.531566119118!2d-88.0623936853893!3d30.7315667927409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889a5183f63eaf45%3A0xb2cb5a8169923c97!2sAfricatown%20Historic%20District!5e0!3m2!1sen!2sus!4v1670412199764!5m2!1sen!2sus" target={"new"} >
                            <img src={map} />
                        </a>
                    </div>
                    <div className='contactForm'>
                        <form onSubmit={sendEmail}>
                            <div className="row pt-5 mx-auto">
                                <div className="col-8 form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="text" className="form-control" placeholder="Contact Number" name="number" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="col-8 pt-3 mx-auto">
                                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </Layout>
        </>
    );
}
export default Contact;