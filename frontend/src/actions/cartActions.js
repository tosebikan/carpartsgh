import axios from 'axios';
import {ADD_TO_CART} from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispatch)=> {
  try{
    const {data} = await axios.get('/api/rpoducts/'+productId);
    dispatch({ type: ADD_TO_CART, payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }});
  }catch(error){

  }
};

export{
  addToCart
};
