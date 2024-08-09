
import React, { useState } from 'react'
import './Login1.css';
import '../css/component.css';
import '../css/smart-form.css';
import ramojiroup from '../assets/images/rit.png';
import RamojiImages from '../assets/images/ramoji-group.JPG';
import Feedback from '../assets/images/Feedback.png';
import { useFormik } from 'formik';
import  * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const Login1 = () => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [feedBack , setFeedBack] = useState(false);
  const  [ RememberMe , setRemember] = useState(false);

  const formik = useFormik({
    initialValues:{
    username : '',
    password : '',
    },
    validationSchema : Yup.object ({
username : Yup.string().required('Username is requried'),
password : Yup.string().required('Password is requried'),

    }),

onSubmit : (values , {setSubmitting }) =>{
  if(values.username === 'chandrakant' && values.password === 'chandrakant@123'){
    window.alert('Login successful!');
    navigate('/home');
  }else{
  window.alert('Login failed. Please check your username and password.');
  }
 setSubmitting(false);
},
})

const handleRememberMeChange =() =>{
  setRemember(!RememberMe);
}

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

const openFeedbackModal =()=>{
  setFeedBack(true);
}
const closeFeedbackModal = () => {
  setFeedBack(false);
};

const handleFeedbackSubmit =(e) =>{
  e.preventDefault();
}

  return (

    <div>
{/* Forget Password Modal */}
  { isOpen &&(
    <div className="md-modal md-effect-10" id="reset-pass">
      	<div className="modal-content">
            <div className="close-popup text-right clearfix" >
              <h5>Forget Password</h5>
              <a style={{ cursor: 'pointer' }} className="md-close"onClick={closeModal} >
                <i className="fa fa-times" aria-hidden="true" onClick={()=> {setIsOpen(false)}}></i>
              </a>
            </div>
            <div className="model-body text-center">
              <p>Contact HR Department to Reset your password..</p>
            </div>
          </div>
        </div>
  )}
   {/* Feedback Modal */}
  
   { feedBack &&(
     
     <div className="md-modal md-effect-10" id="feedback-popup">
          <div className="modal-content">
          <div className="close-popup text-right clearfix">
            <h5>Feedback</h5>
            <a
              style={{ cursor: "pointer" }}
              className="md-close"
              onClick={closeFeedbackModal}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </a>
          </div>
          <div className="feedback-model-body">
        <div className="feedback-form">
          <form className="form form-horizontal" onSubmit={handleFeedbackSubmit}>
            <div className="form-group">
              <label className="col-md-3 col-sm-12">
                <sup>*</sup>Type</label>
              <div className="col-md-9 col-sm-12">
                <select>
                  <option className="suggestion">Suggestion</option>
                  <option>Complaint</option>
                </select>
              </div>
            </div>
          
            <div className="form-group">
              <label className="col-md-3 col-sm-12"><sup>*</sup>Subject</label>
              <div className="col-md-9 col-sm-12">
                <input type="text" className="form-control" placeholder="Subject..." required />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-sm-12">Language</label>
              <div className="col-md-9 col-sm-12">
                <select>
                  <option className="suggestion">Telugu</option>
                  <option>English (F9)</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 col-sm-12">Email Id</label>
              <div className="col-md-9 col-sm-12">
                <input type="email" className="form-control" placeholder="Email Id" required />
              </div>
            </div>
            <div className="form-group textarea-req">
              <label className="col-md-3 col-sm-12"><sup>*</sup>Message</label>
              <div className="col-md-9 col-sm-12">
                <textarea row={4} placeholder="Your Message Here..." defaultValue={""} />
                <span>Minimum 50 Characters</span>
              </div>
            </div>
            <div className="imp-msg">
              <h4>If you require reply for your feedback, please mention your email id.</h4>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="form-group pull-right">
                <button className="btn btn-primary btn-submit">Submit Feedback</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
       </div> 
        )}
  <main className="d-flex login-block">
    <div className="container ">
      <div className="row ">
        <div className="col-md-8 banner-sec">
          <div className="carousel-item hidden-xs">
            <figure className="r-g-img">
              <img src={RamojiImages} alt="ramoji_group" width={190} /></figure>
          </div>
        </div>
        <div className="col-md-4 login-sec">
          <div className="section-logo text-center">
            <figure>
              <img src={ramojiroup} alt="ramoji_group" id="img-1" className="img-responsive" width={180} /></figure>
          </div>
          <h2 className="text-center">Login Now</h2>
          <form className="login-form" onSubmit={formik.handleSubmit}>
            <div className="form-group pd-5">
              <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
              <input type="text" name='username'
               className="form-control gui-input"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.username}
                              
               placeholder =" " />
               {formik . touched.username &&  formik.errors . username ?(
                <div>{formik.username.error}</div>
               ) : null}

            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
              <input type="password"
               id= "password"
               name="password"
               className="form-control gui-input"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.password}
               placeholder ='' />
               {formik.touched.password && formik.errors.password ?(
                <div>{formik.errors.password}</div>
               ): null}
                
            </div>
            <hr />
            <div className="form-check">
              <label className="form-check-label">
              <input type="checkbox"
              onChange={handleRememberMeChange}
              checked ={RememberMe}
              className="form-check-input " />
              <small style={{fontWeight: 'normal'}}>Remember Password</small>
              </label>
              <label className="form-check-label pull-right">
              <small style={{fontWeight:'normal'}}>
              
              <a  onClick={openModal} href="#" className="md-trigger" data-modal="reset-pass">Forget Password</a></small>
              </label>
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-login ">Login</button>
            </div>
          </form>
          <div className="feedback text-center">
          <a onClick={openFeedbackModal} href="#" className="md-trigger" data-modal="feedback-popup">
            <img src={Feedback} alt="feedback" className="responsive" style={{display:'inline'}} /></a>
          </div>
        </div>
        <div className="col-md-12">
        <div className="text-center mt-15">
          <p> ©  2017 All Rights Reserved, Designed &amp; Developed by <a href="#">Margadarsi Computers.</a>
          </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
  )
}

