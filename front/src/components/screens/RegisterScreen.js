
import React,{useState}from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { Form,Row,Col,Button } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import Message from "../Message";
import Loader from "../Loader";
import { login } from '../../actions/userActions';
import FormContainer from '../FormContainer';
import { useEffect } from 'react';
import {register} from '../../actions/userActions';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split('=')[1] : '/';
    const userRegister = useSelector(state => state.userRegister);
  
    const { error, loading, userInfo } = userRegister;
  
    useEffect(() => {
      if (userInfo) {
        navigate(redirect);
      }
    }, [navigate, userInfo]);
  
    const submitHandler = e => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setMessage('PASSWORDS DO NOT MATCH');
      } else {
        dispatch(register(name, email, password));
      }
    };
  
    return (
      <div>
        <FormContainer>
          <h1>sign in</h1>
          {error && <Message variant='danger'>{error}</Message>}
          {message && <Message variant='danger'>{message}</Message>}
          <form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>name Address </Form.Label>
              <Form.Control
                type='name'
                required
                placeholder='Enter name'
                value={name}
                onChange={e => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.Label>Email Address </Form.Label>
              <Form.Control
                type='email'
                required
                placeholder='Enter email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
  
            <Form.Group controlId='password'>
              <Form.Label>password </Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
  
            <Form.Group controlId='passwordConfirm'>
              <Form.Label>confirm password </Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                required
                onChange={e => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {loading ? (
              <Loader />
            ) : (
              <Button type='submit' variant='primary'>
                Sign in
              </Button>
            )}
          </form>
        </FormContainer>
      </div>
    );
  };
  
  export default RegisterScreen
