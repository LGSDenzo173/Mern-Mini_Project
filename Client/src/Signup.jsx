
// import { Link } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import "./App.css"
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

export default function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handlesubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:9000/register', {name,email,password})
    .then(result=>console.log(result))
    navigate('/signin')

  }

    return (
      <div>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid" alt="Phone image"/>
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <h2 className="text-primary mb-3">Sign Up</h2>
                <form onSubmit={handlesubmit}>
                     {/* <!-- Name input --> */}
                  <div className="form-outline mb-4">
                  <label className="form-label" >Name</label>
                   <input type="text" id="form1Example13" className="form-control form-control-lg" placeholder="Enter Your Name" 
                   onChange={(e)=>setName(e.target.value)} />
                   
                  </div>
                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                  <label className="form-label" >Email address</label>
                   <input type="email" id="form1Example13" className="form-control form-control-lg"
                   placeholder="Enter Your Email"
                   onChange={(e)=>setEmail(e.target.value)}
                   />
                   
                  </div>
  
                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                  <label className="form-label" >Password</label>
                   <input type="password" id="form1Example23" className="form-control form-control-lg"
                   placeholder="Enter Your Password"
                   onChange={(e)=>setPassword(e.target.value)}
                   />
                   
                  </div>
  
                  <div className="d-flex justify-content-around align-items-center mb-4">
                   {/* <!-- Checkbox --> */}
                   {/* <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="form1Example3"  />
                      <label className="form-check-label" > Remember me </label>
                   </div> */}
                   {/* <Link to="#">Forgot password?</Link> */}
                  </div>
  
                  {/* <!-- Submit button --> */}
                  <button type="submit" className="btn btn-primary w-100 btn-lg ">SignUp</button>
                  </form>
                   <p className="text-black-100 my-2">Already Have an Account</p>
                  <div className="my-4">
                  <Link to="/signin" className="btn btn-default btn-lg w-100 border border-black ">Log In</Link>
                  </div>
  
                 
  
                
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  