export default Login1;























































































































// import React, { useState } from "react";
// import Modal from "react-modal";
// import ramojiGroup from '../assets/images/rit.png';
// import feedback from '../assets/images/Feedback.png';
// import ramojiGroupImage from '../assets/images/ramoji-group.JPG';
// import Footer from './Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/style.css';
// import '../css/component.css';
// import '../css/smart-form.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

// function Login1() {
//   const [feedbackModalIsOpen, setFeedbackModalIsOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSubmissionPopup, setShowSubmissionPopup] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const openFeedbackModal = () => {
//     setFeedbackModalIsOpen(true);
//   };

//   const closeFeedbackModal = () => {
//     setFeedbackModalIsOpen(false);
//   };

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

//   const openSubmissionPopup = () => {
//     setShowSubmissionPopup(true);
//   };

//   const closeSubmissionPopup = () => {
//     setShowSubmissionPopup(false);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     if (username && password) {
//       openSubmissionPopup();
//     }
//   };

//   const handleFeedbackSubmit = (e) => {
//     e.preventDefault();
//     // Handle feedback form submission logic here
//   };

//   return (
//     <div>
  //     {/* Forget Password Modal */}
  // { isOpen &&(
  //   <div id="reset-pass">
  //     	<div className="md-content">
  //           <div className="close-popup text-right clearfix" >
  //             <h5>Forget Password</h5>
  //             <a style={{ cursor: 'pointer' }} className="md-close"onClick={closeModal} >
  //               <i className="fa fa-times" aria-hidden="true"></i>
  //             </a>
  //           </div>
  //           <div className="model-body text-center">
  //             <p>Contact HR Department to Reset your password..</p>
  //           </div>
  //         </div>
  //       </div>
  // )}

//       {/* Feedback Modal */}
  
//         { feedbackModalIsOpen &&(
     
//      <div class="md-modal md-effect-10" id="feedback-popup">
          
//           <div className="close-popup text-right clearfix">
//             <h5>Feedback</h5>
//             <a
//               style={{ cursor: "pointer" }}
//               className="md-close"
//               onClick={closeFeedbackModal}
//             >
//               <i className="fa fa-times" aria-hidden="true"></i>
//             </a>
//           </div>
//           <div className="feedback-model-body">
//             <div className="feedback-form">
//               <form className="form form-horizontal" onSubmit={handleFeedbackSubmit}>
//                 <div className="form-group">
//                   <label className="col-md-3 col-sm-12">
//                     <sup>*</sup>Type
//                   </label>
//                   <div className="col-md-9 col-sm-12">
//                     <select>
//                       <option className="suggestion">Suggestion</option>
//                       <option>Complaint</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label className="col-md-3 col-sm-12">
//                     <sup>*</sup>Subject
//                   </label>
//                   <div className="col-md-9 col-sm-12">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Subject..."
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-12 col-sm-12">
//                   <div className="form-group pull-right">
//                     <button type="submit" className="btn btn-primary btn-submit" onClick={openFeedbackModal}>  
//                       Submit Feedback
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         )}

