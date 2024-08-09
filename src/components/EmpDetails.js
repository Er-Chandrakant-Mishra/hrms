import React, { useState } from 'react';
import '../css/custome.css';
import '../css/component.css';
import canteen from '../assets/images/canteen-recharge.png';
import quotes1 from '../assets/images/quotes.png' ;
import user2  from '../assets/images/user1-128x128.jpg';
import userImage2 from '../assets/images/user7-128x128.jpg' 
import user3 from '../assets/images/user-174.jpg'
import user4 from '../assets/images/user4-128x128.jpg';
import user6 from '../assets/images/user6-128x128.jpg';
import user7 from '../assets/images/user7-128x128.jpg';
import user10 from '../assets/images/user5-128x128.jpg'    
import profile from '../assets/images/update-profile.png';
import margdarsi from '../assets/images/mc.png';
import Auth from "../assets/images/author.png";
import TourImg from '../assets/images/on-tour.png';
import userImage from '../assets/images/user8-128x128.jpg'
import applyLeave from '../assets/images/apply-leave.png';
import attendence from '../assets/images/attendance.png';
import user1 from   '../assets/images/user2-160x160.jpg';
import ShiftChange from "../assets/images/shiftchange.png";
import OnDutey from '../assets/images/onduty-icon.png';
import Footer from '../pages/Footer';
import Header from '../pages/Header';
import Sidebar from '../pages/Sidebar';

