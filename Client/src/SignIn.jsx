
// import { Link } from "react"
import "./App.css"
export default function SignIn() {
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
                <h2 className="text-primary mb-3">SignIn</h2>
              <form>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                <label className="form-label" >Email address</label>
                 <input type="email" id="form1Example13" className="form-control form-control-lg" />
                 
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                <label className="form-label" >Password</label>
                 <input type="password" id="form1Example23" className="form-control form-control-lg" />
                 
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                 {/* <!-- Checkbox --> */}
                 <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3"  />
                    <label className="form-check-label" > Remember me </label>
                 </div>
                 {/* <Link to="#">Forgot password?</Link> */}
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                <button type="submit" className="btn btn-primary btn-lg btn-block mx-3">Register</button>
    

                

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