//       {/* Submission Popup */}

//       {showSubmissionPopup &&(  

//         <div className="md-modal md-effect-10" id="submission-popup">
//           <div className="md-content">
//             <div className="close-popup text-right clearfix" onClick={ ()=>{setShowSubmissionPopup(false)}}>
//               <h5>Submission Successful</h5>
//               <a style={{ cursor: 'pointer' }} className="md-close" onClick={closeSubmissionPopup}>
//                 <i className="fa fa-times" aria-hidden="true"></i>
//               </a>
//             </div>
//             <div className="model-body text-center">
//               <p>Your form submission was successful!</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ---- LOGIN FORM ---- */}
//       <section className="login-block">
//         <div className="container form-container">
//           <div className="row">
//             <div className="col-md-8 banner-sec">
//               <div className="carousel slide" data-ride="carousel">
//                 <div className="carousel-inner" role="listbox">
//                   <div className="carousel-item">
//                     <figure>
//                       <img
//                         src={ramojiGroupImage}
//                         alt="ramoji group"
//                       />
//                     </figure>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 login-sec smart-forms">
//               <div className="section-logo text-center">
//                 <figure>
//                   <img src={ramojiGroup} onClick={openFeedbackModal} alt="ramoji_group" className="img-responsive" style={{ display: 'inline', cursor: 'pointer' }} />
//                 </figure>
//               </div>
//               {/* section logo */}

//               <h2 className="text-center">Login Now</h2>
//               <form className="login-form" onSubmit={handleLogin}>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputEmail1" className="text-uppercase">
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control gui-input"
//                     placeholder=""
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputPassword1" className="text-uppercase">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control gui-input"
//                     placeholder=""
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <hr />
//                 <div className="form-check">
//                   <label className="form-check-label">
//                     <input
//                       type="checkbox"
//                       className="form-check-input "
//                     />
//                     <small style={{ fontWeight: 'normal' }}>
//                       Remember Password
//                     </small>
//                   </label>

//                   <label className="form-check-label pull-right">
//                     <small style={{ fontWeight: 'normal' }}>
//                       <a href="#" className="md-trigger" data-modal="reset-pass" onClick={openModal}>
//                         Forget Password
//                       </a>
//                     </small>
//                   </label>
//                 </div>
//             <div className="form-group">
//         <  button type="submit" className="btn btn-login ">
//            Login
//          </button>
//      </div>
//     </form>
//    <div className="feedback text-center">
//    <a href="/" className="md-trigger" data-modal="feedback-popup">
//    <img
//     src={feedback}
//     alt="feedback-1"
//     className="img-responsive"
//     style={{ display: 'inline', cursor: 'pointer' }}
//     onClick={openFeedbackModal}
//   />
// </a>
// </div>
// </div>
// </div>
// </div>
// <Footer />
// </section>

// {/* overlay-popup */}
// <div className="md-overlay-index"></div>
// {/* overlay-popup */}
// </div>
// );
// }

// export default Login1;



// import React, { useState } from "react";
// import Modal from "react-modal";
// import ramojiGroup from '../assets/images/rit.png';
// import feedback from '../assets/images/Feedback.png';
// import ramojiGroupImage from '../assets/images/ramoji-group.JPG';
// import Footer from './Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/style.css';
// import '../css/component.css';
// import '../css/smart-form.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// function Login1() {
//   const [feedbackModalIsOpen, setFeedbackModalIsOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const openFeedbackModal = () => {
//     setFeedbackModalIsOpen(true);
//   };

//   const closeFeedbackModal = () => {
//     setFeedbackModalIsOpen(false);
//   };

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//   };

//   const handleFeedbackSubmit = (e) => {
//     e.preventDefault();
//     // Handle feedback form submission logic here
//   };

