import React, { Component } from 'react';

export default function Nav() {
  return (
    <nav className="blue darken-1 col l12 s12">
      <div className="nav-wrapper blue darken-1" id="nav">
        <h4 className="brand logo blue darken-1 white text">
          Galvanize Delivers
        </h4>
        <ul className="right hide-on-med-and-down">
          <li className="active">
            <a className="blue darken-1 white-text" href="order.html">
              Order Delivery
            </a>
          </li>
        </ul>
        <ul className="side-nav blue darken-1">
          <li>
            <a className="active" href="order.html">
              Order Delivery
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
