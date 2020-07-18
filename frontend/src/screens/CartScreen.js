import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../actions/cartActions';


const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId, qty));
    }
  },[]);
  return(
    <div>CartScreen</div>
  );
};

export default CartScreen;