//   return (
//     <div>
//       {/* Forget Password Modal */}
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={closeModal}
//         className="md-content"
//       >
//         <div className="md-modal md-effect-10" id="reset-pass">
//           <div className="md-content">
//             <div className="close-popup text-right clearfix">
//               <h5>Forget Password</h5>
//               <a style={{ cursor: 'pointer' }} className="md-close" onClick={closeModal}>
//                 <i className="fa fa-times" aria-hidden="true"></i>
//               </a>
//             </div>
//             <div className="model-body text-center">
//               <p>Contact HR Department to Reset your password..</p>
//             </div>
//           </div>
//         </div>
//       </Modal>

//       {/* Feedback Modal */}
//       <Modal
//         isOpen={feedbackModalIsOpen}
//         onRequestClose={closeFeedbackModal}
//         className="modal-content"
//       >
//         <div className="md-modal md-effect-10" id="feedback-popup">
//           <div className="close-popup text-right clearfix">
//             <h5>Feedback</h5>
//             <a
//               style={{ cursor: "pointer" }}
//               className="md-close"
//               onClick={closeFeedbackModal}
//             >
//               <i className="fa fa-times" aria-hidden="true"></i>
//             </a>
//           </div>
//           <div className="feedback-model-body">
//             <div className="feedback-form">
//               <form className="form form-horizontal" onSubmit={handleFeedbackSubmit}>
//                 <div className="form-group">
//                   <label className="col-md-3 col-sm-12">
//                     <sup>*</sup>Type
//                   </label>
//                   <div className="col-md-9 col-sm-12">
//                     <select>
//                       <option className="suggestion">Suggestion</option>
//                       <option>Complaint</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label className="col-md-3 col-sm-12">
//                     <sup>*</sup>Subject
//                   </label>
//                   <div className="col-md-9 col-sm-12">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Subject..."
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Add more feedback form fields as needed */}
                
//                 <div className="col-md-12 col-sm-12">
//                   <div className="form-group pull-right">
//                     <button type="submit" className="btn btn-primary btn-submit">
//                       Submit Feedback
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </Modal>

//       {/* ---- LOGIN FORM ---- */}
//       <section className="login-block">
//         <div className="container form-container">
//           <div className="row">
//             <div className="col-md-8 banner-sec">
//               <div className="carousel slide" data-ride="carousel">
//                 <div className="carousel-inner" role="listbox">
//                   <div className="carousel-item">
//                     <figure>
//                       <img
//                         src={ramojiGroupImage}
//                         alt="ramoji group"
//                       />
//                     </figure>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 login-sec smart-forms">
//               <div className="section-logo text-center">
//                 <figure>
//                   <img src={ramojiGroup} onClick={openFeedbackModal} alt="ramoji_group" className="img-responsive" style={{ display: 'inline', cursor: 'pointer' }} />
//                 </figure>
//               </div>
//               {/* section logo */}

//               <h2 className="text-center">Login Now</h2>
//               <form className="login-form" onSubmit={handleLogin}>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputEmail1" className="text-uppercase">
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control gui-input"
//                     placeholder=""
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputPassword1" className="text-uppercase">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control gui-input"
//                     placeholder=""
//                   />
//                 </div>
//                 <hr />
//                 <div className="form-check">
//                   <label className="form-check-label">
//                     <input
//                       type="checkbox"
//                       className="form-check-input "
//                     />
//                     <small style={{ fontWeight: 'normal' }}>
//                       Remember Password
//                     </small>
//                   </label>
                //   <label className="form-check-label pull-right">
                //     <small style={{ fontWeight: 'normal' }}>
                //       <a href="#" className="md-trigger" data-modal="reset-pass" onClick={openModal}>
                //         Forget Password
                //       </a>
                //     </small>
                //   </label>
                // </div>

//                 <div className="form-group">
//                   <button type="submit" className="btn btn-login ">
//                     Login
//                   </button>
//                 </div>
//               </form>
//               <div className="feedback text-center">
//                 <a href="#" className="md-trigger" data-modal="feedback-popup">
//                   <img
//                     src={feedback}
//                     alt="feedback-1"
//                     className="img-responsive"
//                     style={{ display: 'inline', cursor: 'pointer' }}
//                     onClick={openFeedbackModal}
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </section>

//       {/* overlay-popup */}
//       <div className="md-overlay-index"></div>
//       {/* overlay-popup */}
//     </div>
//   );
// }

// export default Login1;


// using formik libary and Yup show login page and redirect home page if login is successfully.




