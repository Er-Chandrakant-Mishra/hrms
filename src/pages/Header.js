import React from 'react';
import '../css/style.css'
import '../css/custome.css';
import imgCircle from '../assets/images/pm.jpg';
import margdarsi from '../assets/images/mc.png';
import userImage from '../assets/images/user8-128x128.jpg'
import user from '../assets/images/user2-160x160.jpg';
import Sidebar from './Sidebar';

const Header = () => {

  return (
  <div>
   <header className="main-header">
  <a href="/home" className="logo">
    <span className="logo-lg"><img src={margdarsi} alt="margadarsi_Computers" className="img-responsive" /></span>
  </a>
  <nav className="navbar navbar-static-top">
    <div className="col-md-8 col-sm-8 col-xs-8">
      <div className="dashboard-hd">
        <ol className="breadcrumb">
          <li>
            <a href ="/home">
            <i className="fa fa-home" aria-hidden="true" />Home</a></li>
          <li> <a href='/updateprofile'>Myprofile</a></li>
        </ol>
      </div>
    </div>
    {/* Navbar Right Menu */}
    <div className="col-md-4 col-sm-4">
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li className="dropdown messages-menu">
            <a href ="/" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-envelope-o" />
            </a>
            <ul className="dropdown-menu chairman-msg">
              <li>
                {/* inner menu: contains the actual data */}
                <ul className="menu">
                  <li>{/* start message */}
                    <a href ="/">
                      <div className="pull-left">
                        <img src={imgCircle} className="img-circle" alt="User_Image" />
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
            <a href ="/" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-info-circle" aria-hidden="true" />
            </a>
            <ul className="dropdown-menu chairman-msg">
              <li>
                {/* inner menu: contains the actual data */}
                <ul className="menu">
                  <li>{/* Task item */}
                    <a href ="/">
                      <div className="pull-left">
                        <img src={userImage} className="img-circle" alt="User_Image" />
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
            <a href ="/" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-bell-o" />
              <span className="label label-warning">10</span>
            </a>
            <ul className="dropdown-menu">
              <li>
                {/* inner menu: contains the actual data */}
                <ul className="menu">
                  <li>
                    <a href ="/">
                      <i className="fa fa-users text-aqua" /> 5 new members joined today
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"><a href ="/">View all</a></li>
            </ul>
          </li>
          {/* Tasks: style can be found in dropdown.less */}
          {/* User Account: style can be found in dropdown.less */}
          <li className="dropdown user user-menu">
            <a href ="/" className="dropdown-toggle" data-toggle="dropdown">
              <img src={user} className="user-image" alt="UserImage" />
              <span className="hidden-xs">Srikanth Zeal </span>
               <i className="fa fa-caret-down" aria-hidden="true" />
            </a>
            <ul className="dropdown-menu">
              {/* User image */}
              <li className="user-header">
                <img src={user} className="img-circle" alt="User_Image" />
                <p>
                  Srikanth Zeal - Seo Analyst
                  <small>Employee Code : 9325875</small>
                </p>
              </li>
              {/* Menu Body */}
              <li className="user-body">
                <div className="row">
                  <div className="col-xs-6 text-center">
                    <a href ="/">Change Password</a>
                  </div>
                  <div className="col-xs-6 text-center">
                    <a href ="/empList">My Profile</a>
                  </div>
                </div>
                {/* /.row */}
              </li>
              {/* Menu Footer*/}
              <li className="user-footer">
                 <div className="sign-out">
                  <a href ="/" className="btn btn-default btn-flat">Sign out</a> 
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
<Sidebar />
  </div>
  
  )
}
export default Header;
    
    