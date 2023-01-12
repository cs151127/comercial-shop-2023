import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart ,removeFromCart} from "../../actions/cartActions";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  SplitButton,
  ListGroupItem,
} from "react-bootstrap";
import Message from "../Message";

import { CART_ADD_ITEM } from "../../constants/cartConstants";

export const CartScreen = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const productId = id;

  const history = useNavigate();
  const useQty = useLocation();
  const qty = search ? Number(search.split("=")[1]) : 1;
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    if (cartItems.length === 0) {
      return (
        <Message variant="info">
          your cart is empty<Link to="/">go back</Link>
        </Message>
      );
    }
    dispatch(removeFromCart(id))
  };
  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <div>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100px", height: "auto" }}
                      fluid
                      rounded
                    />
                    <Col md={3}>
                    <Link to={"/product/" + item.product}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={3}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>

                    <Col md={1}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
        
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {" "}
                <h2>
                  Total({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  Items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup.Item>
              <Button
                type="button"
                className="btn-blocl"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Ckeckout
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartScreen;
