import React, { createContext, useContext, useState, useEffect } from 'react';
import { userService } from '../api/userService';

const UserContext = createContext();

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const userData = await userService.getAllUsers();
      setUsers(userData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch users');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const addUser = (newUser) => {
    const userWithId = {
      ...newUser,
      id: Math.max(...users.map(u => u.id)) + 1,
    };
    setUsers(prev => [userWithId, ...prev]);
  };

  const getUserById = (id) => {
    return users.find(user => user.id === parseInt(id));
  };

  const value = {
    users,
    loading,
    error,
    addUser,
    getUserById,
    refreshUsers: fetchUsers
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};