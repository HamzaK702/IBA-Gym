import Login from "./scenes/loginPage/Login.jsx"
import HomePage from "./scenes/homePage/index.jsx"
import AdminPage from "./scenes/adminPage/index.jsx"
import { useSelector } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter , Routes ,Route, Navigate  } from "react-router-dom";

function App() {
  const isAdmin = Boolean(useSelector((state) => state.admin));


  return (
      
     <div className="app">
      <BrowserRouter>
       
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/admin"
               element={isAdmin ? <AdminPage /> : <Navigate to="/" />}
              />
          </Routes>
        
        </BrowserRouter>
        
        {/* <Register></Register> */}
      </div>
      
  );
}

export default App;
