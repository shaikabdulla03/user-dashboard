// src/api/userService.js
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const userService = {
  // Fetch all users
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      // Replace names here
      const customNames = [
        "Shaik Abdulla",
        "Rahul Verma",
        "sai kumar",
        "Raviteja",
        "Zubair Ali",
        "supriya",
        "Omar Farooq",
        "Aisha Khan",
        "Sameer Malik",
        "ashwini"
      ];
      return response.data.map((user, index) => ({
        ...user,
        name: customNames[index] || user.name
      }));
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  // Fetch single user by ID
  getUserById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw error;
    }
  }
};
