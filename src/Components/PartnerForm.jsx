// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import bgabout from '../assets/bgabout.png';
// import { sendMagicLink } from '../Components/Services/emailService';

// const PartnerForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     company: '',
//     roles: '',
//   });
//   const [error, setError] = useState('');
//   const [successModal, setSuccessModal] = useState(false);
//   const [failureModal, setFailureModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [redirectUrl, setRedirectUrl] = useState('http://localhost:5173/jobs'); // Replace with your actual URL

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formData.email.trim()) {
//       setError('Email is required.');
//       setFailureModal(true);
//       return;
//     }
//     if (!validateEmail(formData.email)) {
//       setError('Invalid email address.');
//       setFailureModal(true);
//       return;
//     }
//     if (!formData.firstName.trim()) {
//       setError('First Name is required.');
//       setFailureModal(true);
//       return;
//     }
//     if (!formData.lastName.trim()) {
//       setError('Last Name is required.');
//       setFailureModal(true);
//       return;
//     }
//     if (!formData.company.trim()) {
//       setError('Company is required.');
//       setFailureModal(true);
//       return;
//     }
//     if (!formData.roles.trim()) {
//       setError('Please select the number of roles.');
//       setFailureModal(true);
//       return;
//     }

//     setLoading(true);
//     try {
//       await sendMagicLink({ email: formData.email, redirectUrl });
//       console.log(`✅ Email sent to ${formData.email}`);
//       setSuccessModal(true);
//       setFormData({ email: '', firstName: '', lastName: '', company: '', roles: '' });
//     } catch (error) {
//       console.error('❌ Failed to send email:', error);
//       setError(error.message || 'Failed to send email. Try again.');
//       setFailureModal(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (successModal) {
//       const timer = setTimeout(() => setSuccessModal(false), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [successModal]);

//   return (
//     <section className="relative bg-[#101c4b5d] py-16 px-4 md:px-20 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 opacity-10">
//         <img src={bgabout} alt="Decorative background" className="w-full h-full object-cover" aria-hidden="true" />
//       </div>
//       <div className="absolute inset-0 bg-[#b2bdd849] bg-opacity-70"></div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative max-w-4xl mx-auto text-center z-10"
//       >
//         <p className="text-black font-semibold text-lg">Great Companies Need Great People</p>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a23] mt-2">
//           Partner with <span className="text-[#0a0a23]">CloudConnect</span><span className="text-green-500">.</span>
//         </h2>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 mt-12 space-y-6">
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Work Email *"
//             className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             placeholder="First Name *"
//             className="w-full border border-gray-300 rounded-md p-4"
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             placeholder="Last Name *"
//             className="w-full border border-gray-300 rounded-md p-4"
//             required
//           />
//           <input
//             type="text"
//             name="company"
//             value={formData.company}
//             onChange={handleChange}
//             placeholder="Company *"
//             className="w-full border border-gray-300 rounded-md p-4"
//             required
//           />
//           <select
//             name="roles"
//             value={formData.roles}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md p-4"
//             required
//           >
//             <option value="" disabled>
//               Select the number of roles
//             </option>
//             <option>1-5 Roles</option>
//             <option>6-10 Roles</option>
//             <option>11+ Roles</option>
//           </select>

//           <p className="text-sm text-blue-800 font-medium">
//             How many US based tech roles do you plan on hiring in the next 12 months? *
//           </p>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full ${loading ? 'bg-blue-400' : 'bg-blue-700 hover:bg-blue-800'} text-white font-semibold py-4 rounded-md transition duration-300 flex items-center justify-center`}
//           >
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>

//           {error && <p className="text-red-500 mt-4">{error}</p>}
//         </form>
//       </motion.div>

//       {/* Success Modal */}
//       {successModal && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//         >
//           <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//             <h3 className="text-2xl font-bold text-green-600">Submission Successful ✅</h3>
//             <p className="mt-4">Welcome to CloudConnect! Check your email 📩</p>
//             <button onClick={() => setSuccessModal(false)} className="mt-6 bg-green-600 text-white py-2 px-4 rounded">Close</button>
//           </div>
//         </motion.div>
//       )}

//       {/* Failure Modal */}
//       {failureModal && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//         >
//           <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//             <h3 className="text-2xl font-bold text-red-600">Submission Failed ❌</h3>
//             <p className="mt-4">{error || 'Please enter a valid email address.'}</p>
//             <button onClick={() => setFailureModal(false)} className="mt-6 bg-red-600 text-white py-2 px-4 rounded">Close</button>
//           </div>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default PartnerForm;