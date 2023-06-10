import React, { useState } from "react";
import { Box  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../states/index.js";
import './login.css';

function Login() {
	const [isRightPanelActive, setIsRightPanelActive] = useState(false);
	const dispatch = useDispatch();
  	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	  });

	  const handleChange = (e) => {
		
		setFormData({ ...formData, [e.target.name]: e.target.value });
	  };
	
	  const handleRegister = (e) => {
		e.preventDefault();
	
		fetch("http://localhost:3001/auth/register", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify(formData),
		})
		  .then((response) => response.json())
		  .then((data) => {
			// Handle successful registration
			handleSignIn()
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				password: "",
			  });
			handleChange()
			console.log("User registered successfully");
			
		  })
		  .catch((error) => {
			// Handle registration error
			console.error(error);
		  });
	  };


 const handleLogin = (e) => {
		e.preventDefault();
		fetch("http://localhost:3001/auth/login", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify(formData),
		})
		  .then((response) => response.json())
		  .then((data) => {
			dispatch(
				setLogin({
				  user: data.user,
				  token: data.token,
				})
			  );
			  navigate("/home");
			  console.log("User logged in successfully");
	  
			// Reset form data to blank values
			setFormData({
			  email: "",
			  password: "",
			});
		  })
		  .catch((error) => {
			// Handle login error
			console.error(error);
		  });
	  };

  const handleSignIn = () => {
    setIsRightPanelActive(false);
  };

  const handleSignUp = () => {
    setIsRightPanelActive(true);
  };

//   const handleSubmit1 = (e) => {
//     e.preventDefault();
//   };

//   const handleSubmit2 = (e) => {
//     e.preventDefault();
//   };

  return (
    <>
	<Box
        width="100%"
        backgroundColor="#222"
        p="1rem 6%"
        textAlign="center"
		height="11%"
      >
        <div class="content">
		<Box component="div" sx={{ display: 'inline' }}> 

			<img 
                style={{objectFit:"cover",
                borderRadius:"10%"}} 
                width={50} height={50} 
                alt='logo' 
                src={`http://localhost:3001/assets/logo.png`}
                
            /> 
			
		</Box>
 
		</div>
        
      </Box>
	<Box sx={{ mx: 'auto', width: '758px', mt:5 }}>
     
  
      <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
        <div className="container__form container--signup">
          <form  className="form" onSubmit={handleRegister} >
            <h2 className="form__title">Sign Up</h2>
            <input type="text" placeholder="First Name" className="input"  
			name="firstName"
			value={formData.firstName}
			onChange={handleChange}
			required></input>
			<input type="text" placeholder="Last Name" className="input" 
			name="lastName"
			value={formData.lastName}
			onChange={handleChange}
			required></input>
            <input type="email" placeholder="Email" className="input"   
			name="email"
			value={formData.email}
			onChange={handleChange}
			required></input>
            <input type="password" placeholder="Password" className="input" 
			name="password"
			value={formData.password}
			onChange={handleChange}
			required></input>
            <button className="btn" type="submit">Sign Up</button>
          </form>
        </div>

        <div className="container__form container--signin">
          <form  className="form" onSubmit={handleLogin}>
            <h2 className="form__title">Sign In</h2>
			<input type="email" placeholder="Email" className="input"   
			name="email"
			value={formData.email}
			onChange={handleChange}
			required></input>
            <input type="password" placeholder="Password" className="input" 
			name="password"
			value={formData.password}
			onChange={handleChange}
			required></input>
            <h3 className="link">Forgot your password?</h3>
            <button className="btn">Sign In</button>
          </form>
        </div>

        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btn" onClick={handleSignIn}>Sign In</button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btn" onClick={handleSignUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
	   
</Box>
    </>
  );
}

export default Login;
