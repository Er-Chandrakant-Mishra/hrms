import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
 import '../css/custome.css';
 import userPick from '../assets/images/user2-160x160.jpg'
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
import imgCircle from '../assets/images/pm.jpg';
import margdarsi from '../assets/images/mc.png';
import userImage from '../assets/images/user8-128x128.jpg'
 import applyLeave from '../assets/images/apply-leave.png';
import attendence from '../assets/images/attendance.png';
import user1 from   '../assets/images/user2-160x160.jpg';
const Header1 = () => {
  return (

  <div className="md-modal md-effect-10" id="used-leaves">
  <div className="wrapper">
    <header className="main-header">
      {/* Logo */}
      <a href="index2.html" className="logo">
        {/* logo for regular state and mobile devices */}
        <span className="logo-lg"><img src={margdarsi}   alt="margadarsi_Computers" className="img-responsive" /></span>
      </a>
      {/* Header Navbar: style can be found in header.less */}
      <nav className="navbar navbar-static-top">
        {/* Sidebar toggle button*/}
        {/*
    <a href="/" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
    </a>
    */}
        <div className="col-md-8 col-sm-8 col-xs-8">
          <div className="dashboard-hd">
            <ol className="breadcrumb">
              <li><a href="/"><i className="fa fa-home" aria-hidden="true" /> Home</a></li>
              <li className="active">Myprofile</li>
            </ol>
          </div>
        </div>
        {/* Navbar Right Menu */}
        <div className="col-md-4 col-sm-4">
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* Messages: style can be found in dropdown.less*/}
              <li className="dropdown messages-menu">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-envelope-o" />
                </a>
                <ul className="dropdown-menu chairman-msg">
                  <li>
                    {/* inner menu: contains the actual data */}
                    <ul className="menu">
                      <li>{/* start message */}
                        <a href="/">
                          <div className="pull-left">
                            <img src={imgCircle} className="img-circle" alt="User Image" />
                          </div>
                          <h4>
                            Chairman's Message
                          </h4>
                        </a>
                      </li>
                      {/* end message */}
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown messages-menu tasks-menu">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-info-circle" aria-hidden="true" />
                </a>
                <ul className="dropdown-menu chairman-msg">
                  <li>
                    {/* inner menu: contains the actual data */}
                    <ul className="menu">
                      <li>{/* Task item */}
                        <a href="/">
                          <div className="pull-left">
                            <img src= {userImage} className="img-circle" alt="User Image" />
                          </div>
                          <h4>
                            Mediclaim Network Hospitals
                          </h4>
                        </a>
                      </li>
                      {/* end task item */}
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Notifications: style can be found in dropdown.less */}
              <li className="dropdown notifications-menu">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o" />
                  <span className="label label-warning">10</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    {/* inner menu: contains the actual data */}
                    <ul className="menu">
                      <li>
                        <a href="/">
                          <i className="fa fa-users text-aqua" /> 5 new members joined today
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="/">View all</a></li>
                </ul>
              </li>
              {/* Tasks: style can be found in dropdown.less */}
              {/* User Account: style can be found in dropdown.less */}
              <li className="dropdown user user-menu">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                  <img src={user1} className="user-image" alt="User Image" />
                  <span className="hidden-xs">Srikanth Zeal </span> <i className="fa fa-caret-down" aria-hidden="true" />
                </a>
                <ul className="dropdown-menu">
                  {/* User image */}
                  <li classname="user-header">
                    <img src={userPick}className="img-circle" alt="User Image" />
                    <p>
                      Srikanth Zeal - Seo Analyst
                      <small>Employee Code : 9325875</small>
                    </p>
                  </li>
                  {/* Menu Body */}
                  <li className="user-body">
                    <div className="row">
                      <div className="col-xs-6 text-center">
                        <a href="/">Change Password</a>
                      </div>
                      <div className="col-xs-6 text-center">
                        <a href="/">My Profile</a>
                      </div>
                    </div>
                    {/* /.row */}
                  </li>
                  {/* Menu Footer*/}
                  <li className="user-footer">
                    <div className="sign-out">
                      <a href="/" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
              {/* Control Sidebar Toggle Button */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
    {/* Left side column. contains the logo and sidebar */}
    <aside className="main-sidebar">
      {/* sidebar: style can be found in sidebar.less */}
      <section className="sidebar">
        {/* sidebar menu: : style can be found in sidebar.less */}
        <ul className="sidebar-menu" data-widget="tree">
          <li><h3>HCM (Human Capital Management) </h3></li>
          <li className="active treeview menu-open">
            <a href="/">
              <i className="fa fa-user" aria-hidden="true" /> <span>Personal Info</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right" />
              </span>
            </a>
            <ul className="treeview-menu">
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Employee</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Leave Balance</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Update My Profile</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Services</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Payroll</a></li>
            </ul>
          </li>
          <li className="treeview">
            <a href="/">
              <i className="fa fa-desktop" aria-hidden="true" />
              <span>Applications</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right" />
              </span>
            </a>
            <ul className="treeview-menu">
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Application Details</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Leave</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> On Duty</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Shift Change</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> On Tour</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Employee</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Authorisation</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Attendance Rectification</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Rfc Canteen Recharge</a></li>
            </ul>
          </li>
          <li className="treeview">
            <a href="/">
              <i className="fa fa-calendar" aria-hidden="true" />
              <span>Attendance</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right" />
              </span>
            </a>
            <ul className="treeview-menu">
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Self Attendance</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Shift</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Attendance Report</a></li>
            </ul>
          </li>
          <li className="treeview">
            <a href="/">
              <i className="fa fa-file-text" aria-hidden="true" /> <span>Documents</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right" />
              </span>
            </a>
            <ul className="treeview-menu">
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> General Circulars</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Promotions Circulars</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> New Joinings</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Resignations</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Quotes</a></li>
              <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Articals</a></li>
            </ul>
          </li>
          <li className="treeview">
            <a href="/">
              <i className="fa fa-print" aria-hidden="true" /> <span> Download Payslip </span>
            </a>
          </li>
        </ul>
      </section>
      {/* /.sidebar */}
    </aside>
    {/* Content Wrapper. Contains page content */}
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
                <span className="info-box-number"><a href="/">Apply Leave</a></span>
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
                <span className="info-box-number"><a href="/">Update Profile</a></span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          {/* fix for small devices only */}
          <div className="clearfix visible-sm-block" />
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="info-box">
              <span className="info-box-icon bg-green">
                <img src={canteen} alt="canteen recharge" /></span>
              <div className="info-box-content">
                <span className="info-box-number"><a href="/">Canteen Recharge</a></span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="info-box">
              <span className="info-box-icon bg-yellow">
                <img src={quotes1} alt="quotes" /></span>
              <div className="info-box-content">
                <span className="info-box-number"><a href="/">Quotes</a></span>
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
                      <div className="stats refresh col-md-6" style={{borderRight: '0.1px solid /f2f2f2'}}>
                        <a href="/"> <i className="fa fa-refresh" aria-hidden="true" /> Refresh </a>
                      </div>
                      <div className="stats col-md-6">
                        <a href="/"> <i className="fa fa-arrows-alt" aria-hidden="true" />  View All </a>
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
                      <a href="/"><img src={user2} alt="User-Image1" /></a>
                      <a className="users-list-name" href="/">Kumara Swamy</a>
                      <p className="users-id" href="/">Emp Id : 123478</p>
                      <span className="users-list-date">Today</span>
                    </div>{/* emp-pnd-app */}
                    <div className="app-notice">
                      <span className="label label-warning"> 3</span>
                    </div>{/* app-notice */}
                  </li>
                  <li>
                    <div className="emp-pnd-app">
                      <img src={user3} alt="User Image" />
                      <a className="users-list-name" href="/">Kishor</a>
                      <p className="users-id" href="/">Emp Id : 123478</p>
                      <span className="users-list-date">Yesterday</span>
                    </div>{/* emp-pnd-app */}
                    <div className="app-notice">
                      <span className="label label-warning"> 2</span>
                    </div>{/* app-notice */}
                  </li>
                  <li>
                    <div className="emp-pnd-app">
                      <img src={userImage2} alt="User_Image" />
                      <a className="users-list-name" href="/">Sahana</a>
                      <p className="users-id" href="/">Emp Id : 123478</p>
                      <span className="users-list-date">5 Hours Ago</span>
                    </div>{/* emp-pnd-app */}
                    <div className="app-notice">
                      <span className="label label-warning"> 1</span>
                    </div>{/* app-notice */}
                  </li>
                  <li>
                    <div className="emp-pnd-app">
                      <img src={user6} alt="User Image" />
                      <a className="users-list-name" href="/">Deepit</a>
                      <p className="users-id" href="/">Emp Id : 123478</p>
                      <span className="users-list-date">On 12 Jan</span>
                    </div>{/* emp-pnd-app */}
                    <div className="app-notice">
                      <span className="label label-warning">3</span>
                    </div>{/* app-notice */}
                  </li>
                  <li>
                    <div className="emp-pnd-app">
                      <img src={user10} alt="User_Image" />
                      <a className="users-list-name" href="/">Krishnaveni</a>
                      <p className="users-id" href="/">Emp Id : 123478</p>
                      <span className="users-list-date">5 Mints Ago</span>
                    </div>{/* emp-pnd-app */}
                    <div className="app-notice">
                      <span className="label label-warning">3</span>
                    </div>{/* app-notice */}
                  </li>
                  <li>
                    <div className="emp-pnd-app">
                      <img src={user4} alt="User_Image" />
                      <a className="users-list-name" href="/">Bhumi</a>
                      <p className="users-id" href="/">Emp Id : 123478</p>
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
                          <td><a href="/" className="md-trigger" data-modal="apply-leave">Apply</a></td>
                        </tr>
                        <tr>
                          <td>02.</td>
                          <td>10/08/2017 (Thu)</td>
                          <td>54 [09:00 - 17:30]</td>
                          <td>PR</td>
                          <td><span className="absent">AB</span></td>
                          <td>08:50</td>
                          <td><a href="/" className="md-trigger" data-modal="apply-leave">Apply</a></td>
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
                              <td><a href="/" className="md-trigger" data-modal="used-leaves">11.00</a></td>
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
                              <td><a href="/">3.00</a></td>
                              <td>00</td>
                              <td>3.00</td>
                              <td>18.00</td>
                            </tr>
                            <tr>
                              <td>LOP</td>
                              <td />
                              <td><a href="/">3.00</a></td>
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
                        <td><a href="/" className="md-trigger" data-modal="leave-details">21478584964152</a></td>
                        <td>9325785 - Srikanth Zeal</td>
                        <td>30-11-2017 - 11:30 Am</td>
                        <td>Waiting for HOD </td>
                      </tr>
                      <tr>
                        <td>02.</td>
                        <td>Leave</td>
                        <td><a href="/" className="md-trigger" data-modal="leave-details">58472147852114</a></td>
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
                    <a className="users-list-name" href="/">Alexander Pierce</a>
                    <span className="users-list-date">Today</span>
                  </li>
                  <li>
                    <img src={user3} alt="User_Image" />
                    <a className="users-list-name" href="/">Norman</a>
                    <span className="users-list-date">Yesterday</span>
                  </li>
                  <li>
                    <img src={user7} alt="User_Image" />
                    <a className="users-list-name" href="/">Jane</a>
                    <span className="users-list-date">12 Jan</span>
                  </li>
                  <li>
                    <img src={user6} alt="User_Image" />
                    <a className="users-list-name" href="/">John</a>
                    <span className="users-list-date">12 Jan</span>
                  </li>
                </ul>
                {/* /.users-list */}
              </div>
              {/* /.box-body */}
              <div className="box-footer text-center">
                <a href="javascript:void(0)" className="uppercase">View All</a>
              </div>
              {/* /.box-footer */}
            </div>
            {/*/.box */}
          </div>
        </div>{/* rows  */}
        {/* Main row */}
        <div className="row">
          {/* Left col */}
          <div className="col-md-8">
            {/* /.box */}
            <div className="row">
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </section>
      {/* /.content */}
    </div>
    {/* /.content-wrapper */}
    <footer className="main-footer">
      <strong>Copyright © 2017-2018 <a href="/">Margadarsi Computers</a>.</strong> All rights reserved.
    </footer>
  </div>
  {/* ./wrapper */}
  {/* overlay-popup */}
  <div className="md-overlay-index" />
  {/* overlay-popup */}
  {/* jQuery 3 */}
  {/* Bootstrap 3.3.7 */}
  {/* FastClick */}
  {/* AdminLTE App */}
  {/* Sparkline */}
  {/* jvectormap  */}
  {/* SlimScroll */}
  {/* Chart Js */}
  {/* AdminLTE dashboard demo (This is only for demo purposes) */}
  {/* AdminLTE for demo purposes */}
  {/* Model Popup Style */}
  {/*- Area Chart script --*/}
</div>
  )
}
export default Header1;



    






























