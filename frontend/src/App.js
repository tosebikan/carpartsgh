import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open")
  }

  const closeMenu =() => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button className="brand-button" onClick={openMenu}>&#9776;</button>
          <a href="index.html">CarpartsGh</a>
        </div>
        <div className="header-links ">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Signin</a>
          <a href="signup.html">Signup</a>
        </div>
      </header>

      <aside className="sidebar">
        <h3>Select Car Brand</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
          <a href="index.html">Kia</a>
          </li>
          <li>
          <a href="index.html">Toyota</a>
        </li>
          <li>
          <a href="index.html">Mercedes Benz</a>
        </li>
        </ul>

      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image"src='/images/tire.jpg' alt="product"/>
                <div className="product-name">
                  <a href="product.html">Tire</a>
                </div>
                <div className="product-brand">Kia</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image"src='/images/tire.jpg' alt="product"/>
                <div className="product-name">
                  <a href="product.html">Tire</a>
                </div>
                <div className="product-brand">Kia</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image"src='/images/tire.jpg' alt="product"/>
                <div className="product-name">
                  <a href="product.html">Tire</a>
                </div>
                <div className="product-brand">Kia</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image"src='/images/tire.jpg' alt="product"/>
                <div className="product-name">
                  <a href="product.html">Tire</a>
                </div>
                <div className="product-brand">Kia</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image"src='/images/tire.jpg' alt="product"/>
                <div className="product-name">
                  <a href="product.html">Tire</a>
                </div>
                <div className="product-brand">Kia</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image"src='/images/tire.jpg' alt="product"/>
                <div className="product-name">
                  <a href="product.html">Tire</a>
                </div>
                <div className="product-brand">Kia</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image"src='/images/tire.jpg' alt="product"/>
                <div className="product-name">
                  <a href="product.html">Tire</a>
                </div>
                <div className="product-brand">Kia</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
          </ul>
      </div>
      </main>
      <footer className="footer">
        2020 oltostudios All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
