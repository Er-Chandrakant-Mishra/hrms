import React, { useState } from 'react';
import logo from '../assets/images/employee/company-logo.jpg';
import employee from '../assets/images/employee/employee-pic.jpg';
import quotes from '../assets/images/employee-list-quote.png';
import SureshSir from '../assets/images/employee/pm.jpg';
import shree from '../assets/images/employee/ivanka-tramp.jpg';
import employee2 from '../assets/images/employee/emp-2.jpg';
import Readdy from '../assets/images/employee/emp-1.jpg';
import  EMP  from '../assets/images/employee/emp-3.jpg';
import Emp5 from  '../assets/images/employee/emp-5.jpg';
import chandrababu from '../assets/images/employee/emp-4.jpg';
import Swamy from '../assets/images/employee/emp-6.jpg';
import '../css/custome.css';
import Header from '../pages/Header';
import Footer from '../pages/Footer';



const EmpList = () => {

    const [isContentVisible, setIsContentVisible] = useState(" ");
      
  return (
    <div>
          <Header />
  <div className="content-wrapper">
   <div className="content"> 
      <section className="/">
        {/* Info boxes */}
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="quick-links">
              <ul>
                <li>
                  <div className="inner-quick-links">
                    <a href="/" className="aply-lve"><i className="fa fa-calendar" aria-hidden="true" /> Apply Leave</a>
                  </div>
                </li>
                <li>
                  <div className="inner-quick-links">
                    <a href="/" className="updt-profile"><i className="fa fa-user" aria-hidden="true" /> Update Profile</a>
                  </div>
                </li>
                <li>
                  <div className="inner-quick-links">
                    <a href="/" className="cnten-rchg"><i className="fa fa-mobile" aria-hidden="true" /> Canteen Recharge</a>
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
        <div className="row">
          <div className="col-md-12">
          <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Employee List</h3>
          <div className="box-tools pull-right">
             <a 
              className="btn btn-box-tool"
              onClick={() =>setIsContentVisible(!isContentVisible)}>
                 {isContentVisible ? ( <i className="fa fa-minus" />):(<i className="fa fa-plus" />)}
            </a> 

          </div>
        </div>
              <div className="box-body">
              {isContentVisible ? (
                <div className="main-head-block">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="inner-head-block chrmn text-center">
                      <figure>
                        <a href="/"><img src={logo} className="img-responsive img-circle" alt="" />
                        </a>
                        </figure>
                      <h3><a href="/">Margadarsi Computers</a></h3>
                      <p>Ramoji Film City</p>
                    </div>
                    <hr />
                    <div className="our-achivements">
                      <div className="box box-widget widget-user-2">
                        <div className="widget-user-header bg-yellow">
                          <h3 className="widget-user-username"><i className="fa fa-trophy" aria-hidden="true" /> Achivements</h3>
                        </div>
                        <div className="box-footer no-padding">
                          <ul className="nav nav-stacked">
                            <li><a href="/">Total Projects <span className="pull-right badge bg-blue">31</span></a></li>
                            <li><a href="/">Completed Projects <span className="pull-right badge bg-green">12</span></a></li>
                            <li><a href="/">Future Projects<span className="pull-right badge bg-aqua">5</span></a></li>
                            <li><a href="/">Followers <span className="pull-right badge bg-red">842</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="our-achivements">
                      <div className="box box-widget widget-user-2">
                        <div className="widget-user-header bg-blue">
                          <h3 className="widget-user-username"><img src={quotes} alt="quotes-1" /> Quotes</h3>
                        </div>
                        <div className="box-footer no-padding">
                          <h3>Success</h3>
                          <p>isn't about how much
                            money you make;
                          </p>
                          <p>It's about the  
                            difference you make
                            in people's lives.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-12">
                    <div className="manager-block clearfix">
                      <div className="col-lg-4 col-md-3 col-sm-12">
                        <div className="inner-head-block text-center">
                          <figure><a href="/">
                            <img src={employee} className="img-responsive img-circle" alt=""/>
                            </a>
                            </figure>
                          <h3><a href="/">T Prasad</a></h3>
                          <p>Deputy General Manager - IT</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3 col-sm-12">
                        <div className="inner-head-block project-mgr text-center">
                          <figure><a href="/">
                            <img src={SureshSir} className="img-responsive img-circle" alt=" " />
                            </a>
                            </figure>
                          <h3><a href="/">Madugula Suresh Babu</a></h3>
                          <p>Assistant Project Manager</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3 col-sm-12">
                        <div className="inner-head-block hr-mgr text-center">
                          <figure><a href="/">
                            <img src={shree} className="img-responsive img-circle" alt=" " />
                            </a>
                            </figure>
                          <h3><a href="/">Sree Valli Kolli</a></h3>
                          <p>Senior Executive -HR</p>
                        </div>
                      </div>
                    </div>
                    <div className="all-employee-section clearfix">
                      <div className="company-title">
                        <h3>Team Members</h3>
                        <span className="bg-srtip" />
                      </div>
                      <div className="col-lg-4 col-md-3 col-sm-12">
                        <div className="inner-head-block employee-profile text-center">
                          <figure><a href="/"><img src={Readdy} className="img-responsive img-circle" alt=" " />
                          </a>
                          </figure>
                          <h3><a href="/">Srikanth Reddy</a></h3>
                          <p>SEO Analyst</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3 col-sm-12">
                        <div className="inner-head-block employee-profile text-center">
                          <figure><a href="/"><img src={employee2} className="img-responsive img-circle" alt=" " /></a></figure>
                          <h3><a href="/">Kalpana Yadav</a></h3>
                          <p>SEO Analyst</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3 col-sm-12">
                        <div className="inner-head-block employee-profile text-center">
                          <figure><a href="/"><img src={EMP} className="img-responsive img-circle" /></a></figure>
                          <h3><a href="/">Sahana</a></h3>
                          <p>Call Center Manager</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3 col-sm-12">
                        <div className="inner-head-block employee-profile text-center">
                          <figure><a href="/"><img src={Emp5} className="img-responsive img-circle" alt= " "/></a></figure>
                          <h3><a href="/">Kishor</a></h3>
                          <p>Php Developer</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3 col-sm-12">
                        <div className="inner-head-block employee-profile text-center">
                          <figure><a href="/"><img src={chandrababu} className="img-responsive img-circle"  alt=" "/></a></figure>
                          <h3><a href="/">chandrababu Reddy</a></h3>
                          <p>Sr. Programmer</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3 col-sm-12">
                        <div className="inner-head-block employee-profile text-center">
                          <figure><a href="/"><img src={Swamy} className="img-responsive img-circle"  alt='abc'/></a></figure>
                          <h3><a href="/">Kumara Swamy</a></h3>
                          <p>Store Keeper</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <hr />
                      <div className="text-center view-all-emp">
                        <a href="javascript:void(0)" className="uppercase">Load More ...</a>
                      </div>
                    </div> 
                  </div>
                </div>   
            ) : null} 
              </div>
            </div>
          </div>
        </div>
      </section>
  
    </div>

  </div>
  <div className="md-overlay-index" />
  <div>
  <Footer />
  </div>

</div>
  )
}

export default EmpList;