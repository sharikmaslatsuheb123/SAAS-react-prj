// import React, { useState } from 'react';
// import { signupUser } from '../Services/userService'; // Import the signup service
// import { useNavigate } from 'react-router-dom';
// import '../Pages/./commonStyle.css';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: '', // Updated from 'name' to 'username'
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     const newUser = {
//       username: formData.username, // Updated from 'name' to 'username'
//       email: formData.email,
//       password: formData.password,
//     };
//     try {
//       await signupUser(newUser);  // Signup user
//       navigate('/signin');  // Redirect to sign-in page on success
//     } catch (err) {
//       alert('Error signing up');
//     }
//   };

//   return (
//     <div className='background-container'>
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-md-4">
//             <div className="card">
//               <div className="card-header text-center">
//                 <h3>Sign Up</h3>
//               </div>
//               <div className="card-body">
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="username" className="form-label">Username</label> {/* Changed to 'Username' */}
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="username" // Changed to 'username'
//                       name="username" // Changed to 'username'
//                       value={formData.username} // Changed to 'username'
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       value={formData.confirmPassword}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <button type="submit" className="btn btn-primary w-100">Sign Up</button>
//                 </form>
//               </div>
//               <div className="card-footer text-center">
//                 <small>Already have an account? <a href="/signin">Sign In</a></small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from 'react';
import { signupUser } from '../Services/userService'; // Import the signup service
import { useNavigate } from 'react-router-dom';
import '../Pages/./commonStyle.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '', // Updated from 'name' to 'username'
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const newUser = {
      username: formData.username, // Updated from 'name' to 'username'
      email: formData.email,
      password: formData.password,
    };
    try {
      await signupUser(newUser);  // Signup user
      setSuccessMessage('Signup successful! Redirecting to sign-in page...'); // Show success message
      setTimeout(() => {
        navigate('/signin');  // Redirect to sign-in page after 2 seconds
      }, 2000);
    } catch (err) {
      alert('Error signing up');
    }
  };

  return (
    <div className='background-container'>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header text-center">
                <h3>Sign Up</h3>
              </div>
              <div className="card-body">
                {successMessage && ( // Conditionally display success message
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                </form>
              </div>
              <div className="card-footer text-center">
                <small>Already have an account? <a href="/signin">Sign In</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
