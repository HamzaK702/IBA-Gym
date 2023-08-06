

// export default Form;
import React, { useState } from "react";
import { Box  } from "@mui/material";
 
 
//import "./trainer.css"
function Addtrainer() {


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
	
		fetch("http://localhost:3001/auth/registerTrainer", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify(formData),
		})
		  .then((response) => response.json())
		  .then((data) => {
			// Handle successful registration
			console.log("Trainer added")
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				password: "",
			  });
			handleChange()
			console.log("Trainer registered successfully");
			
		  })
		  .catch((error) => {
			// Handle registration error
			console.error(error);
		  });
	  };

   

  return (
    <>
    
    
    <Box sx={{ mx: 'auto', width: '758px', mt:5, height: '450px' }}>
          <form  className="form" onSubmit={handleRegister} >
            <h2 className="form__title">Add Trainer</h2>
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
            <button className="btn" type="submit">Add Trainer</button>
          </form>
        </Box>
    </>
  );
};

export default Addtrainer;
