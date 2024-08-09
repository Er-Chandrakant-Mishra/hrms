// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Modal from "react-modal";
import ramojiGroup from '../assets/images/rit.png';
import feedback from '../assets/images/Feedback.png';
import ramojiGroupImage from '../assets/images/ramoji-group.JPG';
import Footer from './Footer';
import '../css/style.css';
import '../css/component.css';
import '../css/smart-form.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); 
  const [isOpen ,setIsOpen] = useState(false); 
  const [feedbackModalIsOpen, setFeedbackModalIsOpen] = useState(false);
  const [rememberMe , setRememberMe] = useState(false);
  

   const formik = useFormik({
   initialValues:{
    username:'',
    password : '',

   },
    validationSchema : Yup.object ({
    username:Yup.string().required('Username is required'),
    password: Yup.string().required( 'Password is requried'),
  }),

  onSubmit: (values, { setSubmitting }) => {
    if (values.username === 'chandrakant' && values.password === 'chandrakant@123') {
      // Successful login
      window.alert('Login successful!');
      navigate('/home'); // Redirect to the home page using navigate
    } else {
      // Failed login
      window.alert('Login failed. Please check your username and password.');
    }
    setSubmitting(false);
  },

})

const handleRememberMeChange = () =>{

setRememberMe(!rememberMe);

};

  const openFeedbackModal = () => {
    setFeedbackModalIsOpen(true);
  };

  const closeFeedbackModal = () => {
    setFeedbackModalIsOpen(false);
  };


  const forgatePassword = () =>{
    setIsOpen(true);
};

