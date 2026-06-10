import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiEye, FiAward, FiUsers } from "react-icons/fi";

const About = () => {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Operations",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mike Chen",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Emma Wilson",
      role: "Customer Support",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About ShopHub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90 max-w-2xl mx-auto"
          >
            Your trusted partner in online shopping since 2020
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center"
          >
            <FiTarget className="text-4xl text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              To provide high-quality products at affordable prices while
              delivering exceptional customer service and a seamless shopping
              experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center"
          >
            <FiEye className="text-4xl text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              To become the world's most customer-centric e-commerce platform,
              empowering people to discover and shop with confidence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary-50 dark:bg-gray-800 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600">
                50K+
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">
                Happy Customers
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600">
                10K+
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">
                Products Sold
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600">
                4.8★
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">
                Customer Rating
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate professionals dedicated to your shopping experience
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FiAward className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every product is carefully vetted for quality
              </p>
            </div>
            <div className="text-center">
              <FiUsers className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your satisfaction is our top priority
              </p>
            </div>
            <div className="text-center">
              <FiTarget className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quick and reliable delivery worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
