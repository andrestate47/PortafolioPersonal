import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Store.css";

const Store = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Producto A",
      description: "Un producto increíble para potenciar tu experiencia.",
      price: "$49.99",
      image: "/public/images/tazajs.jpg",
    },
    {
      id: 2,
      name: "Producto B",
      description: "Diseñado para ofrecer calidad y comodidad.",
      price: "$79.99",
      image: "/public/images/tazajs2.jpg",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} ha sido añadido al carrito.`);
  };

  return (
    <div className="store-container">
      <h1>Bienvenido a la Tienda</h1>
      <div className="cart-info">
        <Link to="/cart">Carrito: {cart.length} producto(s)</Link>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