// import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// //import '../css/style.css'
// import '../css/custome.css';


// import imgCircle from '../assets/images/pm.jpg';
// import margdarsi from '../assets/images/mc.png';
// import userImage from '../assets/images/user8-128x128.jpg'
// import user from '../assets/images/user2-160x160.jpg';

// const Header1 = () => {
//   return (
   
//   <div>
//    <header className="main-header">
//   {/* Logo */}
//   <a href="/" className="logo">
//     {/* logo for regular state and mobile devices */}
//     <span className="logo-lg"><img src={margdarsi} alt="margadarsi Computers" className="img-responsive" /></span>
//   </a>
//   {/* Header Navbar: style can be found in header.less */}
//   <nav className="navbar navbar-static-top">
//     {/* Sidebar toggle button*/}
//     {/*
//   <a href="/" class="sidebar-toggle" data-toggle="push-menu" role="button">
//     <span class="sr-only">Toggle navigation</span>
//   </a>
// */}
//     <div className="col-md-8 col-sm-8 col-xs-8">
//       <div className="dashboard-hd">
//         <ol className="breadcrumb">
//           <li><a href="/"><i className="fa fa-home" aria-hidden="true" /> Home</a></li>
//           <li className="active">Myprofile</li>
//         </ol>
//       </div>
//     </div>
//     {/* Navbar Right Menu */}
//     <div className="col-md-4 col-sm-4">
//       <div className="navbar-custom-menu">
//         <ul className="nav navbar-nav">
//           {/* Messages: style can be found in dropdown.less*/}
//           <li className="dropdown messages-menu">
//             <a href="/" className="dropdown-toggle" data-toggle="dropdown">
//               <i className="fa fa-envelope-o" />
//             </a>
//             <ul className="dropdown-menu chairman-msg">
//               <li>
//                 {/* inner menu: contains the actual data */}
//                 <ul className="menu">
//                   <li>{/* start message */}
//                     <a href="/">
//                       <div className="pull-left">
//                         <img src={imgCircle} className="img-circle" alt="User Image" />
//                       </div>
//                       <h4>
//                         Chairman's Message
//                       </h4>
//                     </a>
//                   </li>
//                   {/* end message */}
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li className="dropdown messages-menu tasks-menu">
//             <a href="/" className="dropdown-toggle" data-toggle="dropdown">
//               <i className="fa fa-info-circle" aria-hidden="true" />
//             </a>
//             <ul className="dropdown-menu chairman-msg">
//               <li>
//                 {/* inner menu: contains the actual data */}
//                 <ul className="menu">
//                   <li>{/* Task item */}
//                     <a href="/">
//                       <div className="pull-left">
//                         <img src={userImage} className="img-circle" alt="User Image" />
//                       </div>
//                       <h4>
//                         Mediclaim Network Hospitals
//                       </h4>
//                     </a>
//                   </li>
//                   {/* end task item */}
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           {/* Notifications: style can be found in dropdown.less */}
//           <li className="dropdown notifications-menu">
//             <a href="/" className="dropdown-toggle" data-toggle="dropdown">
//               <i className="fa fa-bell-o" />
//               <span className="label label-warning">10</span>
//             </a>
//             <ul className="dropdown-menu">
//               <li>
//                 {/* inner menu: contains the actual data */}
//                 <ul className="menu">
//                   <li>
//                     <a href="/">
//                       <i className="fa fa-users text-aqua" /> 5 new members joined today
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="footer"><a href="/">View all</a></li>
//             </ul>
//           </li>
//           {/* Tasks: style can be found in dropdown.less */}
//           {/* User Account: style can be found in dropdown.less */}
//           <li className="dropdown user user-menu">
//             <a href="/" className="dropdown-toggle" data-toggle="dropdown">
//               <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
//               <span className="hidden-xs">Srikanth Zeal </span> <i className="fa fa-caret-down" aria-hidden="true" />
//             </a>
//             <ul className="dropdown-menu">
//               {/* User image */}
//               <li classname="user-header">
//                 <img src={user} className="img-circle" alt="User Image" />
//                 <p>
//                   Srikanth Zeal - Seo Analyst
//                   <small>Employee Code : 9325875</small>
//                 </p>
//               </li>
//               {/* Menu Body */}
//               <li className="user-body">
//                 <div className="row">
//                   <div className="col-xs-6 text-center">
//                     <a href="/">Change Password</a>
//                   </div>
//                   <div className="col-xs-6 text-center">
//                     <a href="/">My Profile</a>
//                   </div>
//                 </div>
//                 {/* /.row */}
//               </li>
//               {/* Menu Footer*/}
//               <li className="user-footer">
//                 <div className="sign-out">
//                   <a href="/" className="btn btn-default btn-flat">Sign out</a>
//                 </div>
//               </li>
//             </ul>
//           </li>
//           {/* Control Sidebar Toggle Button */}
//         </ul>
//       </div>
//     </div>
//   </nav>
// </header>

//   </div>
//   )
// }
// export default Header1;