const EmpDetails = () => {

  const [show, setShow] =useState ("true");
  const [application,setPendingApplication] = useState (true);
  const [attendance , setSelfattendace] = useState (true);
  const [balance ,setLeaveBalance]= useState (true);
  const [selfApplication , setApplication] = useState(true);
  const [joining , setNewJoining] = useState(true);
  const [isOpen ,setIsopen]= useState(false);
  const [isStatus , setIstatus] = useState(false);

const OpenModalPage = () =>{
  setIsopen(true);
};

 const closeModalPage =() =>{
  setIsopen(false);
 };
 const checkStatus = () =>{
  setIstatus(true);
 };

 const closeStatus =() =>{
  setIstatus(false);
 }

 const handleRefresh = () => {
  window.location.reload(); 
  // This will reload the current page
};
  
const handleViewAllClick =() =>{

  window.location.href="/viewall";
}




  return (
  <div>

  { isStatus &&(
    <div className="md-modal md-effect-10" id="used-leavess">
  <div className="modal-content">
    <div className="close-popup text-right clearfix">
      <h5>Leave Register for the year 2017... CL</h5>
      <a pointerStyle={{cursor:'pointer'}} className="md-close"onClick={closeStatus}>
        <i className="fa fa-times" aria-hidden="true" /></a>
    </div>
    <div className="used-leaves-model">
      <div className="leaves-status">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>First Half</th>
              <th>Second Half</th>
              <th>Reasons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11/07/2017</td>
              <td>CL</td>
              <td>CL</td>
              <td>Personal</td>
            </tr>
            <tr>
              <td>11/07/2017</td>
              <td>CL</td>
              <td>CL</td>
              <td>Personal</td>
            </tr>
            <tr>
              <td>11/07/2017</td>
              <td>CL</td>
              <td>CL</td>
              <td>Personal</td>
            </tr>
            <tr>
              <td>11/07/2017</td>
              <td>CL</td>
              <td>CL</td>
              <td>Personal</td>
            </tr>
            <tr>
              <td>11/07/2017</td>
              <td>CL</td>
              <td>CL</td>
              <td>Personal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

)}
<Header />
    { isOpen &&(
  <div className="md-modal md-effect-10" id="apply-leave">
  <div className="modal-content">
    <div className="close-popup text-right clearfix">
      
      <h5>Apply</h5>
      <a style={{cursor: 'pointer'}} className="md-close">
    
      <i className="fa fa-times" aria-hidden="true" onClick={closeModalPage} /></a>
    </div>
    <div className="leave-application clearfix">
      <div className="col-md-6 col-sm-6">
        <div className="info-box leave-link">
          <span className="info-box-icon bg-aqua">
            <img src={applyLeave} alt="apply_leave" />
          </span>
          <div className="info-box-content">
            <span className="info-box-number">
              <a href="#">Apply Leave</a></span>
          </div>
          {/* /.info-box-content */}
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="info-box leave-link">
          <span className="info-box-icon bg-aqua">
            <img src={OnDutey} alt="on duty" />
            </span>
          <div className="info-box-content">
            <span className="info-box-number"><a href="#">On Duty</a></span>
          </div>
          {/* /.info-box-content */}
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="info-box leave-link">
          <span className="info-box-icon bg-aqua">
            <img src={ShiftChange} alt="apply_Leave" /></span>
          <div className="info-box-content">
            <span className="info-box-number"><a href="#">Shift Change</a></span>
          </div>
          {/* /.info-box-content */}
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="info-box leave-link">
          <span className="info-box-icon bg-aqua"><img src={TourImg} alt="apply_Leave" /></span>
          <div className="info-box-content">
            <span className="info-box-number"><a href="#">On Tour</a></span>
          </div>
          {/* /.info-box-content */}
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="info-box leave-link">
          <span className="info-box-icon bg-aqua">
            <img src={Auth} alt="apply_Leave" />
            </span>
          <div className="info-box-content">
            <span className="info-box-number"><a href="/"> Authorisation</a></span>
          </div>
          {/* /.info-box-content */}
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="info-box leave-link">
          <span className="info-box-icon bg-aqua"><img src={attendence} alt="apply_leave" /></span>
          <div className="info-box-content">
            <span className="info-box-number"><a href="#">  Attendance Rectification</a></span>
          </div>
          {/* /.info-box-content */}
        </div>
      </div>
    </div>
    {/*-- leave-appliation-model --*/}
  </div>
</div>
    )}

<div className="content-wrapper">

 <section className="content">
  <Sidebar />
<div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="info-box">
              <span className="info-box-icon bg-aqua">
                <img src={applyLeave} alt="apply leave" /></span>
              <div className="info-box-content">
                <span className="info-box-number"><a href="/applyLeave">Apply Leave</a></span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="info-box">
              <span className="info-box-icon bg-red">
                <img src={profile} alt="update_profile" />
                </span>
              <div className="info-box-content">
                <span className="info-box-number">
                    <a href="#">Update Profile</a></span>
              </div>
            </div>
          </div>
          <div className="clearfix visible-sm-block" />
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="info-box">
              <span className="info-box-icon bg-green">
                <img src={canteen} alt="canteen recharge" /></span>
              <div className="info-box-content">
                <span className="info-box-number"><a href="#">Canteen Recharge</a></span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="info-box">
              <span className="info-box-icon bg-yellow">
                <img src={quotes1} alt="quotes" /></span>
              <div className="info-box-content">
                <span className="info-box-number"><a href="#">Quotes</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box box-info">
              <div className="box-header with-border">
                <h3 className="box-title">Pending Applications</h3>
                <div className="box-tools pull-right">
              
            <a
              className="btn btn-box-tool"  data-widget="collapse"
              onClick={() =>setShow(!show)}>
                 {show ? ( <i className="fa fa-minus" />):(<i className="fa fa-plus" />)}
            </a> 

          </div>
              </div>
              <div className="box-body">
                {show ? (
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
                      <div className="stats refresh col-md-6" style={{borderRight: '0.1px solid #f2f2f2'}}>
                        <a onClick={handleRefresh} href="#"> <i className="fa fa-refresh" aria-hidden="true" /> Refresh </a>
                      </div>
                      <div className="stats col-md-6">
                        <a onClick={handleViewAllClick} href="/employee">
                           <i className="fa fa-arrows-al
                           t" aria-hidden="true" />  View All </a>
                      </div>
                    </div>
                  </div>
                </div> 
                  ) : null}  
              </div>
              
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="box box-danger">
              <div className="box-header with-border">
                <h3 className="box-title">Application Waiting For Your Approval</h3>
                <div className="box-tools pull-right">
                  <span className="label label-danger">10 Pending Applications</span>
                  <a className="btn btn-box-tool" data-widget="collapse" onClick={ () =>setPendingApplication(!application)}>
                    {application ? (<i className="fa fa-minus" />):(<i className='fa fa-plus'/>)}
                  </a>
                </div>
              </div>
              {/* /.box-header */}
              <div className="box-body no-padding pending-leaves">
                { application ? (
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
                    </div>
                  </li>
                </ul>
                ) : null}
              
                </div>
              {/* /.box-body */}
              <div className="box-footer text-center">
              
             <a href='/employee'  onClick={handleViewAllClick} className="btn btn-fb waves-effect waves-light">View All</a>
              
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
                  <a className="btn btn-box-tool" data-widget="collapse" onClick={()=>setSelfattendace(!attendance)}>
                   {attendance ? (<i className="fa fa-minus" />):(<i className='fa fa-plus'/>)}
                  </a>
                </div>
              </div>
              {/* /.box-header */}
              <div className="box-body">
                {attendance ? (
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
                          <td>
                       
                            <a href="#" className="md-trigger" data-modal="apply-leave"  onClick={OpenModalPage}>Apply</a>
                         
                            </td>
                        </tr>
                        <tr>
                          <td>02.</td>
                          <td>10/08/2017 (Thu)</td>
                          <td>54 [09:00 - 17:30]</td>
                          <td>PR</td>
                          <td><span className="absent">AB</span></td>
                          <td>08:50</td>
                          <td>
                            <a href="#" className="md-trigger" data-modal="apply-leave"  onClick={OpenModalPage }>Apply</a>
                         
                            </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                </div>
              ) : null }
</div>
            </div>
          </div>
        </div>
     
        <div className="row">
          <div className="col-md-12">
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">Leave Balance for the year 2017..</h3>
                <div className="box-tools pull-right">
                  <a className="btn btn-box-tool" data-widget="collapse" onClick={()=>setLeaveBalance(!balance)}>
                    { balance ? (<i className="fa fa-minus" />):(<i className="fa fa-plus"/>)}
                  </a>
                </div>
              </div>
              {/* /.box-header */}
              <div className="box-body">
                {balance ? (
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
                              <td>
                                
                                <a href="#" className="md-trigger" data-modal="used-leaves"onClick ={checkStatus} >11.00</a>
                             
                                </td>
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
                              <td><a href="#" onClick ={checkStatus}>3.00</a></td>
                              <td>00</td>
                              <td>3.00</td>
                              <td>18.00</td>
                            </tr>
                            <tr>
                              <td>LOP</td>
                              <td />
                              <td><a href="#" onClick ={checkStatus}>3.00</a></td>
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
                  </div>
                  {/* leave-bal-tabs */}
                </div>
                ) : null }
              </div>
            </div>
          </div>
        </div>
     
        <div className="row">
          <div className="col-md-8">
            <div className="box box-info">
              <div className="box-header with-border">
                <h3 className="box-title">Pending Self Applications</h3>
                <div className="box-tools pull-right">
                  <a className="btn btn-box-tool" data-widget="collapse" onClick={ ()=>setApplication(!selfApplication)}>
                    {selfApplication ? (<i className="fa fa-minus" />):(<i className="fa fa-plus"/>)}
                  </a>
                </div>
              </div>
              {/* /.box-header */}
         
              <div className="box-body">
                <div className="col-md-12 col-sm-12">
                { selfApplication ? (
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
                        <td><a href="/" className="md-trigger" data-modal="leave-details">21478584964152</a></td>
                        <td>9325785 - Srikanth Zeal</td>
                        <td>30-11-2017 - 11:30 Am</td>
                        <td>Waiting for HOD </td>
                      </tr>
                      <tr>
                        <td>02.</td>
                        <td>Leave</td>
                        <td><a href="" className="md-trigger" data-modal="leave-details">58472147852114</a></td>
                        <td>9325785 - Srikanth Zeal</td>
                        <td>1-12-2017 - 02:30 Pm</td>
                        <td>Waiting for HOD </td>
                      </tr>
                    </tbody>
                  </table>
                ):null }
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
                  <a  className="btn btn-box-tool" data-widget="collapse" onClick={()=>setNewJoining(!joining)}>
                    {joining ?(<i className="fa fa-minus" />):(<i className="fa fa-plus"></i>)}
                  </a>
                </div>
              </div>
              {/* /.box-header */}
              <div className="box-body no-padding">
                { joining ? (
                <ul className="users-list clearfix">
                  <li>
                    <img src={user2} alt="User_Image" />
                    <a className="users-list-name" href="/">Alexander Pierce</a>
                    <span className="users-list-date">Today</span>
                  </li>
                  <li>
                    <img src={user3} alt="User_Image" />
                    <a className="users-list-name" href="/norman">Norman</a>
                    <span className="users-list-date">Yesterday</span>
                  </li>
                  <li>
                    <img src={user7} alt="User_Image" />
                    <a className="users-list-name" href="/jane">Jane</a>
                    <span className="users-list-date">12 Jan</span>
                  </li>
                  <li>
                    <img src={user6} alt="User_Image" />
                    <a className="users-list-name" href="/john">John</a>
                    <span className="users-list-date">12 Jan</span>
                  </li>
                </ul>
                ):null}
                {/* /.users-list */}
              </div>
              {/* /.box-body */}
              <div className="box-footer text-center">
                <a href=" /javaScript" className="uppercase">View All</a>
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