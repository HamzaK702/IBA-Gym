import AddTrainer from "./Addtrainer";
import { Box  } from "@mui/material";
const AdminPage = () => {
   

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
     
    <AddTrainer></AddTrainer>
    </>
  );
};

export default AdminPage;