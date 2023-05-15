
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import BlockIcon from '@mui/icons-material/Block';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import PaymentsIcon from '@mui/icons-material/Payments';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useState } from 'react';
function Navbar() {
  const [selectedValue, setSelectedValue] = useState('12');

  const handleChange = (event) => {
    
    setSelectedValue(event.target.value);
  };

  const pay = () => {
    alert(`${selectedValue} Months pack successfully selected` )
  };
  return (
    <>
    <nav class="navbar navbar-expand-sm  bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="true"><b class="text-primary">EDYODA</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
       
        
        
        <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="true" role="button" data-bs-toggle="dropdown">Courses</a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="true">Computer Science</a></li>
    <li><a class="dropdown-item" href="true">Finance</a></li>
    <li><a class="dropdown-item" href="true">Business Administration</a></li>
  </ul>
</li>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="true" role="button" data-bs-toggle="dropdown">Programs</a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="true">Frontend web developer</a></li>
    <li><a class="dropdown-item" href="true">Backend web developer</a></li>
    <li><a class="dropdown-item" href="true">Full stack developer</a></li>
  </ul>
</li>
      </ul>
      <form class="d-flex ">
    
      <button type="button" class="btn btn-light"><SearchIcon/></button>
      <button type="button" class="btn btn-light">Login</button>
        <button type="button" class="btn btn-primary rounded-5 "><b>JOIN NOW</b></button>
      </form>
    </div>
  </div>
</nav>

<div class="container-fluid text-white bg-dark">
  

<div class="row">
  <div class="col-lg  ps-5"><p class="h1">Access curated courses worth <br/><CurrencyRupeeIcon/><del>18,500</del> at just <span class="text-primary"><CurrencyRupeeIcon/>99</span> per year</p>
  <p class="h3 pb-5"><MenuBookIcon/><span class="text-primary ps-3">100+</span> job relevant courses</p>
  <p class="h3 pb-5"><AccessTimeFilledIcon/><span class="text-primary ps-3"> 20,000+</span> Hours of content</p>
  <p class="h3 pb-5"><LiveTvIcon/><span class="text-primary ps-3">Exclusive</span> webinar access</p>
 <p class="h3 pb-5"><SchoolIcon /><span class="ps-3">Scholarship worth </span><span class="text-primary  ">94,500</span></p>
 <p class="h3 pb-5"><BlockIcon/><span class="text-primary ps-3">Ad Free</span> learning experience</p></div>
  <div class="col-lg-4 bg-white text-dark m-4 rounded">
    <div class="row mt-3">
      <div class="col-6 text-center"><button type="button" class="btn btn-primary rounded-circle ">
  1 
</button>
<p>Sign Up</p></div>
<div class="col-6 text-center">
<button type="button" class="btn btn-primary rounded-circle" >
  2
</button><p>Subscribe</p></div></div>
<p class="h4 text-center">Select your subscription plan</p>

  <div class="form-check border border-2 rounded pb-4" >
  <p class="bg-danger w-25 ms-4">Offer expired</p>
  <input type="radio" class="form-check-input ms-1" disabled checked/>
  
  <label class="form-check-label">12 Months Subscription <span>Total <CurrencyRupeeIcon/>99</span> </label>
</div>
  <div class="form-check border border-2 border-success bg-light success rounded pb-4">
  <p class="bg-success w-50 ms-4">Recommended</p>
  <input type="radio" class="form-check-input ms-1" id="radio1" name="optradio"  
  checked={selectedValue === '12'}
  onChange={handleChange}
  value="12"/>
  
  <label class="form-check-label" for="radio1">12 Months Subscription <span>Total <CurrencyRupeeIcon/>179</span></label>
</div> 
<div class="form-check border border-2 rounded py-4">
  <input type="radio" class="form-check-input m-1" id="radio2" name="optradio" 
  checked={selectedValue === '6'}
  onChange={handleChange}
  value="6"/>
  <label class="form-check-label" for="radio2">6 Months Subscription <span>Total <CurrencyRupeeIcon/>149</span></label>
</div>
<div class="form-check border border-2 rounded py-4">
  <input type="radio" class="form-check-input m-1" id="radio3" name="optradio" 
  checked={selectedValue === '3'}
  onChange={handleChange}
  value="3"/>
  <label class="form-check-label" for="radio3">3 Months Subscription <span>Total <CurrencyRupeeIcon/>99</span></label>
</div>
<hr></hr>
<p>Subscription Fee <b><CurrencyRupeeIcon/>18,500</b></p>
<div class="alert alert-warning border-3 rounded border-danger">
    <strong>Limited time offer</strong><p><RunningWithErrorsIcon/>Offer valid till 25th March 2023<span>Total -<CurrencyRupeeIcon/>18,401</span></p> 
  </div>
  <p><b>Total </b>(Incl. of 18% GST) <b><CurrencyRupeeIcon/>149</b></p>
  <p>{selectedValue} Months package </p>
  <div class="mb-4">
  <button type="button" class="btn btn-outline-danger w-50 ">CANCEL</button>
  <button type="button" class="btn btn-success w-50 " onClick={pay}>PROCEED TO PAY</button>
  </div>
  <button type="button" class="btn btn-dark w-50 mb-4"><PaymentsIcon />Razorpay</button>
  </div>
</div></div>

    </>
   
  )
}
export default Navbar