//using useNavigate this formik libary 

// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const Login1 = () => {
//   const navigate = useNavigate(); // Get the navigate function from React Router

//   const formik = useFormik({
//     initialValues: {
//       username: '',
//       password: '',
//     },
//     validationSchema: Yup.object({
//       username: Yup.string().required('Username is required'),
//       password: Yup.string().required('Password is required'),
//     }),
//     onSubmit: (values, { setSubmitting }) => {
//       if (values.username === 'chandrakant' && values.password === 'chandrakant@123') {
//         // Successful login
//         window.alert('Login successful!');
//         navigate('/home'); // Redirect to the home page using navigate
//       } else {
//         // Failed login
//         window.alert('Login failed. Please check your username and password.');
//       }
//       setSubmitting(false);
//     },
//   });

//   return (
//     <div style={{textAlign:"center"}}>
//       <h2 >Login</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.username}
//           />
//           {formik.touched.username && formik.errors.username ? (
//             <div>{formik.errors.username}</div>
//           ) : null}
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.password}
//           />
//           {formik.touched.password && formik.errors.password ? (
//             <div>{formik.errors.password}</div>
//           ) : null}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login1;


// this is Login Page ad show woth formik and Yup Lib



// import React, { useState } from "react";
// import Modal from "react-modal";
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';

// import ramojiGroup from '../assets/images/rit.png';
// import feedback from '../assets/images/Feedback.png';
// import ramojiGroupImage from '../assets/images/ramoji-group.JPG';
// import Footer from './Footer';
// import '../css/style.css';
// import '../css/component.css';
// import '../css/smart-form.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [feedbackModalIsOpen, setFeedbackModalIsOpen] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       username: '',
//       password: '',
//     },
//     validationSchema: Yup.object({
//       username: Yup.string().required('Username is required'),
//       password: Yup.string().required('Password is required'),
//     }),
//     onSubmit: (values, { setSubmitting }) => {
//       if (values.username === 'chandrakant' && values.password === 'chandrakant@123') {
//         // Successful login
//         window.alert('Login successful!');
//         navigate('/home'); // Redirect to the home page using navigate
//       } else {
//         // Failed login
//         window.alert('Login failed. Please check your username and password.');
//       }
//       setSubmitting(false);
//     },
//   });

//   const openFeedbackModal = () => {
//     setFeedbackModalIsOpen(true);
//   };

