//this page Regarding Contact Modal page 

import React, { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root'); 

const Contact = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email1: '',
    email2: '',
    mobile1: '',
    mobile2: '',
    landline1: '',
    extn1: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access form data in the formData object
    console.log('Form Data:', formData);
    onClose(); // Close the modal after submission
  };

  return (
    
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="md-modal md-effect-10 update-close"
    >
      <button>click</button>
      <div className="md-content">
        <div className="close-popup clearfix">
          <h5>Update Contact Details</h5>
          <button className="md-close" onClick={onClose}>
            <i className="fa fa-times" aria-hidden="true" />
          Click</button>
        </div>
        <div className="update-profile-model">
          <form className="form form-horizontal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Email - 1 :</label>
              <div className="col-md-8 col-sm-8">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-google-plus" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="email1"
                    value={formData.email1}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Email - 2 :</label>
              <div className="col-md-8 col-sm-8">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-google-plus" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="email2"
                    value={formData.email2}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* Add the rest of your form fields here */}
            <hr />
            <div className="form-group">
              <div className="col-md-12 col-sm-12">
                <div className="form-navigate">
                  <ul>
                    <li>
                      <button type="submit" className="btn btn-update">
                        Update
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-reset">Clear</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
    
  );
};

export default Contact;
