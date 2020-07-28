import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import data from '../data';
import { detailsProduct } from "../actions/productActions";

const ProductScreen = (props) => {
  {
    /*  console.log('id',props.match.params.id)
  const product = data.products.find(x => x._id === props.match.params.id) */
  }
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="Details ">
          <div className="Details-image">
            <img src={product.image} alt="product" />
          </div>

          <div className="Details-info ">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                <h4>
                  {product.rating} stars ({product.numReviews} reviews)
                </h4>
              </li>
              <li>
                Price: <b>${product.price}</b>
              </li>
              <li>
                Description:
                <div>{product.description}</div>
              </li>
            </ul>
          </div>
          <div className="Details-action">
            <ul>
              <li>Price: {product.price}</li>
              <li>
                Status: {product.countInStock > 0 ? "In Stock" : "Unavailable"}
              </li>
              <li>
                Qty:
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                  {/*<option> 1</option>
              <option> 2</option>
              <option> 3</option>
              <option> 4</option> */}
                </select>
              </li>
              <li>
                {product.countInStock > 0 && (
                  <button onClick={handleAddToCart} className="button">
                    Add to Cart
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
