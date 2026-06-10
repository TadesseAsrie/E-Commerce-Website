import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategoryCard = ({ category, image, count }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/shop?category=${category.toLowerCase()}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={category}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-xl font-bold">{category}</h3>
            <p className="text-gray-200 text-sm">{count} Products</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
