  import React, { useState } from 'react'
  import '../css/custome.css';
  import '../css/component.css';
  import '../css/style.css';
  import Header from '../pages/Header';
  import pancard  from '../assets/images/pancard.jpg';
  import adhar from '../assets/images/aadhar-card.jpg';
  import licence from '../assets/images/driving-licence.jpg';
  import passport from '../assets/images/passport.jpg';
  import profilePick from '../assets/images/user2-160x160.jpg';
  import marrigeRing from '../assets/images/ring-icon.png';
  import incharge from '../assets/images/incharges.png';
  import Footer from '../pages/Footer';

   
   const UserProfile = () => {

    const [isContentVisible, setIsContentVisible] = useState(true);
    const [show, setShow] =useState (true);
    const [contentShow , setContentShow] = useState(true);
    const [family ,setFamily] = useState (true);  
    const [qualification ,setQualification] = useState (true);
    const [isOpen, setIsOpen] = useState(false);
    const [isMarrige , setIsMarrige] = useState(false);
    const [isIdentification, setIsidentification] = useState (false);
    const [iscorrespondance , setIscorrespondance] = useState (false);
    const [ispermanentAdd , setIspermanentAdd] = useState (false);
    const [isfamilyDetails , setIsFamilyDetails] = useState (false);
    const [isqualificationDetails , setIsqualificationDetails ] = useState (false);
    const [isLeaveApp , setIsApp] = useState (false);

    
      const ApplyLeaveModal = () =>{

      setIsApp(true);
    };
     
    const closeApplyLeave = () =>{
     setIsApp(false);
    };


    const openModal = () => {
      setIsOpen(true);
    };

  
    const closeModal = () => {
      setIsOpen(false);
    };
    
    const showModal = () =>{
      setIsMarrige(true);
    }
   const hideModal = () =>{
       setIsMarrige(false);
   };
  
    const openModalIdentify = () =>{
      setIsidentification (true);
    }
  
    const closedModalIdentify = () =>{
      setIsidentification (false);
    };

   const openAddressModal = () => {
        setIscorrespondance (true);

   } ;

   const closeAdrressModal = () => {
    setIscorrespondance (false);
   };

   const openPermanentAddress = () => {
    setIspermanentAdd (true);

   };

   const closePermanentAdd = () => {

    setIspermanentAdd(false);

  };

  const openFamilyDetails = () => {
    setIsFamilyDetails(true);
  };

  const closeFamilyDetails =() =>{
    setIsFamilyDetails(false);

  };
const openQulification = () => {

  setIsqualificationDetails (true);

};

const closeQulification = ()=> {
    setIsqualificationDetails (false);
}

  return (
    <div>
    <Header />
    
  <div className="fixed skin-purple " style= {{height:'auto',minHeight:"100%"}}>

  {isLeaveApp  &&(
      <div class="md-modal md-effect-10" id="myused-leaves">
  <div className="modal-content">
    <div className="close-popup text-right clearfix">
      <h5>Leave Register for the year 2017... CL</h5>
      <a style={{cursor: 'pointer'}} className="md-close"onClick={closeApplyLeave}>
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
       {/*-- leaves-status --*/}
  </div>
</div>

)}
    
 {/*-- Marrige Details Model Popup --*/}
  <div>
    
     {isMarrige && (

  <div className="md-modal md-effect-10 update-close" id="mrz-dtl-update">
      <div className="modal-content">
        <div className="close-popup text-right clearfix">
          <h5>Update  Marital Status </h5>

          <a style={{cursor: 'pointer'}} className="md-close" onClick ={hideModal}>
          <i className="fa fa-times" aria-hidden="true" /></a>
        </div>
        <div className="modal-body text - center  sm-4 mt-3">
          <form className="form form-horizontal">
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Date of Marraige :</label>
              <div className="col-md-8 col-sm-8">
                <div className="input-group date">
                  <div className="input-group-addon">
                    <i className="fa fa-calendar" />
                  </div>
                  <input type="text" className="form-control pull-right" id="datepicker" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Marital Status :</label>
              <div className="col-md-8 col-sm-8">
                <select className="form-control">
                  <option>Select Status</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                  <option>widowed</option>
                </select>
              </div>
            </div>
            <hr />						
            <div className="form-group">
              <div className="col-md-12 col-sm-12">
                <div className="form-navigate">
                  <ul>
                    <li><button className="btn btn-update">Update</button></li>
                    <li><button className="btn btn-reset " onClick={ () =>{setIsMarrige (false)}} >Clear</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
      )}

    </div>

    {/*-- identification Details --*/}

    {isIdentification && (
    <div className="md-modal md-effect-10 update-close" id="indentify-update">
      <div className="modal-content">
   
        <div className="close-popup text-right clearfix" onClick ={closedModalIdentify}>
          <h5>Update  Identification </h5>
          <a href='#' style={{cursor: 'pointer'}} className="md-close">
            <i className="fa fa-times" aria-hidden="true" /></a>
        </div>
        <div className="model-body text-center sm-4 mt-3">
          <form className="form form-horizontal">
            <div className="form-group">
              <label className="col-md-4 col-sm-12">PAN No :</label>
              <div className="col-md-8 col-sm-8">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-credit-card" aria-hidden="true" />
                  </div>
                  <input type="text" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(AAA)-AA9-999A&quot;" data-mask />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12">Aadhar Card No  :</label>
              <div className="col-md-8 col-sm-8">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-credit-card" aria-hidden="true" />
                  </div>
                  <input type="text" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(9999)-9999-9999&quot;" data-mask />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12">Driving Licence No :</label>
              <div className="col-md-8 col-sm-8">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-credit-card" aria-hidden="true" />
                  </div>
                  <input type="text" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(AAAAA)-9999-99999&quot;" data-mask />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12">Passport No :</label>
              <div className="col-md-8 col-sm-8">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-credit-card" aria-hidden="true" />
                  </div>
                  <input type="text" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(A999)-9999&quot;" data-mask />
                </div>
              </div>
            </div>
            <div className="upload_softcopy clearfix">
              <div className="col-lg-3 col-md-3">
                <div className="main-photo-block">
                  <div className="upload-photo-block">
                    <div className="my-div">
                      <div className="droparea_container">
                        <div className="droparea text-center drop1" id="drop1">
                          <img src={pancard} id="file_preview_1" className="img-responsive file_preview_1" />
                        </div>
                      </div>
                      <input type="file" name="file" className="file_1" id="file_1" accept="image/*" style={{display: 'none'}} />
                    </div>
                  </div>
                  {/* upload-photo-block */}
                </div>
                {/* main-photo-block */}
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="main-photo-block">
                  <div className="upload-photo-block">
                    <div className="my-div">
                      <div className="droparea_container">
                        <div className="droparea text-center drop1" id="drop1">
                          <img src={adhar} id="file_preview_1" className="img-responsive file_preview_1" />
                        </div>
                      </div>
                      <input type="file" name="file" className="file_1" id="file_1" accept="image/*" style={{display: 'none'}} />
                    </div>
                  </div>
                  {/* upload-photo-block */}
                </div>
                {/* main-photo-block */}
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="main-photo-block">
                  <div className="upload-photo-block">
                    <div className="my-div">
                      <div className="droparea_container">
                        <div className="droparea text-center drop1" id="drop1">
                          <img src={licence} id="file_preview_1" className="img-responsive file_preview_1" />
                        </div>
                      </div>
                      <input type="file" name="file" className="file_1" id="file_1" accept="image/*" style={{display: 'none'}} />
                    </div>
                  </div>
                  {/* upload-photo-block */}
                </div>
                {/* main-photo-block */}
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="main-photo-block">
                  <div className="upload-photo-block">
                    <div className="my-div">
                      <div className="droparea_container">
                        <div className="droparea text-center drop1" id="drop1">
                          <img src={passport} id="file_preview_1" className="img-responsive file_preview_1" alt='' />
                        </div>
                      </div>
                      <input type="file" name="file" className="file_1" id="file_1" accept="image/*" style={{display: 'none'}} />
                    </div>
                  </div>
                  {/* upload-photo-block */}
                </div>
                {/* main-photo-block */}
              </div>
            </div>{/* upload_softcopy */}
            <hr />						
            <div className="form-group">
              <div className="col-md-12 col-sm-12">
                <div className="form-navigate">
                  <ul>
                    <li><button className="btn btn-update">Update</button></li>
                    <li><button className="btn btn-reset" onClick={() =>{setIsidentification(false)}}>Clear</button></li>
                  </ul>
                </div>
                {/*-- form-navigate --*/}
              </div>
            </div>
          </form>
        </div>
        {/*-- Update-profile-model --*/}
      </div>
    </div>
    )}
   {/*-- contact details model popup --*/}
    <div>
          {isOpen && (
           <div className ="md-modal md-effect-10 update-close" id="contact-details">
              <div className="modal-content">
                <div className="close-popup text-right clearfix">
                  <a style={{ cursor: "pointer" }} className="md-close" onClick={closeModal}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </a>
                  <h5>Update Contact Details</h5>
                  <hr/>
                </div>

                <div className="model-body text-center sm-4 mt-1">
                <div className="update-profile-model">
          <form className="form form-horizontal">						
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Email - 1 :</label>
              <div className="col-md-8 col-sm-8">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-google-plus" aria-hidden="true" />
                  </div>
                  <input type="text" className="form-control" />
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
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Mobile - 1 :</label>
              <div className="col-md-8 col-sm-8">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-mobile" aria-hidden="true" />
                  </div>
                  <input type="text" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(999) 999-9999&quot;" data-mask />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Mobile - 2 :</label>
              <div className="col-md-8 col-sm-8">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-mobile" aria-hidden="true" />
                  </div>
                  <input type="text" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(999) 999-9999&quot;" data-mask />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Landline No - 1 :</label>
              <div className="col-md-8 col-sm-8">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-phone" />
                  </div>
                  <input type="text" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(999) 999-999&quot;" data-mask />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Off Extn - 1 :</label>
              <div className="col-md-8 col-sm-8">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-phone" />
                  </div>
                  <input type="text" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(9999)&quot;" data-mask />
                </div>
              </div>
            </div>
            <hr />
            <div className="form-group">
              <div className="col-md-12 col-sm-12">
                <div className="form-navigate">
                  <ul>
                    <li><button className="btn btn-update">Update</button></li>
                    <li><button className="btn btn-reset" onClick={ () =>{setIsOpen (false)}}>Clear</button></li>
                  </ul>
             </div>
         
              </div>
            </div>
          </form>
        </div>
        </div>
        </div>
      </div>
)}
  </div>
    {/*-- Correspondance Address --*/}

    {iscorrespondance && (
<div className ="md-modal md-effect-10 " id="update-addrs-1">
      <div className="modal-content">
        <div className="close-popup text-right clearfix">

          <h5>Update Correspondance Address :</h5>

          <a style={{cursor: 'pointer'}} className="md-close"><i className="fa fa-times" aria-hidden="true" onClick={closeAdrressModal} /></a>
        </div>
        <div className='model-body text-center sm-4 mt-1'>
        <div className="update-profile-model">
          <form className="form form-horizontal">
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Address - 1 :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="address" placeholder="House No / Plot No" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Address - 2 :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="address2" placeholder="Land Mark" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Address - 3 :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="address3" placeholder="Colony / Area" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Place :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="place" placeholder="Place" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12">District :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="district" placeholder="District" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> State :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="state" placeholder="State" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Pin Code :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="pin-code" placeholder="Pin Code" className="form-control" />
              </div>
            </div>
            <hr />
            <div className="form-group">
              <div className="col-md-12 col-sm-12">
                <div className="form-navigate">
                  <ul>
                    <li><button className="btn btn-update">Update</button></li>
                    <li><button className="btn btn-reset" onClick={ ()=>{setIscorrespondance(false)}}>Clear</button></li>
                  </ul>
                </div>
                {/*-- form-navigate --*/}
              </div>
            </div>
          </form>
        </div>
        {/*-- Update-profile-model --*/}
      </div>
      </div>
    </div>
    )}

    {/*-- Update Permanent Address Model Popup --*/}
    { ispermanentAdd &&(
    <div className="md-modal md-effect-10" id="update-addrs-2">
    <div className="modal-content" >
    <div className="close-popup text-right clearfix">
          <h5>Update Permanent Address :</h5>
          <a style={{cursor: 'pointer'}} className="md-close"><i className="fa fa-times" aria-hidden="true"  onClick={closePermanentAdd} /></a>
        </div>
        <div className="model-body text-center sm-4 mt-3">
          <form className="form form-horizontal">
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Address - 1 :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="address" placeholder="House No / Plot No" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Address - 2 :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="address2" placeholder="Land Mark" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Address - 3 :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="address3" placeholder="Colony / Area" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Place :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="place" placeholder="Place" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12">District :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="district" placeholder="District" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> State :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="state" placeholder="State" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Pin Code :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="pin-code" placeholder="Pin Code" className="form-control" />
              </div>
            </div>
            <hr />
            <div className="form-group">
              <div className="col-md-12 col-sm-12">
                <div className="form-navigate">
                  <ul>
                    <li><button className="btn btn-update">Update</button></li>
                    <li><button className="btn btn-reset" onClick={ () =>setIspermanentAdd (false)}>Clear</button></li>
                  </ul>
                </div>
                {/*-- form-navigate --*/}
              </div>
            </div>
          </form>
        </div>
        {/*-- Update-profile-model --*/}
      </div>
      
    </div>
    )}

    {/*-- FAMILY MODEL POPUP SECTION --*/}

    { isfamilyDetails && (
      <div class="md-modal md-effect-10 update-close" id="add-new-member">
    <div className="modal-content">
    <div className="close-popup text-right clearfix">
          <h5>Update Family Details</h5>
          <a style={{cursor: 'pointer'}} className="md-close"><i className="fa fa-times" aria-hidden="true"  onClick={closeFamilyDetails} /></a>
        </div>
        <div className="model-body text-center sm-4 mt-3">
          <form className="form form-horizontal">
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Relation :</label>
              <div className="col-md-8 col-sm-8">
                <select className="form-control">
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Spouse</option>
                  <option>Brother</option>
                  <option>Sister</option>
                  <option>Son</option>
                  <option>Daughter</option>
                  <option>Aunty</option>
                  <option>Uncle</option>
                  <option>Grand Father</option>
                  <option>Grand Mother</option>
                  <option>Father-In-Law</option>
                  <option>Mother-In-Law</option>
                  <option>Brother-In-Law</option>
                  <option>Sister-In-Law</option>
                  <option>Daughter-In-Law</option>
                  <option>Cousine</option>
                  <option>Guardian</option>
                  <option>Nephew</option>
                  <option>Employee</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Name :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="name" placeholder="Name" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Age :</label>
              <div className="col-md-8 col-sm-8">
                <select className="form-control">
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                  <option>32</option>
                  <option>33</option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Occupation :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="occupation" placeholder="Occupation" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12">Income :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="income" placeholder="income" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Place :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="place" placeholder="Place" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> PF : 
                <input type="checkbox" name="r1" className="minimal" />
              </label>
              <label className="col-md-4 col-sm-12"> ESI :
                <input type="checkbox" name="r1" className="minimal" />
              </label>
              <label className="col-md-4 col-sm-12"> Gratuity :
                <input type="checkbox" name="r1" className="minimal" />
              </label>
            </div>						
            <hr />
            <div className="form-group">
              <div className="col-md-12 col-sm-12">
                <button className="btn btn-update">Update</button>
                <button className="btn btn-reset" onClick={ () => {setIsFamilyDetails(false)}}>Clear</button>
              </div>
            </div>
          </form>
        </div>
        {/*-- Update-profile-model --*/}
      </div>
    </div>
    )}



    {/*-- QUALIFICATION SECTION MODEL POPUP --*/}

      {isqualificationDetails && (

<div class="md-modal md-effect-10 update-close" id="add-qualification">
      <div className="modal-content">
        <div className="close-popup text-right clearfix">
          <h5>Update Qualification</h5>
          <a style={{cursor: 'pointer'}} className="md-close"><i className="fa fa-times" aria-hidden="true"  onClick={closeQulification}/></a>
        </div>
        <div className="update-profile-model">
          <form className="form form-horizontal">
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Qualification :</label>
              <div className="col-md-8 col-sm-8">
                <select className="form-control">
                  <option>Tenth</option>
                  <option>Intermediate</option>
                  <option>Technical</option>
                  <option>ITI</option>
                  <option>Deploma</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Degree :</label>
              <div className="col-md-8 col-sm-8">
                <select className="form-control">
                  <option>Tenth</option>
                  <option>Intermediate</option>
                  <option>Technical</option>
                  <option>ITI</option>
                  <option>Deploma</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Done As :</label>
              <div className="col-md-8 col-sm-8">
                <select className="form-control">
                  <option>Regular</option>
                  <option>Correspondance </option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12"> Place :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="place" placeholder="Place" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 col-sm-12">Board / University :</label>
              <div className="col-md-8 col-sm-8">
                <input type="text" name="district" placeholder="District" className="form-control" />
              </div>
            </div>
            <hr />
            
            <div className="form-group">
              <div className="col-md-12 col-sm-12">
                <button className="btn btn-update">Add Qualification</button>
                <button className="btn btn-reset" onClick={ ()=> {setIsqualificationDetails(false)}}>Clear</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
      )}
    <div>
      <div className="content-wrapper">
        <section className="content">
       
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="quick-links">
                <ul>
                  <li>
                    <div className="inner-quick-links">
                      <a href="#" className="aply-lve">
                        <i className="fa fa-calendar" aria-hidden="true" /> Apply Leave</a>
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
                  <h3 className="box-title"><i className="fa fa-user-circle" aria-hidden="true" /> My Profile</h3>
                  <div className="box-tools pull-right">
                    {/* this buton is hide and show pages */}
              <a
              className="btn btn-box-tool" data-widget="collapse"
              onClick={() =>setIsContentVisible(!isContentVisible)}>
              {isContentVisible ? ( <i className="fa fa-minus" />):(<i className="fa fa-plus" />)}
              </a> 
          </div>
      </div>
         {isContentVisible ? (
               <div className="box-body">
                  <div className="col-md-5">
                    <div className="box">
                      <div className="box-body box-profile">
                        <img className="profile-user-img img-responsive img-circle" src={profilePick} alt="User profile_picture" />
                        <h3 className="profile-username text-center">Srikanth Zeal - <span className="dign-emp">Seo Analyst</span></h3>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>Employee Code</td><td>: 9325875</td>
                            </tr>
                            <tr>
                              <td>Department</td><td>: Digital Marketing </td>
                            </tr>
                            <tr>
                              <td>Status</td><td>: General</td>
                            </tr>
                            <tr>
                              <td>Place</td><td>: Ramoji Film City</td>
                            </tr>
                            <tr>
                              <td>Company</td><td>: Usha Kiran Movies Pvt Ltd</td>
                            </tr>
                            <tr>
                              <td>Date Of Joining</td><td>: 11/04/2016</td>
                            </tr>
                            <tr>
                              <td>Date Of Birth</td><td>: 02/02/2000</td>
                            </tr>
                            <tr>
                              <td>PF Number</td><td>: AP/HYD/0016322/000/006622</td>
                            </tr>
                            <tr>
                              <td>UAN (PF) Number</td><td>: 100699939874</td>
                            </tr>
                            <tr>
                              <td>ESI Number</td><td>: </td>
                            </tr>
                            <tr>
                              <td>Blood Group</td><td>: O-</td>
                            </tr>
                            <tr>
                              <td>Mediclaim No (UHID)</td><td>: NIC.15674364</td>
                            </tr>
                            <tr>
                              <td>Sum Insured</td><td>: Rs. 300000.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                 
                    </div>
                    
                  </div>  
                  
                  
                  <div className="col-md-7">
                    {/* About Me Box */}
                    <div className="box my-details-block">
                      <div className="box-header with-border">
                        <h3 className="box-title">
                        <i className="fa fa-user-circle" aria-hidden="true" /> My Details</h3>
                      </div>
                      {/* /.box-header */}
                      <div className="box-body">
                        
                        <strong><i className="fa fa-phone-square" aria-hidden="true" /> Contact Details</strong>

                        <div className="edit-block">
    
                       
                           <a onClick={openModal} style={{cursor: 'pointer'}}  className="md-trigger" data-modal="contact-details" data-toggle="tooltip" data-placement="top" title data-original-title="Edit">
                          <strong>< i  className="fa fa-pencil-square-o"  aria-hidden="true"  /></strong></a> 
                        
                          </div>
                      
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>Email ID</td><td>: srinuvas.irri@gmail.co</td>
                            </tr>
                            <tr>
                              <td>Mobile Number</td><td>: 8522994143 </td>
                            </tr>
                            <tr>
                              <td>Landline No</td><td>: </td>
                            </tr>
                            <tr>
                              <td>Extn</td><td>: </td>
                            </tr>
                          </tbody>
                        </table>
                        <hr />
                        <strong><i className="fa fa-book margin-r-5" /> Education Details </strong>
                        <div className="edit-block">
                        <a href="#scroll-educate" data-toggle="tooltip" data-placement="top" title data-original-title="Edit">
                          <strong><i className="fa fa-pencil-square-o" aria-hidden="true" /></strong></a>

                         </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td style={{width: 232}}>Qualification </td><td>:  BA(CA),ITI,SSC</td>
                            </tr>
                          </tbody>
                        </table>
                        <hr />
                        <strong><img src={marrigeRing} alt="marrige_Ring" /> Marital Status</strong>
                        <div className="edit-block">
                         
                          <a style={{cursor: 'pointer'}} className="md-trigger" data-modal="mrz-dtl-update" data-toggle="tooltip" data-placement="top"    onClick={showModal} title data-original-title="Edit">
                        <strong><i className="fa fa-pencil-square-o" aria-hidden="true" />
                        </strong>
                        </a>
                        
                        

                        
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td style={{width: 232}}>Marital Status</td><td>:   Single</td>
                            </tr>
                            <tr>
                              <td style={{width: 232}}>Date Of Marriage</td><td>: </td>
                            </tr>
                          </tbody>
                        </table>
                        <hr />

                        <strong><i className="fa fa-user" aria-hidden="true" /> Identification Details</strong>

                        <div className="edit-block">
                          
                          <a style={{cursor: 'pointer'}} className="md-trigger" data-modal="indentify-update" data-toggle="tooltip" data-placement="top" title data-original-title="Edit" onClick={openModalIdentify}><strong>
                          <i className="fa fa-pencil-square-o" aria-hidden="true" /></strong></a>
                       
                          </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td style={{width: 232}}>PAN Card No</td><td>: </td>
                            </tr>
                            <tr>
                              <td style={{width: 232}}>Aadhar Card No</td><td>: </td>
                            </tr>
                            <tr>
                              <td style={{width: 232}}>Driving Licence No</td><td>: </td>
                            </tr>
                            <tr>
                              <td style={{width: 232}}>Passport No</td><td>: </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* /.box-body */}
                    </div>
                  </div>
                 
                </div>
                    ) : null}
              </div>
            
            </div>
            
 </div>
         
          {/*-- adress section --*/}
          <div className="row">
            <div className="col-md-12">
              <div className="box nav-jnhs">
                
                <div className="box-body">
                  <div className="address-block clearfix">
                    <div className="col-md-12 col-sm-12 text-left">
                      <strong><i className="fa fa-map-marker margin-r-5" /> Location</strong>
                    </div>
                    <hr />
                    <div className="col-md-6 col-sm-12 loct-add">
                      <div className="add-title clearfix">
                        <h3> Correspondance Address :</h3>
                        <div className="edit-block">


                          <a onClick={openAddressModal} style={{cursor: 'pointer'}} className="md-trigger" data-modal="update-addrs-1" data-toggle="tooltip" data-placement="top" title data-original-title="Edit">
                          <strong><i className="fa fa-pencil-square-o" aria-hidden="true" /></strong></a>
                      
                          </div>
                      </div>
                      <p>H NO: 24/60,<br /> Land mark: Almas Restaurant,<br /> S R Nagar, <br />Hyderabad - 500016, <br />Dist - Rangareddy, <br />State - Telangana</p>
                    </div>
                    <div className="col-md-6 col-sm-12 loct-add" style={{borderRight: 0}}>
                      <div className="add-title clearfix">
                        <h3> Permanent Address :</h3>
                        <div className="edit-block">
                  
                         <a onClick={openPermanentAddress} style={{cursor: 'pointer'}} className="md-trigger" data-modal="update-addrs-2" data-toggle="tooltip" data-placement="top" title data-original-title="Edit">
                         <strong><i className="fa fa-pencil-square-o" aria-hidden="true" /></strong></a>
                    
                        </div>
                     
                      </div>	
                      <p>H NO: 24/60,<br /> Land mark: Almas Restaurant,<br /> S R Nagar, <br />Hyderabad - 500016, <br />Dist - Rangareddy, <br />State - Telangana</p>
                    </div>
                  </div>         
                </div>
              </div>
          
            </div>
                
          
          </div>
      
          <div className="row">
       
            <div className="col-md-12">
              <div className="box nav-jnhs">
                <div className="box-header with-border">
                  <h3 className="box-title"><img src={incharge} alt="reporting incharges" /> Reporting Incharges</h3>
                  <ul className="nav navbar-right panel_toolbox">
                    <li>
                    <a
              className="btn btn-box-tool" 
              onClick={() =>setShow(!show)}>
                 {show ? ( <i className="fa fa-minus" />):(<i className="fa fa-plus" />)}
            </a> 
                    </li>
                  </ul>
                </div>
                
                <div className="box-body">
                
                  <div className="col-md-12 col-sm-12">
                    
                    <div className="box">
                    {show ? (
                      <div className="box-body box-profile">
                        <div className="incharge-block">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Status</th>
                                <th>Incharge Name</th>
                                <th>Incharge Designation</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Section Incharge</td>
                                <td>Suresh Babu Madugula</td>
                                <td>Assistant Project Manager</td>
                              </tr>
                              <tr>
                                <td>Department Incharge</td>
                                <td>Prasad T</td>
                                <td>Deputy General Manager-IT</td>
                              </tr>
                              <tr>
                                <td>HR Incharge</td>
                                <td>Sree Valli Kolli T</td>
                                <td>Senior Executive - HR</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                          ) : null}  
                    </div>
               
                  </div>  
                           
                </div>
             
              </div>
            </div>
          </div>
          {/*-- leave Balance section --*/}
          <div className="row">
            <div className="col-md-12">
              <div className="box nav-jnhs">
                <div className="box-header with-border">
                  <h3 className="box-title"><i className="fa fa-line-chart" aria-hidden="true" /> Leave Balance for the year 2017</h3>
                  <ul className="nav navbar-right panel_toolbox">
                    <li>
              <a
               className="btn btn-box-tool" 
               onClick={() =>setContentShow(!contentShow)}>
                {show ? ( <i className="fa fa-minus" />):(<i className="fa fa-plus" />)}
              </a>

                  </li>
                  </ul>
                </div>
               
                <div className="box-body">
                  { contentShow ? (
                  <div className="col-md-12 col-sm-12 ">
                    {/* Profile Image */}
                    <div className="box">
                      <div className="box-body box-profile">
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
                                    <td><a style={{cursor:'pointer'}} className="md-trigger" data-modal="myused-leaves" onClick={ApplyLeaveModal}>11.00</a></td>
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
                                    <td><a style ={{cursor: 'pointer'}} className="md-trigger" data-modal="myused-leaves"onClick={ApplyLeaveModal} >3.00</a></td>
                                    <td>00</td>
                                    <td>3.00</td>
                                    <td>18.00</td>
                                  </tr>
                                  <tr>
                                    <td>LOP</td>
                                    <td />
                                    <td><a  style ={{cursor: 'pointer'}} className="md-trigger" data-modal="myused-leaves" onClick={ApplyLeaveModal} >3.00</a></td>
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
                      {/* /.box-body */}
                    </div>
                    {/* /.box */}
                  </div>    
                  ) :null }
                </div>
              </div>
            </div>
          </div>{/* rows  */}

          {/*-- Family details update --*/}
          
          <div className="row">
            <div className="col-md-12">
              <div className="box nav-jnhs">
                <div className="box-header with-border">
                  <h3 className="box-title"><i className="fa fa-users" aria-hidden="true" /> Update Family Profile</h3>
                  <ul className="nav navbar-right panel_toolbox">
                    <li>
                      <div className="alert alert-danger hr-approval alert-dismissible fade in" role="alert">
                        Waiting for HR Approval.
                      </div>
                    </li>
                    <li>
                         <a onClick={openFamilyDetails} className="add-new-btn md-trigger" data-modal="add-new-member" data-toggle="tooltip" data-placement="top" title data-original-title="Edit">
                        <i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                         </li>
                   
                   
                        
                  <li>
                     
           <a
              className="btn btn-box-tool" 
              onClick={() =>setFamily(!family)}>
                 {show ? ( <i className="fa fa-minus" />):(<i className="fa fa-plus" />)}
              </a> 
                
                    </li>
                  </ul>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  {family ?(
                  <div className="col-md-12 col-sm-12">
                    {/* Profile Image */}
                    <div className="box">
                      <div className="box-body box-profile">
                        <div className="profile-title clearfix"> 
                          <div className="col-md-6 col-sm-6" />
                          <div className="col-md-6 col-sm-6">
                            <a className="edit-btn add-member" id="add_row"><i className="fa fa-user-plus" aria-hidden="true" /> Add New Member</a>
                          </div>
                        </div>
                        <div className="edit-profile-info clearfix">
                          <table className="table table-bordered row_add">
                            <thead>
                              <tr id="addr">
                                <th> Sl/No</th>
                                <th className="hidden-xs hidden-desktop"> Del</th>
                                <th> Relation</th>
                                <th> Name</th>
                                <th> Age</th>
                                <th> Occupation</th>
                                <th> Income</th>
                                <th> Place</th>
                                <th> PF</th>
                                <th> ESI</th>
                                <th> Grat uity</th>
                                <th className="hidden-desktop" />
                                <th className="hidden-desktop" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><label>1</label></td>
                                <td className="hidden-desktop">
                                  <div className="family-dtl">
                                    <label>
                                      <input type="checkbox" className="minimal" />
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Father </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Srikanth Reddy </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> 70 </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Rtd Gov Emp </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> 10000.00 </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Hyderabad </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                  </div>
                                </td>
                                <td>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                  </div>
                                </td>
                                <td style={{textAlign: 'center'}} className="hidden-desktop">
                                  <a id="delete_row" className="btn btn-default fly-row delete-btn"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                  <a id="edit-row" className="btn btn-default fly-row edit-row"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td className="hidden-desktop">
                                  <div className="family-dtl">
                                    <label>
                                      <input type="checkbox" className="minimal" />
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Mother </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Krishnaveni Reddy </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> 50 </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Gov Emp </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> 20000.00 </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Hyderabad </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <i className="fa fa-check" aria-hidden="true" />
                                  </div>
                                </td>
                                <td>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <i className="fa fa-check" aria-hidden="true" />
                                  </div>
                                </td>
                                <td style={{textAlign: 'center'}} className="hidden-desktop">
                                  <a id="delete_row" className="btn btn-default fly-row delete-btn">
                                    <i className="fa fa-trash-o" aria-hidden="true" /></a>
                                  <a id="edit-row" className="btn btn-default fly-row edit-row"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td className="hidden-desktop">
                                  <div className="family-dtl">
                                    <label>
                                      <input type="checkbox" className="minimal" />
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Brother </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Venkat Reddy </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> 29 </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> private Emp </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> 10000.00 </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Hyderabad </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                  </div>
                                </td>
                                <td>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                  </div>
                                </td>
                                <td style={{textAlign: 'center'}} className="hidden-desktop">
                                  <a href= "/" id="delete_row" className="btn btn-default fly-row delete-btn"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                  <a href="/" id="edit-row" className="btn btn-default fly-row edit-row"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td className="hidden-desktop">
                                  <div className="family-dtl">
                                    <label>
                                      <input type="checkbox" className="minimal" />
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Sister </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Jaishree </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> 25 </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Student </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> 00 </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Hyderabad </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                  </div>
                                </td>
                                <td>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                  </div>
                                </td>
                                <td style={{textAlign: 'center'}} className="hidden-desktop">
                                  <a href='#' id="delete_row" className="btn btn-default fly-row delete-btn"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                  <a  href='#' id="edit-row" className="btn btn-default fly-row edit-row"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>{/*-- edit-profile-info --*/}
                      </div>
                      {/* /.box-body */}
                    </div>
                    {/* /.box */}
                  </div>
                  ) :null }           
                </div>
              </div>
            </div>
          </div>{/* rows  */}

          {/*-- Qualification Update Section --*/}

          <div className="row" id="scroll-educate">
            <div className="col-md-12">
              <div className="box nav-jnhs">
                <div className="box-header with-border">
                  <h3 className="box-title"><i className="fa fa-graduation-cap" aria-hidden="true" onClick={closeQulification} /> Update Qualification</h3>
                  <ul className="nav navbar-right panel_toolbox">
                    <li>
                      <div className="alert alert-danger hr-approval alert-dismissible fade in" role="alert">
                        Waiting for HR Approval.
                      </div>
                    </li>
                    <li>
                      <a onClick={openQulification}  className="add-new-btn md-trigger" id="add_qualify" data-modal="add-qualification" data-toggle="tooltip" data-placement="top" title data-original-title="Edit">
                     <i className="fa fa-pencil-square-o" aria-hidden="true" /></a> 
                     </li>
                       
                    <li>
             
                    <a
              className="btn btn-box-tool" 
              onClick={() =>setQualification(!qualification)}>
                 {show ? ( <i className="fa fa-minus" />):(<i className="fa fa-plus" />)}
            </a> 
                      
                      
                      {/* <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" /></button> */}
                       
                    
                    </li>
                  </ul>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  {qualification ? (
                  <div className="col-md-12 col-sm-12">
                    {/* Profile Image */}
                    <div className="box">
                      <div className="box-body box-profile">
                        <div className="profile-title clearfix"> 
                          <div className="col-md-6 col-sm-6" />
                          <div className="col-md-6 col-sm-6">
                            <button className="edit-btn add-member" id="add_row">
                            <i className="fa fa-user-plus" aria-hidden="true" /> Add New Member</button>
                          </div>
                        </div>
                        <div className="edit-profile-info clearfix">
                          <table className="table table-bordered new_qualify">
                            <thead>
                              <tr id="qualify">
                                <th> Sl/No</th>
                                <th className="hidden-desktop"> Del</th>
                                <th> Qualification</th>
                                <th> Degree</th>
                                <th> Done As</th>
                                <th> Place</th>
                                <th> Board / University</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><label>1</label></td>
                                <td className="hidden-desktop">
                                  <div className="family-dtl">
                                    <label>
                                      <input type="checkbox" />
                                    </label>
                                  </div>
                                </td>
                                <td>
                                <div className="family-dtl">
                                <label> Tenth </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> SSC </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Regular </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Orissa </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Board Of Secondary Education </label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td className="hidden-desktop">
                                  <div className="family-dtl">
                                    <label>
                                      <input type="checkbox" />
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Intermediate </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> BA (CA) </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Correspondance </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Noida </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> SR Secondary School </label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td className="hidden-desktop">
                                  <div className="family-dtl">
                                    <label>
                                      <input type="checkbox" />
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Technical </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Electrical Engneering </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Regular </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> Orissa </label>
                                  </div>
                                </td>
                                <td>
                                  <div className="family-dtl">
                                    <label> NCVT </label>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>{/*-- edit-profile-info --*/}
                      </div>
                      
                      {/* /.box-body */}
                    </div>
                    {/* /.box */}
                  
                  </div>
                      ) :null }          
                </div>
              </div>
            </div>
          </div>{/* rows  */}
        </section>
        {/* /.content */}
      </div>
     <div class="md-overlay-index"></div>
      <div className="main-footer">
     <Footer />
      </div>
    </div>
    </div>


    </div>
    
  )
}
  export default UserProfile;













