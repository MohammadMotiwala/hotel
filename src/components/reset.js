import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Layout from "../pages/Layouts";

const Reset = () => {
    const [values, setValues] = useState({});

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        e.preventDefault();
        console.log(values);
        document.querySelector('.res').innerHTML = ` ${values.email}`;
    }
    return (
        <>
            <Layout>
            <div className="container">
                <div className="row py-5">
                    <h3>Reset Password</h3>
                    <Form method="post" onSubmit={handleInputChange}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleInputChange} placeholder="Enter email" />
                    </Form.Group>
                    
                    <div className="inner d-flex justify-content-between">
                       <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link to='/login' element='<Login/>'>Login</Link>
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
export default Reset;