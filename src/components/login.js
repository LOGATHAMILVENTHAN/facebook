import { Row, Col, Accordion, Card, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import lion from '../images/lion.jpg';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Login() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>  <Row>
            <Col sm={2}></Col>
            <Col sm={4}>
                <p className="a1">facebook </p>
                <p className='a2'>Facebook helps you connect and share with the people in your life.</p>
            </Col>
            <Col sm={4}>
                <Card className='a3'>
                    <Card.Body>
                        <br />

                        <input className='a4' type="text" placeholder='Email address or phone number' />
                        <br />
                        <input type='text' className='a5' placeholder='Password' />
                        <br />
                        <button className='a6'>Log in</button>
                        <br />
                        <p className='a7'>Forgetten password?</p>
                        <hr />
                        <button className='a8' onClick={handleShow}>Create new account</button><br />

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className='b1'>Sign Up

                                    <p className='b15'>it's quick and easy</p>

                                </Modal.Title>

                            </Modal.Header>

                            <Modal.Body>
                                <Row>
                                    <Col><input className='b2' placeholder='First name' type='text' /></Col>
                                    <Col><input className='b3' placeholder='Surname' type='text' /></Col>
                                </Row>
                                <input className='b4' placeholder='Mobile number or email address' type='text' />
                                <input className='b5' placeholder='Password' type='text' />
                                <p className='b6'>Date of birth<i class="bi bi-question-circle-fill"></i></p>
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
                                <p className='b7'>Gender<i class="bi bi-question-circle-fill"></i></p>
                                <Row>
                                    <Col><form className='b12'>

                                        <input className='b8' type="radio" />
                                        <label for="html">Male</label>
                                    </form></Col>
                                    <Col><form className='b12'>

                                        <input className='b9' type="radio" />
                                        <label for="html">Female</label>
                                    </form></Col>
                                    <Col>
                                        <form className='b12'>

                                            <input className='b10' type="radio" />
                                            <label for="html">Custom</label>
                                        </form>
                                    </Col>
                                </Row>
                                <p className='b11'>People who use our service may have uploaded your contact information to Facebook.</p>
                                <a className='b111' href='https://www.facebook.com/help/637205020878504'>Learn more.</a>
                                <p className='b13'>By clicking Sign Up, you agree to our</p>
                                <a className='b14' href='https://www.facebook.com/legal/terms/update'>Terms,Privacy policy And Cookies.</a>
                                <p className='b16'>You may receive SMS notifications from us and can opt out at any time.</p>
                                <button className='b17'>Sign in</button>

                            </Modal.Body>

                        </Modal>
                    </Card.Body>
                </Card>
            </Col>
            <br />
            <a className='a9' href='https://www.facebook.com/'>Create a Page</a>
            <p className='a10'>for a celebrity,brand or business.</p>
            <Col sm={2}></Col>
        </Row>
        </>
    );
}
export default Login;