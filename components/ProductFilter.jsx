"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import ProductCard from "@/components/product-card";

export default function ProductFilter({ products = [], categoryName, onSearch, onSort }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");

  // Early return if no products
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">
          No products available in this category.
        </p>
      </div>
    );
  }

  // Helper function to extract numeric price
  const extractPrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') return parseFloat(price.replace(/[^0-9.]/g, ''));
    return 0;
  };

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      if (!product || !product.name) return false;
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Sort products
    filtered.sort((a, b) => {
      if (!a.name || !b.name) return 0;
      
      const aPrice = extractPrice(a.price);
      const bPrice = extractPrice(b.price);

      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return aPrice - bPrice;
        case "price-desc":
          return bPrice - aPrice;
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, searchTerm, sortBy]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    onSort(value);
  };

  return (
    <div className="space-y-6">
      {/* Simple Search and Sort Bar */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-brand-red focus:border-transparent dark:text-white"
          >
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
            <option value="price-asc">Price Low-High</option>
            <option value="price-desc">Price High-Low</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found
      </p>

      {/* Products Grid */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            No products found matching "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
}