import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
//import axios from 'axios';
import {listProducts} from '../actions/productActions';


const HomeScreen = (props) => {
//  const [products, setProducts] = useState([])
  const productList = useSelector(state => state.productList)
  const {products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts())
    {/*const fetchData = async () => {
      const {data} = await axios.get("/api/products")
      setProducts(data)
    }
    fetchData()*/}
  },[])
  return(
    loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
  <ul className="products">
  {products.map((product) =>
    <li key={product._id}>
      <div className="product" >
      <Link to={'/product/' + product._id}>
        <img className="product-image" src={product.image} alt="product"/>
        </Link>
        <div className="product-name">
          <Link to={'/product/' + product._id}>{product.name}</Link>
        </div>
        <div className="product-brand">{product.brand}</div>
        <div className="product-price">${product.price}</div>
        <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
        <div className="product-year">{product.year}</div>
      </div>
    </li>
  )}
  </ul>
)}

export default HomeScreen;
