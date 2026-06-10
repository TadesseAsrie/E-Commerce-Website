import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, isLoading]);

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const exists = prevItems.some((item) => item.id === product.id);
      if (!exists) {
        toast.success(`Added ${product.name} to wishlist`);
        return [...prevItems, product];
      }
      toast.info(`${product.name} is already in wishlist`);
      return prevItems;
    });
  };

  const removeFromWishlist = (productId) => {
    const product = wishlistItems.find((item) => item.id === productId);
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
    toast.info(`Removed ${product?.name} from wishlist`);
  };

  const moveToCart = (product, cartAddFunction) => {
    cartAddFunction(product, 1);
    removeFromWishlist(product.id);
    toast.success(`Moved ${product.name} to cart`);
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    moveToCart,
    isInWishlist,
    getWishlistCount,
    isLoading,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
