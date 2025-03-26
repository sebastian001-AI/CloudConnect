import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import JobListing from './pages/JobListing';
import About from './pages/About';
import SignInForm from './pages/SignInForm';
import SignupForm from './pages/SignupForm';
import { ToastContainer } from 'react-toastify';
import { AuthProvider, AuthContext } from './Context/AuthContext';

// PrivateRoute Component
const PrivateRoute = ({ children }) => {
  const { user } = React.useContext(AuthContext);
  return user ? children : <Navigate to="/signin" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/jobs"
              element={
                <PrivateRoute>
                  <JobListing />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;