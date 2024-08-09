import React, { useState } from 'react';
import Footer from '../pages/Footer';
import '../css/custome.css';
import Header from '../pages/Header';
import Sidebar from '../pages/Sidebar';

const PendingApprovals = () => {
 const [isCalendarVisible , setIsCalendarVisible ]= useState(false);
  const [contentShow, setContentShow] = useState("true");
 
  const toggleCalender = () =>{
    setIsCalendarVisible(!isCalendarVisible);
   }

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <section className="content">
          {/* Info boxes */}
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="quick-links">
                <ul>
                  <li>
                    <div className="inner-quick-links">
                      <a onClick={toggleCalender} href="/" className="aply-lve">
                        <i className="fa fa-calendar" aria-hidden="true" /> Apply Leave</a>
                    </div>
                  </li>
                  <li>
                    <div className="inner-quick-links">
                      <a href="/" className="updt-profile">
                        <i className="fa fa-user" aria-hidden="true" /> Update Profile</a>
                    </div>
                  </li>
                  <li>
                    <div className="inner-quick-links">
                      <a href="/" className="cnten-rchg">
                        <i className="fa fa-mobile" aria-hidden="true" /> Canteen Recharge</a>
                    </div>
                  </li>
                  <li>
                    <div className="inner-quick-links">
                      <a href="/" className="quotes"><i className="fa fa-pencil" aria-hidden="true" /> Quotes</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /.row */}
          <Sidebar />
          <div className="row">
            <div className="col-md-12">
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Pending Applications</h3>
                  <div className="box-tools pull-right">
                    <a
                      className="btn btn-box-tool"
                      onClick={() => setContentShow(!contentShow)}>
                      {contentShow ? (<i className="fa fa-minus" />) : (<i className="fa fa-plus" />)}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="box-body application-status">
                    {contentShow ? (
                      <div className="col-md-12 col-sm-12">
                        <div className="col-md-3 col-sm-12">
                          <div className="apprval-status">
                            <div className="form-group">
                              <div className="input-group">
                                <div className="input-group-addon">
                                  <i onClick={toggleCalender} className="fa fa-calendar" />
                                
                                  <div>

                                  </div>
                                </div>
                                <input type="text" className="form-control pull-right" id="reservation" />
                              </div>
                              <div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                          <div className="apprval-status dropdown notifications-menu">
                            <button type="button" className="btn btn-tw waves-effect waves-light dropdown-toggle" data-toggle="dropdown" data-placement="top" title data-original-title="Pending Applications">
                              <i className="fa fa-bell" aria-hidden="true" /> Pending Application Status <i className="fa fa-angle-down" aria-hidden="true" />
                            </button>
                            <span className="counter">22</span>
                            <div className="dropdown-menu">
                              <ul className="menu">
                                <li>
                                  <div className="pending-counter">
                                    <a href="/">Pending Applications</a>
                                    <span className="smase-counter">22</span>
                                  </div>{/* pending-counter */}
                                </li>
                                <li><a href="/">Accepted Applications</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                          <div className="company-filter">
                            <select className="form-control">
                              <option value="selected">Select Company</option>
                              <option>Margadarsi Computers</option>
                              <option>Eenadu</option>
                              <option>Usha kiron movies</option>
                              <option>Dolphin Hotels</option>
                              <option>Etv</option>
                              <option>Ramoji Tourism Gateway</option>
                            </select>
                          </div>
                        </div>{/* col*/}
                        <div className="col-md-3 col-sm-12">
                          <div className="category-filter">
                            <select className="form-control">
                              <option>Select Application</option>
                              <option>Leave Application</option>
                              <option>Shift Change</option>
                              <option>On Duty</option>
                              <option>On Tour</option>
                              <option>Authorisation</option>
                              <option>Attendance Rectification</option>
                            </select>
                          </div>
                        </div>
                        {/* col*/}
                        <table className="table table-hover table-bordered">
                          <thead>
                            <tr>
                              <th>Sl</th>
                              <th>Leave Type</th>
                              <th>App No</th>
                              <th>Emp Details</th>
                              <th>Applied On</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>01.</td>
                              <td>CL</td>
                              <td><a href="/" className="md-trigger" data-modal="pending-application">21478584964152</a></td>
                              <td>9325785 - Srikanth Zeal</td>
                              <td>30-11-2017 - 11:30 Am</td>
                              <td><a href="/" className="approved-btn">Accept</a></td>
                            </tr>
                            <tr>
                              <td>02.</td>
                              <td>SL</td>
                              <td><a href="/" className="md-trigger" data-modal="pending-application">58472147852114</a></td>
                              <td>9325785 - Srikanth Zeal</td>
                              <td>1-12-2017 - 02:30 Pm</td>
                              <td><a href="/" className="approved-btn">Accept</a></td>
                            </tr>
                            <tr>
                              <td>03.</td>
                              <td>SL</td>
                              <td><a href="/" className="md-trigger" data-modal="pending-application">21478584964152</a></td>
                              <td>9325785 - Srikanth Zeal</td>
                              <td>30-11-2017 - 11:30 Am</td>
                              <td><a href="/" className="approved-btn">Accept</a></td>
                            </tr>
                            <tr>
                              <td>04.</td>
                              <td>CL</td>
                              <td><a href="/" className="md-trigger" data-modal="pending-application">21478584964152</a></td>
                              <td>9325785 - Srikanth Zeal</td>
                              <td>30-11-2017 - 11:30 Am</td>
                              <td><a href="/" className="approved-btn">Accept</a></td>
                            </tr>
                            <tr>
                              <td>05.</td>
                              <td>CL</td>
                              <td><a href="/" className="md-trigger" data-modal="pending-application">21478584964152</a></td>
                              <td>9325785 - Srikanth Zeal</td>
                              <td>30-11-2017 - 11:30 Am</td>
                              <td><a href="/" className="approved-btn">Accept</a></td>
                            </tr>
                            <tr>
                              <td>06.</td>
                              <td>CL</td>
                              <td><a href="/" className="md-trigger" data-modal="pending-application">21478584964152</a></td>
                              <td>9325785 - Srikanth Zeal</td>
                              <td>30-11-2017 - 11:30 Am</td>
                              <td><a href="/" className="approved-btn">Accept</a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='main-footer'>
        <Footer />
      </div>
    </div>

  )
}

export default PendingApprovals;
