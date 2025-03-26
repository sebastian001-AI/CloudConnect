import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import JobListing from './pages/JobListing';
import About from './pages/About';
import SignInForm from './pages/SignInForm';
import SignupForm from './pages/SignupForm';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './Context/AuthContext';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/jobs" element={<JobListing />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;