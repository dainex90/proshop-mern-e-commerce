import React, { useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ history }) => {
    const { id } = useParams();

    const qty = useLocation().search;

    console.log(qty)

  return (
    <div>
        Cart
    </div>
  )
}

export default CartScreen