//   const closeFeedbackModal = () => {
//     setFeedbackModalIsOpen(false);
//   };

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const handleFeedbackSubmit = (e) => {
//     e.preventDefault();
//     // Handle feedback form submission logic here
//   };

//   return (
//     <div>
//       {/* Forget Password Modal */}
//       <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal">
//         <div className="close-popup text-right clearfix">
//           <h5>Forget Password</h5>
//           <button onClick={closeModal} className="md-close">
//             <i className="fa fa-times" aria-hidden="true"></i>
//           </button>
//         </div>
//         <div className="model-body text-center">
//           <p>Contact HR Department to Reset your password..</p>
//         </div>
//       </Modal>

//       {/* Feedback Modal */}
//       <Modal isOpen={feedbackModalIsOpen} onRequestClose={closeFeedbackModal} className="modal">
//         <div className="close-popup text-right clearfix">
//           <h5>Feedback</h5>
//           <button onClick={closeFeedbackModal} className="md-close">
//             <i className="fa fa-times" aria-hidden="true"></i>
//           </button>
//         </div>
//         <hr />
//         <div className="feedback-model-body">
//           <div className="feedback-form">
//             <form className="form form-horizontal" onSubmit={handleFeedbackSubmit}>
//               <div className="form-group">
//                 <label className="col-md-3 col-sm-4">
//                   <sup>*</sup>Type
//                 </label>
//                 <div className="col-md-9 col-sm-12">
//                   <select>
//                     <option className="suggestion">Suggestion</option>
//                     <option>Complaint</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label className="col-md-3 col-sm-4">
//                   <sup>*</sup>Subject
//                 </label>
//                 <div className="col-md-9 col-sm-12">
//                   <input type="text" className="form-control" placeholder="Subject" required/>
//                 </div>
//               </div>
//               {/* Add other form fields here */}
//               <div className="col-md-12 col-sm-12">
//                 <div className="form-group pull-right">
//                   <button className="btn btn-primary btn-submit">Submit Feedback</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </Modal>

//       {/* Login Form */}
//       <section className="login-block">
//         <div className="container form-container">
//           <div className="row">
//             <div className="col-md-8 banner-sec">
//               <div className="carousel slide" data-ride="carousel">
//                 <div className="carousel-inner" role="listbox">
//                   <div className="carousel-item">
//                     <figure>
//                       <img src={ramojiGroupImage} alt="ramoji_group-pick" />
//                     </figure>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 login-sec smart-forms">
//               <div className="section-logo text-center">
//                 <figure>
//                   <img src={ramojiGroup} alt="ramoji_group" className="img-responsive" style={{ display:"inline" }} />
//                 </figure>
//               </div>

//               <h2 className="text-center">Login Now</h2>
//               <form className="login-form" onSubmit={formik.handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputEmail1" className="text-uppercase">
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     name="username"
//                     className="form-control gui-input"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.username}
//                   />
//                   {formik.touched.username && formik.errors.username ? (
//                     <div>{formik.errors.username}</div>
//                   ) : null}
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputPassword1" className="text-uppercase">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     className="form-control gui-input"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.password}
//                   />

//                   {formik.touched.password && formik.errors.password ? (
//                     <div>{formik.errors.password}</div>
//                   ) : null}
//                 </div>
//                 <hr />
//                 <div className="form-check">
//                   <label className="form-check-label">
//                     <input type="checkbox" className="form-check-input" />
//                     <small style={{ fontWeight: "normal" }}>Remember Password</small>
//                   </label>
//                   <label className="form-check-label pull-right">
//                     <small style={{ fontWeight: "normal" }}>
//                       <a href="/" onClick={openModal} className="md-trigger" data-modal="reset-pass">
//                         Forget Password
//                       </a>
//                     </small>
//                   </label>
//                 </div>
//                 <div className="form-group">
//                   <button type="submit" className="btn btn-login ">
//                     Login
//                   </button>
//                 </div>
//               </form>
//               <div className="feedback text-center">
//                 <a href="/" className="md-trigger" data-modal="feedback-popup">
//                   <img
//                     src={feedback}
//                     alt="feedback_1"
//                     onClick={openFeedbackModal}
//                     className="img-responsive"
//                     style = {{display:"inline"}} />

//                     </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <Footer />
//             </section>
//           </div>
//         );
//       };
      
//       export default Login;

// this is right code 793 start

// import React, { useState } from "react";
// import ramojiGroup from '../assets/images/rit.png';
// import feedback from '../assets/images/Feedback.png';
// import ramojiGroupImage from '../assets/images/ramoji-group.JPG';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/style.css';
// import '../css/component.css';
// import '../css/smart-form.css';
// import { Modal } from "bootstrap";

// const Login1 =() =>{

//   const [isOpen ,setIsOpen] = useState(false);
//   const [feedbackModalIsOpen , setFeedbackModalIsOpen] = useState(false);


//   const forgatePassword = () =>{
//        setIsOpen(true);
//   };
   
//   const closeModal = ()=>{
//     setIsOpen(false);
//   };

 
//   const showFeedback = () =>{
//     setFeedbackModalIsOpen(true);
// };

//    const closeFeedbackModal = ()=>{
//     setFeedbackModalIsOpen(false);
//    };



//   return(

// <div>
//   { isOpen &&(
//   <div id="reset-pass">
//     <div className="md-content clearfix">
//       <div className="close-popup text-right clearfix" >
//         <h5>Forgate password</h5>
//         <a style={{cursor: 'pointer'}} className="md-close" onClick={closeModal}>
//           <i className="fa fa-times" aria-hidden="true"  onClick={()=>{setIsFeedback(false)}} /></a>
//       </div>
//       <div className="model-body text-center">
//         <p>Contact HR Department to Reset your password..</p>
//       </div>
//     </div>
//   </div>
//   )}


//   {/* feedback popup */}
//   <Modal isOpen={feedbackModalIsOpen} onRequestClose={closeFeedbackModal} className="modal">
//    <div className="md-modal md-effect-10" id="feedback-popup">
//     <div className="md-content clearfix">
//       <div className="close-popup text-right clearfix">
//         <h5>Feedback</h5>
//         <a style={{cursor: 'pointer'}} className="md-close">
//           <i className="fa fa-times" aria-hidden="true" /></a>
//       </div>
      
    //   <div className="feedback-model-body">
    //     <div className="feedback-form">
    //       <form className="form form-horizontal">
    //         <div className="form-group">
    //           <label className="col-md-3 col-sm-12"><sup>*</sup>Type</label>
    //           <div className="col-md-9 col-sm-12">
    //             <select>
    //               <option className="suggestion">Suggestion</option>
    //               <option>Complaint</option>
    //             </select>
    //           </div>
    //         </div>
          
    //         <div className="form-group">
    //           <label className="col-md-3 col-sm-12"><sup>*</sup>Subject</label>
    //           <div className="col-md-9 col-sm-12">
    //             <input type="text" className="form-control" placeholder="Subject..." required />
    //           </div>
    //         </div>
    //         <div className="form-group">
    //           <label className="col-md-3 col-sm-12">Language</label>
    //           <div className="col-md-9 col-sm-12">
    //             <select>
    //               <option className="suggestion">Telugu</option>
    //               <option>English (F9)</option>
    //             </select>
    //           </div>
    //         </div>
    //         <div className="form-group">
    //           <label className="col-md-3 col-sm-12">Email Id</label>
    //           <div className="col-md-9 col-sm-12">
    //             <input type="email" className="form-control" placeholder="Email Id" required />
    //           </div>
    //         </div>
    //         <div className="form-group textarea-req">
    //           <label className="col-md-3 col-sm-12"><sup>*</sup>Message</label>
    //           <div className="col-md-9 col-sm-12">
    //             <textarea row={4} placeholder="Your Message Here..." defaultValue={""} />
    //             <span>Minimum 50 Characters</span>
    //           </div>
    //         </div>
    //         <div className="imp-msg">
    //           <h4>If you require reply for your feedback, please mention your email id.</h4>
    //         </div>
    //         <div className="col-md-12 col-sm-12">
    //           <div className="form-group pull-right">
    //             <button className="btn btn-primary btn-submit">Submit Feedback</button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    
//   </div>
// </Modal>

//   {/*-- LOGIN FORM --*/}
//   <section className="login-block">
//     <div className="container form-container">
//       <div className="row">
//         <div className="col-md-8 banner-sec">
//           <div className="carousel slide" data-ride="carousel">
//             <div className="carousel-inner" role="listbox">
//               <div className="carousel-item">
//                 <figure><img src={ramojiGroupImage} alt="ramoji_group" /></figure>
//               </div>
//             </div>	   
//           </div>
//         </div>
//         <div className="col-md-4 login-sec smart-forms">
//           <div className="section-logo text-center">
//             <figure><img src={ramojiGroup} alt="ramoji_group" className="img-responsive" style={{display: 'inline'}} /></figure>
//           </div>
//           {/* section logo */}
//           <h2 className="text-center">Login Now</h2>
//           <form className="login-form">
//             <div className="form-group">
//               <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
//               <input type="text" className="form-control  gui-input" placeholder />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
//               <input type="password" className="form-control gui-input" placeholder />
//             </div>
//             <hr />
//             <div className="form-check">
//               <label className="form-check-label">
//                 <input type="checkbox" className="form-check-input " />
//                 <small style={{fontWeight: 'normal'}}>Remember Password</small>
//               </label>
//               <label className="form-check-label pull-right">
//                 <small style={{fontWeight: 'normal'}}>
//                   <a  onClick={forgatePassword} href="#" className="md-trigger" data-modal="reset-pass" >Forget Password</a></small>
//               </label>
//             </div>
//             <div className="form-group">
//               <button type="submit" className="btn btn-login ">Login</button>
//             </div>
//           </form>
//           <div className="feedback text-center">
            
//             <a onClick={showFeedback}  className="md-trigger" data-modal="feedback-popup">
//               <img src={feedback} alt="feedback" className="img-responsive" style={{display:'inline'}} />
//               </a>
              
//           </div>
//         </div>
//       </div>
//     </div>
//     <footer id="footer-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 col-md-12">
//             <div className="footer-section">
//               <p>©  2017 All Rights Reserved, Designed &amp; Developed by <a href="#">Margadarsi Computers.</a></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   </section>
//   {/* overlay-popup */}
//   <div className="md-overlay-index" />
//   {/* overlay-popup */}
//   {/* Model-Popup */}
// </div>
//   )
// }
// export default Login1;
