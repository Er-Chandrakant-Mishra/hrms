import React, { useState } from 'react';

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access form data using e.target.elements
    const formData = new FormData(e.target);
    // Perform your form submission logic here, e.g., send data to an API
    // For demonstration purposes, let's log the form data
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    closeModal(); // Close the modal after submission
  };

  return (
    <div>

      <button onClick={openModal}>Open Feedback Modal</button>
      
      {isOpen && (
        <div className="md-modal md-effect-10" id="feedback-popup">
          {/* Modal content */}
          <div className="md-content clearfix">
            <div className="close-popup text-right clearfix">
              <h5>Feedback</h5>
              <a
                style={{ cursor: 'pointer' }}
                className="md-close"
                onClick={closeModal}
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </a>
            </div>
            <div className="feedback-model-body">
              <div className="feedback-form">
                <form className="form form-horizontal" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="col-md-3 col-sm-12">
                      <sup>*</sup>Type
                    </label>
                    <div className="col-md-9 col-sm-12">
                      <select name="feedbackType">
                        <option value="suggestion">Suggestion</option>
                        <option value="complaint">Complaint</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 col-sm-12">
                      <sup>*</sup>Subject
                    </label>
                    <div className="col-md-9 col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject..."
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 col-sm-12">Language</label>
                    <div className="col-md-9 col-sm-12">
                      <select name="language">
                        <option value="telugu">Telugu</option>
                        <option value="english">English (F9)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 col-sm-12">Email Id</label>
                    <div className="col-md-9 col-sm-12">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Id"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group textarea-req">
                    <label className="col-md-3 col-sm-12">
                      <sup>*</sup>Message
                    </label>
                    <div className="col-md-9 col-sm-12">
                      <textarea
                        rows="4"
                        name="message"
                        placeholder="Your Message Here..."
                        required
                      ></textarea>
                      <span>Minimum 50 Characters</span>
                    </div>
                  </div>

                  <div className="imp-msg">
                    <h4>
                      If you require a reply for your feedback, please mention
                      your email id.
                    </h4>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <div className="form-group pull-right">
                      <button type="submit" className="btn btn-primary btn-submit">
                        Submit Feedback
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
