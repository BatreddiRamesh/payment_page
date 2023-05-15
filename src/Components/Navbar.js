// const bootstrap = require('bootstrap') 
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import BlockIcon from '@mui/icons-material/Block';
function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-sm  bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:void(0)"><b class="text-primary">RAMESH</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
       
        
        
        <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Courses</a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Computer Science</a></li>
    <li><a class="dropdown-item" href="#">Finance</a></li>
    <li><a class="dropdown-item" href="#">Business Administration</a></li>
  </ul>
</li>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Programs</a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Frontend web developer</a></li>
    <li><a class="dropdown-item" href="#">Backend web developer</a></li>
    <li><a class="dropdown-item" href="#">Full stack developer</a></li>
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
  <div class="col-lg"><p class="h3">Access curated courses worth <br/><del>18,500</del> at just <span class="text-primary">99</span> per year</p>
  <p class="h6"><MenuBookIcon/><span class="text-primary">100+</span> job relevant courses</p>
  <p class="h6"><AccessTimeFilledIcon/><span class="text-primary"> 20,000+</span> Hours of content</p>
  <p class="h6"><LiveTvIcon/><span class="text-primary">Exclusive</span> webinar access</p>
 <p class="h6"><SchoolIcon/>Scholarship worth <span class="text-primary">94,500</span></p>
 <p class="h6"><BlockIcon/><span class="text-primary">Ad Free</span> learning experience</p></div>
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
  
  <label class="form-check-label">12 Months Subscription <span>Total 99</span> </label>
</div>
  <div class="form-check border border-2 rounded pb-4">
  <p class="bg-success w-50 ms-4">Recommended</p>
  <input type="radio" class="form-check-input ms-1" id="radio1" name="optradio" value="option1" />
  
  <label class="form-check-label" for="radio1">12 Months Subscription <span>Total 179</span></label>
</div> 
<div class="form-check border border-2 rounded py-4">
  <input type="radio" class="form-check-input m-1" id="radio2" name="optradio" value="option2"/>
  <label class="form-check-label" for="radio2">6 Months Subscription <span>Total 149</span></label>
</div>
<div class="form-check border border-2 rounded py-4">
  <input type="radio" class="form-check-input m-1" id="radio3" name="optradio" value="option3"/>
  <label class="form-check-label" for="radio3">3 Months Subscription</label>
</div>
<hr></hr>
<p>Subscription Fee</p>
<div class="alert alert-warning border-2 rounded border-danger">
    <strong>Limited time offer</strong><p>Offer valid till 25th March 2023</p> 
  </div>
  <p><b>Total </b>(Incl. of 18% GST)</p>
  <div class="mb-4">
  <button type="button" class="btn btn-outline-danger w-50 ">CANCEL</button>
  <button type="button" class="btn btn-success w-50 ">PROCEED TO PAY</button>
  </div>
  </div>
</div></div>

    </>
   
  )
}
export default Navbar