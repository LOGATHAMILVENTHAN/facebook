import { Row, Col, Card, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import lion from '../images/lion.jpg';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as yup from 'yup';
import { ErrorMessage, Formik } from 'formik';

function Login() {
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")

    // Validation schema for formik
    const schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().matches(/\d{8}/, 'Password must be 8 characters long').required('Password is required')
    });

    const handleSubmit = (values) => {
        console.log(values); 
    }
    const confirmbutton=()=>{
        sessionStorage.setItem("email",email)
        alert(" successfully Log in")
    }
    const submitbutton =()=>{
        let user=sessionStorage.getItem("email")
        alert(`welcome ${user}`)
    }

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={4}>
                                <p className="a1">Facebook</p>
                                <p className='a2'>Facebook helps you connect and share with the people in your life.</p>
                            </Col>
                            <Col sm={4}>
                                <Card className='a3'>
                                    <Card.Body>
                                        <br />
                                        <input
                                            className='a4'
                                            type="text"
                                            placeholder='Email address or phone number'
                                            name='email'
                                            value={email}
                                            onChange = {(e) => {setEmail(e.target.value);handleChange(e)}}
                                        />
                                        <ErrorMessage name='email' component='div' className='errorbox' />
                                        <br />
                                        <input
                                            type='password'
                                            className='a5'
                                            placeholder='password'
                                            name='password'
                                            value={password}
                                            onChange={(e) => {setPassword(e.target.value);handleChange(e)}}
                                        />
                                    
                                        <ErrorMessage name='password' component='div' className='errorbox' />
                                        <br />
                                        <button className='a6' onClick={confirmbutton}>Log in</button>
                                        <br />
                                        <p className='a7'>Forgotten password?</p>
                                        <hr />
                                        <button className='a8' onClick={handleShow} >Create new account</button>
                                        <br />

                                        <Modal show={modalShow} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title className='b1'>Sign Up
                                                    <p className='b15'>It's quick and easy</p>
                                                </Modal.Title>
                                            </Modal.Header>

                                            <Modal.Body>
                                                <Row>
                                                    <Col><input className='b2' placeholder='First name' type='text' /></Col>
                                                    <Col><input className='b3' placeholder='Surname' type='text' /></Col>
                                                </Row>
                                                <input className='b4' placeholder='Mobile number or email address' type='text' />
                                                <input className='b5' placeholder='enter DOB' type='text' />
                                                <p className='b6'>Date of birth<i className="bi bi-question-circle-fill"></i></p>
                                                <Row>
                                                    <Col><Form.Select aria-label="Default select example">
                                                        <option>19</option>
                                                        <option value="1">20</option>
                                                        <option value="2">21</option>
                                                        <option value="3">22</option>
                                                    </Form.Select></Col>

                                                    <Col><Form.Select aria-label="Default select example">
                                                        <option>Sep</option>
                                                        <option value="1">Oct</option>
                                                        <option value="2">Nov</option>
                                                        <option value="3">Dec</option>
                                                    </Form.Select></Col>
                                                    <Col><Form.Select aria-label="Default select example">
                                                        <option>2021</option>
                                                        <option value="1">2022</option>
                                                        <option value="2">2023</option>
                                                        <option value="3">2024</option>
                                                    </Form.Select></Col>
                                                </Row>
                                                <p className='b7'>Gender<i className="bi bi-question-circle-fill"></i></p>
                                                <Row>
                                                    <Col><form className='b12'>
                                                        <input className='b8' type="radio" />
                                                        <label>Male</label>
                                                    </form></Col>
                                                    <Col><form className='b12'>
                                                        <input className='b9' type="radio" />
                                                        <label>Female</label>
                                                    </form></Col>
                                                    <Col><form className='b12'>
                                                        <input className='b10' type="radio" />
                                                        <label>Custom</label>
                                                    </form></Col>
                                                </Row>
                                                <p className='b11'>People who use our service may have uploaded your contact information to Facebook.</p>
                                                <a className='b111' href='https://www.facebook.com/help/637205020878504'>Learn more.</a>
                                                <p className='b13'>By clicking Sign Up, you agree to our</p>
                                                <a className='b14' href='https://www.facebook.com/legal/terms/update'>Terms, Privacy policy, and Cookies.</a>
                                                <p className='b16'>You may receive SMS notifications from us and can opt out at any time.</p>
                                                <button  onClick={submitbutton}className='b17'>Sign in</button>
                                            </Modal.Body>
                                        </Modal>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <br />
                            <a className='a9' href='https://www.facebook.com/'>Create a Page</a>
                            <p className='a10'>for a celebrity, brand, or business.</p>
                            <Col sm={2}></Col>
                        </Row>
                        

                    </form>
                    
                )}
                
            </Formik>
        </div>
    );
}

export default Login;
