import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const UserCard = ({ user }) => {
  return (
    <motion.div
      className="backdrop-blur-md bg-white/30 rounded-xl shadow-md p-6 border border-white/40 hover:shadow-2xl transition-all cursor-pointer"
      whileHover={{ scale: 1.05 }}   // ✅ only scale, no rotate
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Avatar + Name */}
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-600">@{user.username}</p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 mb-5">
        <div className="flex items-center text-sm text-gray-700">
          <svg
            className="w-4 h-4 mr-2 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {user.email}
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <svg
            className="w-4 h-4 mr-2 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          {user.phone}
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <svg
            className="w-4 h-4 mr-2 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          {user.company.name}
        </div>
      </div>

      {/* Button */}
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          to={`/user/${user.id}`}
          className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 font-medium shadow-md"
        >
          View Details
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default UserCard;
