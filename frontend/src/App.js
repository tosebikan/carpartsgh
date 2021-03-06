import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductsScreen from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button className="brand-button" onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">CarpartsGh</Link>
          </div>
          <div className="header-search">
            <input
              name="search"
              type="text"
              placeholder="search"
              className="header-searchInput"
            />
            <SearchIcon className="header-searchIcon" />
          </div>
          <div className="header-links">
            <Link to="/cart">Cart</Link>
            <Link to="/products">Products</Link>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Signin</Link>
            )}
          </div>
        </header>

        <aside className="sidebar">
          <h3>Select Car Brand</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="products">Products</Link>
            </li>
            <li>
              <Link to="/">Categories</Link>
            </li>
            <li>
              {userInfo ? (
                <Link to="/profile">{userInfo.name}</Link>
              ) : (
                <Link to="/signin">Signin</Link>
              )}
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
          </div>
        </main>
        <footer className="footer">2020 oltostudios All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
