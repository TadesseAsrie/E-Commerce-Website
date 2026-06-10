import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { FiFilter, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Filter states
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all",
  );
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [sortBy, setSortBy] = useState("default");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const categories = [
    "all",
    "Electronics",
    "Clothing",
    "Fashion",
    "Home & Living",
    "Sports",
  ];

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      let filtered = [...products];

      // Apply search filter
      if (searchQuery) {
        filtered = filtered.filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      }

      // Apply category filter
      if (selectedCategory !== "all") {
        filtered = filtered.filter((p) => p.category === selectedCategory);
      }

      // Apply price filter
      filtered = filtered.filter(
        (p) => p.price >= priceRange.min && p.price <= priceRange.max,
      );

      // Apply sorting
      switch (sortBy) {
        case "price-asc":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "newest":
          filtered.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          );
          break;
        case "popularity":
          filtered.sort((a, b) => b.popularity - a.popularity);
          break;
        default:
          break;
      }

      setFilteredProducts(filtered);
      setCurrentPage(1);
      setIsLoading(false);
    }, 500);
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  // Sync URL params
  useEffect(() => {
    const params = {};
    if (searchQuery) params.search = searchQuery;
    if (selectedCategory !== "all") params.category = selectedCategory;
    setSearchParams(params);
  }, [searchQuery, selectedCategory, setSearchParams]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setPriceRange({ min: 0, max: 500 });
    setSortBy("default");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container-custom py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Shop Collection
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our curated collection of premium products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center justify-center gap-2 btn-primary mb-4"
          >
            <FiFilter /> Filters
          </button>

          {/* Sidebar Filters */}
          <AnimatePresence>
            {(isFilterOpen || window.innerWidth >= 1024) && (
              <motion.aside
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                className={`lg:block lg:w-80 flex-shrink-0 ${isFilterOpen ? "fixed inset-0 z-50 bg-white dark:bg-gray-800 p-6 overflow-y-auto" : "hidden"}`}
              >
                {isFilterOpen && (
                  <div className="flex justify-between items-center mb-6 lg:hidden">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="p-2"
                    >
                      <FiX size={24} />
                    </button>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Search
                    </h3>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="input-field"
                    />
                  </div>

                  {/* Category Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label
                          key={category}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={(e) =>
                              setSelectedCategory(e.target.value)
                            }
                            className="text-primary-600 focus:ring-primary-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300 capitalize">
                            {category === "all" ? "All Categories" : category}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Price Range
                    </h3>
                    <div className="space-y-3">
                      <div className="flex gap-4">
                        <input
                          type="number"
                          value={priceRange.min}
                          onChange={(e) =>
                            setPriceRange({
                              ...priceRange,
                              min: Number(e.target.value),
                            })
                          }
                          placeholder="Min"
                          className="input-field"
                        />
                        <input
                          type="number"
                          value={priceRange.max}
                          onChange={(e) =>
                            setPriceRange({
                              ...priceRange,
                              max: Number(e.target.value),
                            })
                          }
                          placeholder="Max"
                          className="input-field"
                        />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange({
                            ...priceRange,
                            max: Number(e.target.value),
                          })
                        }
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Sort By */}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Sort By
                    </h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="input-field"
                    >
                      <option value="default">Default</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="newest">Newest First</option>
                      <option value="popularity">Most Popular</option>
                    </select>
                  </div>

                  {/* Clear Filters */}
                  <button
                    onClick={clearFilters}
                    className="btn-secondary w-full"
                  >
                    Clear All Filters
                  </button>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Info */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600 dark:text-gray-300">
                Showing {currentProducts.length} of {filteredProducts.length}{" "}
                products
              </p>
            </div>

            {/* Loading State */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md animate-pulse"
                  >
                    <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-t-xl" />
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
                      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : currentProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No products found.
                </p>
                <button onClick={clearFilters} className="btn-primary mt-4">
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-8">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <FiChevronLeft />
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`px-3 py-1 rounded-lg transition-colors ${
                          currentPage === i + 1
                            ? "bg-primary-600 text-white"
                            : "border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <FiChevronRight />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
