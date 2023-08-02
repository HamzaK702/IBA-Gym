import { useSelector } from "react-redux";
import Navbar from "../navbar";
import { Box, Typography   } from "@mui/material";
import UserImage from "../../components/UserImage";
 import EditIcon from '@mui/icons-material/Edit';
 //import AddCircleIcon from '@mui/icons-material/AddCircle';
const HomePage = () => {
   
const user = useSelector((state) => state.user);
const picturePath = useSelector((state) => state.user.picturePath);
const fullName =  `${user.firstName} ${user.lastName}`;
function handleEditname(){
  console.log("Yes edit name clicked")
}

function handleAddpicture(){
 
  console.log("Yes Add picture clicked")
}
  return (
    <>
    <Navbar></Navbar>
    {/* Center Box */}
    <Box
        sx={{mt:"5%", width:'80%', mx:'auto'}}
        width="100%"
        backgroundColor="#222"
        p="4%"
		    height="auto"
        color='#FFF'
      > 
        <Box sx={{display:'flex'}}>
        <Box onClick={handleAddpicture}>
        <UserImage  image={picturePath} size="100px"></UserImage> 
        </Box>
        
        {/* <AddCircleIcon onClick={handleAddpicture}
        sx={{
          mt: '80px',
          mx: '0px',
          color: '#FFF',
          '&:hover': {
            color: 'grey' // Change the color to your desired value
          }
        }}
      /> */}
        
        <Typography    sx={{mt:"35px", ml:'20px',  fontSize: 26, fontWeight: 'Bold'}}>{fullName}</Typography> 
        
        <EditIcon onClick={handleEditname}
        sx={{
          mt: "42px",
          ml: '10px',
          color: '#FFF',
          '&:hover': {
            color: 'grey' // Change the color to your desired value
          }
        }}
      />
      
        </Box>
        <h1>more data comes here</h1>
        </Box>
    </>
  );
};

export default HomePage;