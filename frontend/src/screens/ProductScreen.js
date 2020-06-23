import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

const ProductScreen = (props) => {
  console.log('id',props.match.params.id)
  const product = data.products.find(x => x._id === props.match.params.id)
  return(
  <div className="back-to-result">
  <Link to="/">Back to result</Link>
  <div className="Details ">
  <div className="Details-image">
    <img src={product.image} alt="product"/>
  </div>

  <div className="Details-info ">
    <ul>
      <li>
        <h4>{product.name}</h4>
      </li>
      <li>
        <h4>{product.rating} stars ({product.numReviews} reviews)</h4>
      </li>
      <li>
        Price: <b>${product.price }</b>
      </li>
      <li>
        Description:
        <div>
          {product.description}
        </div>
      </li>
    </ul>
  </div>
  <div className="Details-action">
    <ul>
      <li>
        Price: {product.price}
      </li>
      <li>
        Status: {product.status }
      </li>
      <li>
        Qty:
        <select>
          <option> 1</option>
          <option> 2</option>
          <option> 3</option>
          <option> 4</option>
        </select>
      </li>
      <li>
      <button className="button">Add to Cart</button>
      </li>

    </ul>
  </div>

  </div>

  </div>
)
}

export default ProductScreen;
