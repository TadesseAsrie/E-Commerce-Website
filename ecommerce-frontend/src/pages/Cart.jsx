import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { FiShoppingBag, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Cart = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container-custom text-center">
          <FiShoppingBag className="text-6xl text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Looks like you haven't added any items yet
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <div className="flex justify-between items-center pt-4">
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                Clear Cart
              </button>
              <Link
                to="/shop"
                className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
              >
                Continue Shopping <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-fit"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 border-b border-gray-200 dark:border-gray-700 pb-4">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">
                  Subtotal
                </span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">
                  Shipping
                </span>
                <span className="font-semibold">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">
                  Estimated Tax
                </span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between py-4 text-lg font-bold">
              <span>Total</span>
              <span className="text-primary-600">${total.toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              className="btn-primary w-full text-center block"
            >
              Proceed to Checkout
            </Link>

            <p className="text-xs text-gray-500 text-center mt-4">
              Shipping & taxes calculated at checkout
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
