import Login from "./scenes/loginPage/Login.jsx"
import HomePage from "./scenes/homePage/index.jsx"
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter , Routes ,Route  } from "react-router-dom";

function App() {
  return (
      
     <div className="app">
      <BrowserRouter>
       
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        
        </BrowserRouter>
        
        {/* <Register></Register> */}
      </div>
      
  );
}

export default App;
