import React, { useState } from 'react';
import { Box } from '@mui/material';

const REACT_APP_SERVER_URL = 'http://localhost:3001';

const UserImage = ({ image, size = '60px' }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Set the default image to be used when not hovered
  const defaultImage = 'p3.jpeg';

  // Define the hover image here (you can change this URL as per your requirement)
  const hoverImage = 'upload.jpg';

  return (
    <Box
      width={size}
      height={size}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        style={{
          objectFit: 'cover',
          borderRadius: '50%',
        }}
        width={size}
        height={size}
        alt="user"
        src={`${REACT_APP_SERVER_URL}/assets/${
          isHovered ? hoverImage : image || defaultImage
        }`}
      />
    </Box>
  );
};

export default UserImage;
