import React from 'react'
import '../css/custome.css';
import canteen from '../assets/images/canteen-recharge.png';
import quotes1 from '../assets/images/quotes.png';
import user2 from '../assets/images/user1-128x128.jpg';
import userImage2 from '../assets/images/user7-128x128.jpg'
import user3 from '../assets/images/user-174.jpg'
import user4 from '../assets/images/user4-128x128.jpg';
import user6 from '../assets/images/user6-128x128.jpg';
import user7 from '../assets/images/user7-128x128.jpg';
import user10 from '../assets/images/user5-128x128.jpg'
import profile from '../assets/images/update-profile.png';
import margdarsi from '../assets/images/mc.png';
import applyLeave from '../assets/images/apply-leave.png';
import Footer from '../pages/Footer';

const EmpDetails = () => {
  return (
    <div>

      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          {/* Info boxes */}
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua">
                  <img src={applyLeave} alt="apply leave" /></span>
                <div className="info-box-content">
                  <span className="info-box-number"><a href="#">Apply Leave</a></span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-red"><img src={profile} alt="update_profile" /></span>
                <div className="info-box-content">
                  <span className="info-box-number">
                    <a href="#">Update Profile</a></span>
                </div>
              </div>
            </div>
            {/* fix for small devices only */}
            <div className="clearfix visible-sm-block" />
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-green">
                  <img src={canteen} alt="canteen recharge" /></span>
                <div className="info-box-content">
                  <span className="info-box-number"><a href="#">Canteen Recharge</a></span>
                </div>
                {/* /.info-box-content */}
              </div>
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-yellow">
                  <img src={quotes1} alt="quotes" /></span>
                <div className="info-box-content">
                  <span className="info-box-number"><a href="#">Quotes</a></span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-md-4">
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Pending Applications</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header margadarsi" data-background-color="orange">
                        <img src={margdarsi} alt="margadarsi_computers" />
                      </div>
                      <div className="card-content">
                        <p className="category">Margadarsi Computers</p>
                        <h3 className="title">Waiting Approvals : <span className="app-num"> 10</span></h3>
                      </div>
                      <div className="card-footer clearfix text-center">
                        <div className="stats refresh col-md-6" style={{ borderRight: '0.1px solid #f2f2f2' }}>
                          <a href="#"> <i className="fa fa-refresh" aria-hidden="true" /> Refresh </a>
                        </div>
                        <div className="stats col-md-6">
                          <a href="#"> <i className="fa fa-arrows-alt" aria-hidden="true" />  View All </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="box box-danger">
                <div className="box-header with-border">
                  <h3 className="box-title">Application Waiting For Your Approval</h3>
                  <div className="box-tools pull-right">
                    <span className="label label-danger">10 Pending Applications</span>
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body no-padding pending-leaves">
                  <ul className="users-list clearfix">
                    <li>
                      <div className="emp-pnd-app">
                        <a href="#"><img src={user2} alt="User-Image1" /></a>
                        <a className="users-list-name" href="#">Kumara Swamy</a>
                        <p className="users-id" href="#">Emp Id : 123478</p>
                        <span className="users-list-date">Today</span>
                      </div>{/* emp-pnd-app */}
                      <div className="app-notice">
                        <span className="label label-warning"> 3</span>
                      </div>{/* app-notice */}
                    </li>
                    <li>
                      <div className="emp-pnd-app">
                        <img src={user3} alt="User_Image" />
                        <a className="users-list-name" href="#">Kishor</a>
                        <p className="users-id" href="#">Emp Id : 123478</p>
                        <span className="users-list-date">Yesterday</span>
                      </div>{/* emp-pnd-app */}
                      <div className="app-notice">
                        <span className="label label-warning"> 2</span>
                      </div>{/* app-notice */}
                    </li>
                    <li>
                      <div className="emp-pnd-app">
                        <img src={userImage2} alt="User_Image" />
                        <a className="users-list-name" href="#">Sahana</a>
                        <p className="users-id" href="#">Emp Id : 123478</p>
                        <span className="users-list-date">5 Hours Ago</span>
                      </div>{/* emp-pnd-app */}
                      <div className="app-notice">
                        <span className="label label-warning"> 1</span>
                      </div>{/* app-notice */}
                    </li>
                    <li>
                      <div className="emp-pnd-app">
                        <img src={user6} alt="User Image" />
                        <a className="users-list-name" href="#">Deepit</a>
                        <p className="users-id" href="#">Emp Id : 123478</p>
                        <span className="users-list-date">On 12 Jan</span>
                      </div>{/* emp-pnd-app */}
                      <div className="app-notice">
                        <span className="label label-warning">3</span>
                      </div>{/* app-notice */}
                    </li>
                    <li>
                      <div className="emp-pnd-app">
                        <img src={user10} alt="User_Image" />
                        <a className="users-list-name" href="#">Krishnaveni</a>
                        <p className="users-id" href="#">Emp Id : 123478</p>
                        <span className="users-list-date">5 Mints Ago</span>
                      </div>{/* emp-pnd-app */}
                      <div className="app-notice">
                        <span className="label label-warning">3</span>
                      </div>{/* app-notice */}
                    </li>
                    <li>
                      <div className="emp-pnd-app">
                        <img src={user4} alt="User_Image" />
                        <a className="users-list-name" href="#">Bhumi</a>
                        <p className="users-id" href="#">Emp Id : 123478</p>
                        <span className="users-list-date">On 12 Jan</span>
                      </div>{/* emp-pnd-app */}
                      <div className="app-notice">
                        <span className="label label-warning">3</span>
                      </div>{/* app-notice */}
                    </li>
                  </ul>
                  {/* /.users-list */}
                </div>
                {/* /.box-body */}
                <div className="box-footer text-center">
                  <button type="button" className="btn btn-fb waves-effect waves-light">View All</button>
                </div>
                {/* /.box-footer */}
              </div>
            </div>
          </div>{/* rows  */}
          <div className="row">
            <div className="col-md-12">
              <div className="box">
                <div className="box-header with-border">
                  <h3 className="box-title">Self Attendance Details</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <div className="col-md-12 col-sm-12">
                    <div className="table-responsive">
                      <table className="table table-hover table-bordered">
                        <thead>
                          <tr>
                            <th>Sl</th>
                            <th>Date</th>
                            <th>Shift</th>
                            <th>First Half</th>
                            <th>Second Half</th>
                            <th>Punches</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01.</td>
                            <td>10/08/2017 (Thu)</td>
                            <td>54 [09:00 - 17:30]</td>
                            <td><span className="absent">AB</span></td>
                            <td><span className="absent">AB</span></td>
                            <td>08:50</td>
                            <td><a href="#" className="md-trigger" data-modal="apply-leave">Apply</a></td>
                          </tr>
                          <tr>
                            <td>02.</td>
                            <td>10/08/2017 (Thu)</td>
                            <td>54 [09:00 - 17:30]</td>
                            <td>PR</td>
                            <td><span className="absent">AB</span></td>
                            <td>08:50</td>
                            <td><a href="#" className="md-trigger" data-modal="apply-leave">Apply</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* /.row */}
                </div>
                {/* ./box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-md-12">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Leave Balance for the year 2017..</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <div className="col-md-12 col-sm-12">
                    <div className="leave-bal-tab">
                      <div id="exTab1">
                        <div className="tab-content clearfix">
                          <table className="table table-hover table-bordered" id="attendance-section">
                            <thead>
                              <tr>
                                <th>Type</th>
                                <th>Opening Balance ason 01-Jan-2017</th>
                                <th>Used Leaves</th>
                                <th>Pending Leaves</th>
                                <th>Total Used</th>
                                <th>Balance ason 02-Dec-2017</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>CL</td>
                                <td>12.00</td>
                                <td><a href="#" className="md-trigger" data-modal="used-leaves">11.00</a></td>
                                <td>00</td>
                                <td>11.00</td>
                                <td>1.00</td>
                              </tr>
                              <tr>
                                <td>EL</td>
                                <td>15.00</td>
                                <td>00</td>
                                <td>00</td>
                                <td>00</td>
                                <td>15.00</td>
                              </tr>
                              <tr>
                                <td>SL</td>
                                <td>21.00</td>
                                <td><a href="#">3.00</a></td>
                                <td>00</td>
                                <td>3.00</td>
                                <td>18.00</td>
                              </tr>
                              <tr>
                                <td>LOP</td>
                                <td />
                                <td><a href="#">3.00</a></td>
                                <td />
                                <td>3.00</td>
                                <td />
                              </tr>
                              <tr>
                                <td>ESI</td>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                              </tr>
                              <tr>
                                <td>Total</td>
                                <td>48.00</td>
                                <td>16.50</td>
                                <td />
                                <td>16.50</td>
                                <td>34.00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>{/* leave-bal-tabs */}
                  </div>
                  {/* /.row */}
                </div>
                {/* ./box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>{/* rows  */}
          {/*-- ROWS --*/}
          <div className="row">
            <div className="col-md-8">
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Pending Self Applications</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <div className="col-md-12 col-sm-12">
                    <table className="table table-hover table-bordered">
                      <thead>
                        <tr>
                          <th>Sl</th>
                          <th>Type</th>
                          <th>App No</th>
                          <th>Emp Details</th>
                          <th>Applied On</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01.</td>
                          <td>Leave</td>
                          <td><a href="#" className="md-trigger" data-modal="leave-details">21478584964152</a></td>
                          <td>9325785 - Srikanth Zeal</td>
                          <td>30-11-2017 - 11:30 Am</td>
                          <td>Waiting for HOD </td>
                        </tr>
                        <tr>
                          <td>02.</td>
                          <td>Leave</td>
                          <td><a href="#" className="md-trigger" data-modal="leave-details">58472147852114</a></td>
                          <td>9325785 - Srikanth Zeal</td>
                          <td>1-12-2017 - 02:30 Pm</td>
                          <td>Waiting for HOD </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /.row */}
                </div>
                {/* ./box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
            <div className="col-md-4">
              {/* USERS LIST */}
              <div className="box box-danger">
                <div className="box-header with-border">
                  <h3 className="box-title">New Joinings</h3>
                  <div className="box-tools pull-right">
                    <span className="label label-danger">4 New Members</span>
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body no-padding">
                  <ul className="users-list clearfix">
                    <li>
                      <img src={user2} alt="User_Image" />
                      <a className="users-list-name" href="#">Alexander Pierce</a>
                      <span className="users-list-date">Today</span>
                    </li>
                    <li>
                      <img src={user3} alt="User_Image" />
                      <a className="users-list-name" href="#">Norman</a>
                      <span className="users-list-date">Yesterday</span>
                    </li>
                    <li>
                      <img src={user7} alt="User_Image" />
                      <a className="users-list-name" href="#">Jane</a>
                      <span className="users-list-date">12 Jan</span>
                    </li>
                    <li>
                      <img src={user6} alt="User_Image" />
                      <a className="users-list-name" href="#">John</a>
                      <span className="users-list-date">12 Jan</span>
                    </li>
                  </ul>
                  {/* /.users-list */}
                </div>
                {/* /.box-body */}
                <div className="box-footer text-center">
                  <a href="javascript:void(0)" className="uppercase">View All</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default EmpDetails