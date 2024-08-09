  import React, { useState } from 'react'
  import '../../css/custome.css';
  import '../../css/component.css';
  import '../../css/style.css';
  import Leaves from '../../assets/images/apply-leave.png';
  import OnDuety from '../../assets/images/onduty-icon.png';
  import ApplyLeaves from '../../assets/images/shiftchange.png';
  import Tour from '../../assets/images/on-tour.png';
  import Author from '../../assets/images/author.png';
  import Attendce from '../../assets/images/attendance.png';
  import Logo from '../../assets/images/company-logos/mc.png';
  import ETV  from '../../assets/images/company-logos/etv.png';
  import UKML  from '../../assets/images/company-logos/ukml.png';
  import dolphin from '../../assets/images/company-logos/dolphin.png';
  import user from  '../../assets/images/user1-128x128.jpg';
  import user2 from '../../assets/images/user-174.jpg';
  import Jane from '../../assets/images/user7-128x128.jpg';
  import John from  '../../assets/images/user6-128x128.jpg';
  import Header from '../../pages/Header';
  import Sidebar from '../../pages/Sidebar';
  import Footer from '../../pages/Footer';

  const SuperAdmin = () => {
  const [pendingApplication ,setPendingApplication] =useState("true");
  const [selfAttendance ,setSelfAttendance] = useState ("true");
  const [balance , setBalance] = useState ("true");
  const [application , setApplication]= useState ("true");
  const [joinings , setJoinnings ] = useState ("true");
  return (
  <div>
    <Header />
   {/*-- Apply Leave popup --*/}
    <div className="md-modal md-effect-10" id="apply-leave">
      <div className="md-content">
        <div className="close-popup clearfix">
          <h5>Apply</h5>
          <a style={{cursor: 'pointer'}} className="md-close"><i className="fa fa-times" aria-hidden="true" /></a>
        </div>
        <div className="leave-application clearfix">
          <div className="col-md-6 col-sm-6">
            <div className="info-box leave-link">
              <span className="info-box-icon bg-aqua"><img src={Leaves} alt="apply_leave" /></span>
              <div className="info-box-content">
                <span className="info-box-number"><a href="#">Apply Leave</a></span>
              </div>
              {/* /.info-box-content */}
            </div>
          </div>
         
          <div className="col-md-6 col-sm-6">
            <div className="info-box leave-link">
              <span className="info-box-icon bg-aqua"><img src={OnDuety} alt="on_duty" /></span>
              <div className="info-box-content">
                <span className="info-box-number">
                  <a href="/">On Duty</a></span>
              </div>
              {/* /.info-box-content */}
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="info-box leave-link">
              <span className="info-box-icon bg-aqua"><img src={ApplyLeaves} alt="leave" /></span>
              <div className="info-box-content">
                <span className="info-box-number">
                  <a href="#">Shift Change</a></span>
              </div>
              {/* /.info-box-content */}
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="info-box leave-link">
              <span className="info-box-icon bg-aqua"><img src={Tour}  alt="apply_leave" /></span>
              <div className="info-box-content">
                <span className="info-box-number"><a href="#">On Tour</a></span>
              </div>
              {/* /.info-box-content */}
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="info-box leave-link">
              <span className="info-box-icon bg-aqua">
                <img src={Author}   alt="apply leave" /></span>
              <div className="info-box-content">
                <span className="info-box-number"><a href="#"> Authorisation</a></span>
              </div>
              {/* /.info-box-content */}
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="info-box leave-link">
              <span className="info-box-icon bg-aqua"><img src={Attendce} alt="apply_leave" /></span>
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
    {/*-- used leaves --*/}
    <div className="md-modal md-effect-10" id="used-leaves">
      <div className="md-content">
        <div className="close-popup clearfix">
          <h5>Leave Register for the year 2017... CL</h5>
          <a style={{cursor: 'pointer'}} className="md-close"><i className="fa fa-times" aria-hidden="true" /></a>
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
    <div>
    <Sidebar/>
  <div className="content-wrapper">
        <section className="content">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="quick-links">
                <ul>
                  <li>
                    <div className="inner-quick-links">
                      <a href="#" className="aply-lve"><i className="fa fa-calendar" aria-hidden="true" /> Apply Leave</a>
                    </div>
                  </li>
                  <li>
                    <div className="inner-quick-links">
                      <a href="#" className="updt-profile"><i className="fa fa-user" aria-hidden="true" /> Update Profile</a>
                    </div>
                  </li>
                  <li>
                    <div className="inner-quick-links">
                      <a href="#" className="cnten-rchg"><i className="fa fa-mobile" aria-hidden="true" /> Canteen Recharge</a>
                    </div>
                  </li>
                  <li>
                    <div className="inner-quick-links">
                      <a href="#" className="quotes"><i className="fa fa-pencil" aria-hidden="true" /> Quotes</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-md-12">
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Pending Applications</h3>
                  <div className="box-tools pull-right">
            
             <a
              className="btn btn-box-tool" 
              onClick={() =>setPendingApplication(!pendingApplication)}> 
                 {pendingApplication ? ( <i className="fa fa-minus" />):(<i className="fa fa-plus" />)}
            </a>
                  </div>
                </div>
                {/* /.box-header */}
                { pendingApplication ? (
                <div className="box-body">
          
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header margadarsi" data-background-color="orange">
                        <img src={Logo} alt="margadarsi_Computers" />
                      </div>
                      <div className="card-content">
                        <p className="category">Margadarsi Computers</p>
                        <h3 className="title">Waiting Approvals : <span className="app-num"> 10</span></h3>
                      </div>
                      <div className="card-footer clearfix text-center">
                        <div className="stats refresh col-md-6" style={{borderRight: '0.1px solid #f2f2f2'}}>
                          <a href="/"> <i className="fa fa-refresh" aria-hidden="true" /> Refresh </a>
                        </div>
                        <div className="stats col-md-6">
                          <a href="/"> <i className="fa fa-arrows-alt" aria-hidden="true" />  View All </a>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header etv" data-background-color="orange">
                        <img src={ETV} alt="etv" />
                      </div>
                      <div className="card-content">
                        <p className="category">ETV</p>
                        <h3 className="title">Waiting Approvals : <span className="app-num"> 5</span></h3>
                      </div>
                      <div className="card-footer clearfix text-center">
                        <div className="stats refresh col-md-6" style={{borderRight: '0.1px solid #f2f2f2'}}>
                          <a href="/"> <i className="fa fa-refresh" aria-hidden="true" /> Refresh </a>
                        </div>
                        <div className="stats col-md-6">
                          <a href="#"> <i className="fa fa-arrows-alt" aria-hidden="true" />  View All </a>
                        </div>
                      </div>
                    </div>
                  </div>  
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header ukml" data-background-color="orange">
                        <img src={UKML} alt="usha kiron movies" />
                      </div>
                      <div className="card-content">
                        <p className="category">Usha Kiron Movies</p>
                        <h3 className="title">Waiting Approvals : <span className="app-num"> 25</span></h3>
                      </div>
                      <div className="card-footer clearfix text-center">
                        <div className="stats refresh col-md-6" style={{borderRight: '0.1px solid #f2f2f2'}}>
                          <a href="#"> <i className="fa fa-refresh" aria-hidden="true" /> Refresh </a>
                        </div>
                        <div className="stats col-md-6">
                          <a href="#"> <i className="fa fa-arrows-alt" aria-hidden="true" />  View All </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header dolphin" data-background-color="orange">
                        <img src={dolphin} alt="dolphin_hotels" />
                      </div>
                      <div className="card-content">
                        <p className="category">Dolphin Hotels</p>
                        <h3 className="title">Waiting Approvals : <span className="app-num"> 10</span></h3>
                      </div>
                      <div className="card-footer clearfix text-center">
                        <div className="stats refresh col-md-6" style={{borderRight: '0.1px solid #f2f2f2'}}>
                          <a href="#"> <i className="fa fa-refresh" aria-hidden="true" /> Refresh </a>
                        </div>
                        <div className="stats col-md-6">
                          <a href="#"> <i className="fa fa-arrows-alt" aria-hidden="true" />  View All </a>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                ) :null }
                <div className="box-footer text-center view-all-emp" style={{borderTop: '1px solid #f4f4f4'}}>
                  <a href="javascript:void(0)" className="uppercase">View All Applications</a>
                </div> 
              </div>
            </div>

          </div>{/* rows  */}
          <div className="row">
            <div className="col-md-12">
              <div className="box">
                <div className="box-header with-border">
                  <h3 className="box-title">Self Attendance Details</h3>
                  <div className="box-tools pull-right">

                
                 <a className="btn btn-box-tool" 
                  onClick={() =>setSelfAttendance (!selfAttendance)}>
                 {selfAttendance ? ( <i className="fa fa-minus" />):(<i className="fa fa-plus" />)}
                 </a>
                    {/* <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button> */}

                  </div>
                </div>
                {/* /.box-header */}

                { selfAttendance ? (
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
                ) :null }

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
               
                 <a className='btn btn-box-tool' onClick={() =>setBalance (!balance)  }>
                    {balance ? ( <i className=' fa fa-minus' />):(<i className='fa fa-plus' />)}
                 </a>
              </div>
            </div>
                {/* /.box-header */}
                { balance ? (
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
                ) : null }
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
                    <a  className='btn btn -box-tool' onClick = { () => setApplication  (! application)}> 
                      {application ? (<i className='fa fa-minus' />):(<i className='fa fa-plus' />)}
                     </a>
                  </div>
                </div>
                {/* /.box-header */}

                { application ? (
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
                ) :null }
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
      
                < a
               className="btn btn-box-tool" 
                onClick={() =>setJoinnings(!joinings)}>
                { joinings ? ( <i className="fa fa-minus" />):(<i className="fa fa-plus" />)}
            </a>
                  </div>
                </div>

                {joinings ? (
                <div className="box-body no-padding">
                  <ul className="users-list clearfix">
                    <li>
                      <img src={user} alt="User_Image" />
                      <a className="users-list-name" href="#">Alexander Pierce</a>
                      <span className="users-list-date">Today</span>
                    </li>
                    <li>
                      <img src={user2} alt="User_Image" />
                      <a className="users-list-name" href="#">Norman</a>
                      <span className="users-list-date">Yesterday</span>
                    </li>
                    <li>
                      <img src={Jane} alt="User Image" />
                      <a className="users-list-name" href="#">Jane</a>
                      <span className="users-list-date">12 Jan</span>
                    </li>
                    <li>
                      <img src={John} alt="User Image" />
                      <a className="users-list-name" href="#">John</a>
                      <span className="users-list-date">12 Jan</span>
                    </li>
                  </ul>
                </div>
                ) : null }
                <div className="box-footer text-center">
                  <a href="javascript:void(0)" className="uppercase">View All</a>
                </div>
              </div>
              
            </div>
          </div>

          <div className="row">

            <div className="col-md-8">
       
              <div className="row">
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="main-footer">
    < Footer />
      </div>
    </div>
    <div className="md-overlay-index" />
 
  </div>
  )
}
  export default SuperAdmin;
