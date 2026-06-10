import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import WishlistItem from "../components/WishlistItem";
import { FiHeart } from "react-icons/fi";

const Wishlist = () => {
  const { wishlistItems } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container-custom text-center">
          <FiHeart className="text-6xl text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Save your favorite items here
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          My Wishlist ({wishlistItems.length})
        </h1>

        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
