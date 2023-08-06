import { useSelector } from "react-redux";
import { useState } from "react";
import Navbar from "../navbar";
import { Box, Button, Typography   } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import Dropzone from "react-dropzone";
 import UserImage from "../../components/UserImage";
 import EditIcon from '@mui/icons-material/Edit';
 import Modal from '@mui/material/Modal';
 



 //import AddCircleIcon from '@mui/icons-material/AddCircle';
const HomePage = () => {
  

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const [openName, setOpenName] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenname = () => setOpenName(true);
  const handleCloseName = () => setOpenName(false);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState("");
const user = useSelector((state) => state.user);
const picturePath = useSelector((state) => state.user.picturePath);
const fullName =  `${user.firstName} ${user.lastName}`;
function handleEditname(){
  console.log("Yes edit name clicked")
}

function UploadImage(){
 
  console.log("Yes upload picture clicked")
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
        <Box onClick={handleOpen}>
        <UserImage  image={picturePath} size="100px"></UserImage> 
        </Box>
        
        
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Upload a picture
          </Typography>
          
          
          <Dropzone 
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false} 
              onDrop={acceptedFiles => setImage(acceptedFiles[0])}>
            {({getRootProps, getInputProps}) => (
              <section>
                <Box sx={{ border: 1, borderColor: 'primary.main', my:1, p:1}}>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                 {!image ? (
                      <p>Add Image Here</p>
                    ) : ( <Typography>{image.name}</Typography> )}
                </div>
                </Box>
              </section>
            )}
          </Dropzone>
          <Button variant="contained" onClick={UploadImage}>Upload</Button>
         </Box>
      </Modal>
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
        
        <EditIcon onClick={handleOpenname}
        sx={{
          mt: "42px",
          ml: '10px',
          color: '#FFF',
          '&:hover': {
            color: 'grey' // Change the color to your desired value
          }
        }}
      />
      <Modal
        keepMounted
        open={openName}
        onClose={handleCloseName}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Edit Name
          </Typography>
          </Box>
          </Modal>
      
        </Box>
        <h1>more data comes here</h1>
        </Box>
    </>
  );
};

export default HomePage;