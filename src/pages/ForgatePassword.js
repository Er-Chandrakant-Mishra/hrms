import React, { useState } from 'react';

const ForgetPassword = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
  
      <div>
         <button onClick={openModal}>Click</button>
        {isOpen && (
          <div className="modal-overlay ms-4">
            <div className="modal-content">
              <div className="close-popup text-right clearfix">
                <h5>Forget Password</h5>
                <a style={{ cursor: "pointer" }} className="md-close" onClick={closeModal}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </a>
                {/* {isLoggedIn && !changePassword ? (
                <div className="warning-message">
                  <p>
                    You need to change your password to access the manager's section.
                    <button className="btn btn-warning" onClick={handleChangePassword}>
                      Change Password
                    </button>
                  </p>
                </div>
              ) : null} */}
              </div>
              <div className="model-body text-center sm-4 mt-3">
                <p>Contact HR Department to Reset your password..</p>
               
              </div>
            </div>
          </div>
        )}
      </div>

  );
};

export default ForgetPassword;

