import React from "react";
import { FiShoppingCart, FiHeart, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const WishlistItem = ({ item }) => {
  const { removeFromWishlist, moveToCart } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = () => {
    moveToCart(item, addToCart);
  };

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
        {item.inStock && (
          <span className="text-xs text-green-600 dark:text-green-400 font-semibold">
            In Stock
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleMoveToCart}
          disabled={!item.inStock}
          className="flex items-center gap-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiShoppingCart size={18} />
          Move to Cart
        </button>
        <button
          onClick={() => removeFromWishlist(item.id)}
          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          aria-label="Remove from wishlist"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
