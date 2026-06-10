import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Shipping Info", path: "/shipping" },
    { name: "Returns", path: "/returns" },
  ];

  const categories = [
    { name: "Electronics", path: "/shop?category=electronics" },
    { name: "Clothing", path: "/shop?category=clothing" },
    { name: "Fashion", path: "/shop?category=fashion" },
    { name: "Home & Living", path: "/shop?category=home-living" },
    { name: "Sports", path: "/shop?category=sports" },
  ];

  const socialIcons = [
    {
      icon: FaFacebook,
      href: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      color: "hover:text-blue-400",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com",
      color: "hover:text-pink-600",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-700",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com",
      color: "hover:text-red-600",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-4">
              ShopHub
            </h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for quality products at affordable
              prices. Shop with confidence and enjoy fast shipping worldwide.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FiMapPin className="text-primary-400" />
                <span className="text-gray-400">
                  123 Commerce St, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-primary-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-primary-400" />
                <span className="text-gray-400">support@shophub.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <h4 className="text-white font-semibold text-lg mb-2">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Get the latest updates on new products and upcoming sales
            </p>
            <form className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} ShopHub. All rights reserved. | Designed with
            ❤️ for modern e-commerce
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
