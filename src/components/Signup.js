import React,{useState} from "react";
import { useNavigate,Link } from "react-router-dom";

function Signup({setIsLoggedIn}){
   const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    username:'',
    email: "",
    password: "",
    

  });
  let navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
        fetch('https://grace-portfolio-app.onrender.com/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstname: formData.firstname,
            lastname: formData.lastname,
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        })
        .then(response => {
          if (response.ok) {
            // setIsLoggedIn(true);
            navigate("/");
          } else {
            throw new Error('Something went wrong');
          }
        })
        .catch(error => {
          console.error(error);
        });   
      
    }
    return (
        <div className="contained">
          <h1 className="text-center mb-4">Sign Up</h1>

          <form onSubmit={handleSubmit} className="row g-3">
          <center>
        <div className="form-group mb-2 col-md-6">
          {/* <label htmlFor="firstname">First Name</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstname"
            id="firstname"
            onChange={handleChange}
            value={formData.firstname}
            required
          />
        </div>
        <div className="form-group mb-2 col-md-6">
          {/* <label htmlFor="lastname">Last Name</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastname"
            id="lastname"
            onChange={handleChange}
            value={formData.lastname}
            required
          />
        </div>
        <div className="form-group mb-2 col-6 align-items-center">
          {/* <label htmlFor="username">Username</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            id="username"
            onChange={handleChange}
            value={formData.username}
            // required
          />
        </div>
        <div className="form-group mb-2 col-md-6">
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>
        <div className="form-group mb-4 col-md-6">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>
        </center>
        <center><button type="submit" className="btn btn-primary mb-4">Submit</button></center>

        <center>
        <p className="forgot-password text-right">
          Already registered <Link to="/">Login?</Link>
        </p>
        </center>
      </form>
      
        </div>
    )
}
export default Signup