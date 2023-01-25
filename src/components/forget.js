import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Layout from "../pages/Layouts";

const Forget = () => {
    
    const [values, setValues] = useState({});

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        e.preventDefault();
        console.log(values);
        document.querySelector('.res').innerHTML = ` ${values.password} <br/> ${values.c_password}`;
    }
    return (
        <>
            <Layout>
            <div className="container">
                <div className="row py-5">
                    <h3>Forget Password</h3>
                    <Form method="post" onSubmit={handleInputChange}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleInputChange} placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="c_password" onChange={handleInputChange} placeholder="Password" />
                    </Form.Group>

                    <div className="inner d-flex justify-content-between">
                       <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link to='/reset' element='<Login/>'>Reset Password</Link>
                        <Link to='/contact' element='<Login/>'>Register</Link>
                       </div>
                        <br /><br />
                        
                        <div className="res"></div>
                    </Form>
                </div>
            </div>
            </Layout>
        </>
    );
}
export default Forget;