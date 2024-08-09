import React, { useState } from "react";
import '../css/custome.css';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  const [isPersonalInfoSubMenuOpen, setIsPersonalInfoSubMenuOpen] = useState(false);
  const [isApplicationsSubMenuOpen, setIsApplicationsSubMenuOpen] = useState(false);
  const [isAttendanceSubMenuOpen, setIsAttendanceSubMenuOpen] = useState(false);
  const [isDocumentsSubMenuOpen, setIsDocumentsSubMenuOpen] = useState(false);

  const togglePersonalInfoSubMenu = () => {
    setIsPersonalInfoSubMenuOpen(!isPersonalInfoSubMenuOpen);
  };

  const toggleApplicationsSubMenu = () => {
    setIsApplicationsSubMenuOpen(!isApplicationsSubMenuOpen);
  };

  const toggleAttendanceSubMenu = () => {
    setIsAttendanceSubMenuOpen(!isAttendanceSubMenuOpen);
  };

  const toggleDocumentsSubMenu = () => {
    setIsDocumentsSubMenuOpen(!isDocumentsSubMenuOpen);
  };

  return (
    <div>
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu" data-widget="tree">
            <li><h3>HCM (Human Capital Management) </h3></li>
            <li className={`treeview ${isPersonalInfoSubMenuOpen ? 'menu-open' : ''}`}>
              <a href="#" onClick={togglePersonalInfoSubMenu}>
                <i className="fa fa-user" aria-hidden="true" />
                 <span>Personal Info</span>
                <span className="pull-right-container">
                  <i className={`fa ${isPersonalInfoSubMenuOpen ? 'fa-angle-down' : 'fa-angle-left'} pull-right`} />
                </span>
              </a>
              <ul className="treeview-menu" style={{ display: isPersonalInfoSubMenuOpen ? 'block' : 'none' }}>
                <li><a href="/myprofile"><i className="fa fa-angle-right" aria-hidden="true" /> Employee</a></li>
                <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Leave Balance</a></li>
                <li><a href="/updateprofile"><i className="fa fa-angle-right" aria-hidden="true" /> Update My Profile</a></li>
                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Services</a></li>
                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Payroll</a></li>
              </ul>
            </li>
            <li className={`treeview ${isApplicationsSubMenuOpen ? 'menu-open' : ''}`}>
              <a href="#" onClick={toggleApplicationsSubMenu}>
                <i className="fa fa-desktop" aria-hidden="true" />
                <span>Applications</span>
                <span className="pull-right-container">
                  <i className={`fa ${isApplicationsSubMenuOpen ? 'fa-angle-down' : 'fa-angle-left'} pull-right`} />
                </span>
              </a>
              <ul className="treeview-menu" style={{ display: isApplicationsSubMenuOpen ? 'block' : 'none' }}>
                <li><a href="/employee"><i className="fa fa-angle-right" aria-hidden="true" /> Application Details</a></li>
                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Leave</a></li>
                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> On Duty</a></li>
                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Shift Change</a></li>
                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> On Tour</a></li>
                <li><a href="/empDetails"><i className="fa fa-angle-right" aria-hidden="true" /> Employee</a></li>
                <li><a href="/admin"><i className="fa fa-angle-right" aria-hidden="true" /> Authorisation</a></li>
                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Attendance Rectification</a></li>
                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Rfc Canteen Recharge</a></li>
              </ul>
            </li>
            <li className={`treeview ${isAttendanceSubMenuOpen ? 'menu-open' : ''}`}>
              <a href="#" onClick={toggleAttendanceSubMenu}>
                <i className="fa fa-calendar" aria-hidden="true" />
                <span>Attendance</span>
                <span className="pull-right-container">
                  <i className={`fa ${isAttendanceSubMenuOpen ? 'fa-angle-down' : 'fa-angle-left'} pull-right`} />
                </span>
              </a>
              <ul className="treeview-menu" style={{ display: isAttendanceSubMenuOpen ? 'block' : 'none' }}>
                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Self Attendance</a></li>
                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Shift</a></li>
                <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" /> Attendance Report</a></li>
              </ul>
            </li>
            <li className={`treeview ${isDocumentsSubMenuOpen ? 'menu-open' : ''}`}>
              <a href="#" onClick={toggleDocumentsSubMenu}>
                <i className="fa fa-file-text" aria-hidden="true" /> <span>Documents</span>
                <span className="pull-right-container">
                  <i className={`fa ${isDocumentsSubMenuOpen ? 'fa-angle-down' : 'fa-angle-left'} pull-right`} />
                </span>
              </a>
              <ul className="treeview-menu" style={{ display: isDocumentsSubMenuOpen ? 'block' : 'none' }}>
                <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> General Circulars</a></li>
                <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Promotions Circulars</a></li>
                <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> New Joinings</a></li>
                <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Resignations</a></li>
                <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Quotes</a></li>
                <li><a href="/"><i className="fa fa-angle-right" aria-hidden="true" /> Articles</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-print" aria-hidden="true" /> <span> Download Payslip </span>
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
};

export default Sidebar;













