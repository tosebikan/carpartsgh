import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu =() => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button className="brand-button" onClick={openMenu}>&#9776;</button>
            <Link to="/">CarpartsGh</Link>
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
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path='/cart/:id?'
              component={CartScreen}/>
          </div>
        </main>
        <footer className="footer">
        2020 oltostudios All Rights Reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