const closeModal = ()=>{
 setIsOpen(false);
};

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
      
  }

  return (
    <div>
{/* Forget Password Modal */}
 { isOpen &&(

  <div id="reset-pass">
    <div className="md-content clearfix">
      <div className="close-popup text-right clearfix" >
        <h5>Forgate password</h5>
        <a style={{cursor: 'pointer'}} className="md-close" onClick={closeModal}>
          <i className="fa fa-times" aria-hidden="true"  onClick={()=>{setIsOpen(false)}} /></a>
      </div>
      <div className="model-body text-center">
        <p>Contact HR Department to Reset your password..</p>
      </div>
    </div>
  </div>
  )}

      {/* Feedback Modal */}
      <Modal
        isOpen={feedbackModalIsOpen}
        onRequestClose={closeFeedbackModal}
        className="modal-content"
      >
       <div className="md-modal md-effect-10" id="feedback-popup">
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
          <hr/>
        </div>
        <div className="feedback-model-body">
          <div className="feedback-form">
            <form className="form form-horizontal" onSubmit={handleFeedbackSubmit}>
              <div className="form-group">
                <label className="col-md-3 col-sm-4">
                  <sup>*</sup>Type
                </label>
                <div className="col-md-9 col-sm-12">
                  <select>
                    <option className="suggestion">Suggestion</option>
                    <option>Complaint</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 col-sm-4">
                  <sup>*</sup>Subject
                </label>
                <div className="col-md-9 col-sm-12">
                  
                <input type="text" className="form-control" placeholder="Subject" required/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 col-sm-4">
                  <sup>*</sup>Language
                </label>
                <div className="col-md-9 col-sm-12">
                  <select>
                    <option className="suggestion">Telugu</option>
                    <option>English(F9)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 col-sm-4">
                Email Id
                </label>
                <div className="col-md-9 col-sm-12">
                  <input type="email" className="form-control" placeholder="EmailId" required/>
                </div>
              </div>
              <div classname="form-group textarea-req">
								<label classname="col-md-3 col-sm-12"><sup>*</sup>Message</label>
								<div classname="col-md-9 col-sm-12">
									<textarea row="4" placeholder="Your Message Here..."></textarea>
									<span>Minimum 50 Characters</span>
								</div>
							</div>




              <div className="imp-msg">
                <h4>If you require a reply for your feedback, please mention your email id.</h4>
              </div>

              <div className="col-md-12 col-sm-12">
                <div className="form-group pull-right">
                  <button className="btn btn-primary btn-submit">Submit Feedback</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      {/* Login Form */}
      <section className="login-block">
        <div className="container form-container">
          <div className="row">
            <div className="col-md-8 banner-sec">
              <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item">
                    <figure>
                      <img src={ramojiGroupImage} alt="ramoji_group-pick" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 login-sec smart-forms">
              <div className="section-logo text-center">
                <figure >
                  <img src={ramojiGroup} alt="ramoji_group"  className="img-responsive " style={{ display:"inline" }} />
                </figure>
              </div>

              <h2 className="text-center">Login Now</h2>
              <form className="login-form" onSubmit = {formik.handleSubmit} >
                <div className="form-group"   >
                  <label htmlFor="exampleInputEmail1" className="text-uppercase">
                    Username
                  </label>
                  <input type="text" 
                   name= "username" 
                   className="form-control gui-input"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.username}
                    />
                 {formik.touched.username && formik.errors.username ? (
                 <div>{formik.errors.username}</div>
                 ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="text-uppercase">
                    Password
                  </label>
                  <input type="password" 
                  id="password"
                  name="password" 
                  className="form-control gui-input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}/>

                {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
                 ) : null}      
                   </div>
                <hr />
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" onChange={handleRememberMeChange} checked={rememberMe} className="form-check-input" />
                    <small style={{ fontWeight: "normal" }}>Remember Password</small>
                  </label>
                  <label className="form-check-label pull-right">
                    <small style={{ fontWeight: "normal" }}>
                      <a href="/" onClick={ forgatePassword } className="md-trigger" data-modal="reset-pass">
                        Forget Password
                      </a>
                    </small>
                  </label>
                </div>
                <div class="form-group">
  	             <button type="submit" class="btn btn-login ">Login</button>
              </div>
              </form>
              <div className="feedback text-center">
                <a href="/" className="md-trigger" data-modal="feedback-popup">
                  <img src={feedback} alt="feedback_1"onClick={openFeedbackModal} className="img-responsive" style={{ display: "inline" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Login;




// Second LoginPage  withought formik only using jsx

// //import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from "react";
// import Modal from "react-modal";
// import ramojiGroup from '../assets/images/rit.png';
// import feedback from '../assets/images/Feedback.png';
// import ramojiGroupImage from '../assets/images/ramoji-group.JPG';
// import Footer from './Footer';
// import '../css/style.css';
//  import '../css/component.css';
//  import '../css/smart-form.css';
// //import { formControlClasses } from "@mui/material";
// //  import 'bootstrap/dist/js/bootstrap.min.js';

// const Login = () => {
// const [isOpen, setIsOpen] = useState(false);
// const [feedbackModalIsOpen, setFeedbackModalIsOpen] = useState(false);
// const [formData ,setFormData] = useState({
//        username : '',
//        password : '',
// });

// const [errors, setErrors] = useState ({
//   username: '',
//   password : '',

// });

// const handleInputChange = (e) =>{
//   const {name , value } = e.target;
//   setFormData ({...formData,[name] :value});
// }

// const handleSubmit = (e) =>{
//   if(formData.username === "chandrakant" && formData.password ==="chandrakant@123"){
//     alert (' Login succesful!');
   

//   }else{
//    setErrors ({
//           username :'Invalid userName',
//           password : 'Invalid Password',
//    });

//   let formIsValid = true;
//   const newErrors = {};

//   if(formData.username ===''){
//     newErrors.username ='UserName is requried';
//     formIsValid = false;

//   }
//   if (formData.password ===''){
//     newErrors.password='Password is requried';
//     formIsValid = false;
//   }
//   if (!formIsValid){
//     setErrors(newErrors);
//     return;
//   }

//   }
// }


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
      
//   }

//   return (
//     <div>
//       <div>
//       {isOpen && (
//         <div class="md-modal md-effect-10" id="reset-pass">
//           <div className="modal-content">
//             <div className="close-popup text-right clearfix">
//               <h5>Forget Password</h5>
//               <a href="/" style={{ cursor: "pointer" }} className="md-close" onClick={closeModal}>
//                 <i className="fa fa-times" aria-hidden="true"></i>
//               </a>
//             </div>
//             <div className="model-body text-center">
//               <p>Contact HR Department to Reset your password..</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>

//       {/* Feedback Modal */}
//       <Modal
//         isOpen={feedbackModalIsOpen}
//         onRequestClose={closeFeedbackModal}
//         className="modal-content"
//       >
//        <div className="md-modal md-effect-10" id="feedback-popup">
//        <div className="close-popup text-right clearfix">
//           <h5>Feedback</h5>
         
//           <a 
//               style={{ cursor: "pointer" }}
//              className="md-close"
//              onClick={closeFeedbackModal}
//           >
//             <i className="fa fa-times" aria-hidden="true"></i>
//           </a>
//           </div>
//           <hr/>
//         </div>
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
                  
//                 <input type="text" className="form-control" placeholder="Subject" required/>
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label className="col-md-3 col-sm-4">
//                   <sup>*</sup>Language
//                 </label>
//                 <div className="col-md-9 col-sm-12">
//                   <select>
//                     <option className="suggestion">Telugu</option>
//                     <option>English(F9)</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label className="col-md-3 col-sm-4">
//                 Email Id
//                 </label>
//                 <div className="col-md-9 col-sm-12">
//                   <input type="email" className="form-control" placeholder="EmailId" required/>
//                 </div>
//               </div>
//               <div classname="form-group textarea-req">
// 								<label classname="col-md-3 col-sm-12"><sup>*</sup>Message</label>
// 								<div classname="col-md-9 col-sm-12">
// 									<textarea row="4" placeholder="Your Message Here..."></textarea>
// 									<span>Minimum 50 Characters</span>
// 								</div>
// 							</div>




//               <div className="imp-msg">
//                 <h4>If you require a reply for your feedback, please mention your email id.</h4>
//               </div>

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
//               <form className="login-form" onSubmit = {handleSubmit} >
//                 <div className="form-group"   >
//                   <label htmlFor="exampleInputEmail1" className="text-uppercase">
//                     Username
//                   </label>
//                   <input type="text"  name= "username" className="form-control gui-input" value={formData.username} placeholder="" onChange ={handleInputChange} />
//                   <p className="error">{errors.username}</p>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputPassword1" className="text-uppercase">
//                     Password
//                   </label>
//                   <input type="password" name="password" className="form-control gui-input" value={formData.password} placeholder="" onChange={handleInputChange}/>
//                   <p className="errors">{errors.password}</p>               
//                    </div>
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
//                 <div class="form-group">
//   	             <button type="submit" class="btn btn-login ">Login</button>
//               </div>
//               </form>
//               <div className="feedback text-center">
//                 <a href="/" className="md-trigger" data-modal="feedback-popup">
//                   <img src={feedback} alt="feedback_1"onClick={openFeedbackModal}    className="img-responsive" style={{ display: "inline" }} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </section>
//     </div>
//   );
// };

// export default Login;





