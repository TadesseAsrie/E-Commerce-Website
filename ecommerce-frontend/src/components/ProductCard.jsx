import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FiStar
          key={`star-${i}`}
          className="fill-yellow-400 text-yellow-400"
        />,
      );
    }
    if (hasHalfStar) {
      stars.push(<FiStar key="half-star" className="text-yellow-400" />);
    }
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FiStar key={`empty-${i}`} className="text-gray-300" />);
    }
    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transform transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          />

          {/* Badges */}
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100,
              )}
              % OFF
            </span>
          )}

          {/* Quick actions */}
          <div
            className={`absolute bottom-2 left-0 right-0 flex justify-center space-x-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={handleAddToCart}
              className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full shadow-lg transform transition hover:scale-110"
            >
              <FiShoppingCart size={20} />
            </button>
            <button
              onClick={handleWishlistToggle}
              className={`p-2 rounded-full shadow-lg transform transition hover:scale-110 ${
                isWishlisted
                  ? "bg-red-500 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white"
              }`}
            >
              <FiHeart size={20} />
            </button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-center mb-2">
            <div className="flex items-center space-x-1">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
              ({product.ratingCount})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {product.inStock ? (
              <span className="text-xs text-green-600 dark:text-green-400 font-semibold">
                In Stock
              </span>
            ) : (
              <span className="text-xs text-red-600 dark:text-red-400 font-semibold">
                Out of Stock
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
