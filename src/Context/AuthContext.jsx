import React, { useState, useEffect, createContext } from "react";
import { account } from "../Appwrite/client";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await account.get();
        setUser(userData);
      } catch (error) {
        console.log("No user logged in");
      }
    };
    checkUser();
  }, []);

  const signup = async ({ name, email, password }) => {
    try {
      const response = await account.create("unique()", email, password, name);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const signIn = async ({ email, password }) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const userData = await account.get();
      setUser(userData);
      sessionStorage.setItem("currentUser", JSON.stringify(userData.$id));
    } catch (error) {
      console.error("Signin error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      sessionStorage.removeItem("currentUser");
      setUser(null);
      toast.success("Logout successful!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };