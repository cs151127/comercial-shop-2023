import React,{useState}from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { Form,Row,Col,Button } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import Message from "../Message";
import Loader from "../Loader";
import { login } from '../../actions/userActions';
import FormContainer from '../FormContainer';
import { useEffect } from 'react';

//na xero oti me to const prepei na anai oxi san function giati exo white sheet
const LoginScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split('=')[1] : '/';
  const userLogin = useSelector((state) => state.userLogin);

  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate,userInfo]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return ( 
  <div>
    <FormContainer>
      <h1> sign in</h1>
      {error&&<Message variant='danger'>{error}</Message>}
      {loading&&<Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <Form.Label>Email Address </Form.Label>
            <Form.Control  type='email
            '
            placeholder='Enter email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}>

            </Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
            <Form.Label>password  </Form.Label>
            <Form.Control  type='password'
            placeholder='Enter password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
            </Form.Control>
        </Form.Group>
           
        <Button type='submit' variant='primary'>
                Sign in
            </Button>

      </Form>
     <Row className='py-3'>
        <Col>
        New customer?<Link to={redirect ? '/register?redirect=' + redirect : '/register'}>

register</Link>
        </Col>
     </Row>
    </FormContainer>
   </div> )
}

export default LoginScreen
