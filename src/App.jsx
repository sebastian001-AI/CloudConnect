import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import JobListing from './pages/JobListing';
import About from './pages/About';
import SignInForm from './pages/SignInForm';
import SignupForm from './pages/SignupForm';
import { ToastContainer } from 'react-toastify';
import { AuthProvider, AuthContext } from './Context/AuthContext';
import Error from './pages/Error';
// PrivateRoute Component
const PrivateRoute = ({ children }) => {
  const { user } = React.useContext(AuthContext);
  return user ? children : <Navigate to="/signin" />;
};

const App = () => {
  return (
    <Router>
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
          <Route path="*" element={<Error />} />

        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;