import React from "react";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <Link to={`/product/${item.id}`} className="w-24 h-24 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>

      <div className="flex-1">
        <Link to={`/product/${item.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {item.name}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-400">
          ${item.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Decrease quantity"
        >
          <FiMinus size={16} />
        </button>
        <span className="w-12 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Increase quantity"
        >
          <FiPlus size={16} />
        </button>
      </div>

      <div className="text-right min-w-[100px]">
        <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700 transition-colors p-2"
        aria-label="Remove item"
      >
        <FiTrash2 size={20} />
      </button>
    </div>
  );
};

export default CartItem;
