import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "../context/auth.context";  // <== IMPORT
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


export default function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const [value, setValue] = React.useState(0);
  // const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}>
      <BottomNavigation className='BottomNavigation' showLabels value={value} onChange={(event, newValue) => {setValue(newValue);}}>
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          value="home"
          icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
          component={Link}
          showLabels
          to="/add-recipe"
          label="Add"
          value="add-recipe"
          icon={<AddCircleOutlineOutlinedIcon />}
      />
      <BottomNavigationAction
          component={Link}
          to="/notifications"
          label="Notifications"
          value="notifications"
          icon={<NotificationsNoneOutlinedIcon />}
      />
      <BottomNavigationAction
          component={Link}
          to="/profile"
          label="Profile"
          value="profile"
          icon={<AccountCircleOutlinedIcon />}
      />
        {/* <Link to="/"><HomeOutlinedIcon/></Link>
        <Link to="/add-recipe"><NotificationsNoneOutlinedIcon/></Link>
        <Link to="/notifications"><AddCircleOutlineOutlinedIcon/></Link>
        <Link to="/profile"><AccountCircleOutlinedIcon/></Link> */}
          {/* <Link to="/">
            <button>Home</button>
          </Link>
    -
          {isLoggedIn
            ? (<>
                <Link to="/projects">
                  <button>Projects</button>
                </Link>
                <button onClick={logOutUser}>Logout</button>
                <span>{user.name}</span>
              </>)
            : 
            (<>
              <Link to="/signup"> <button>Signup</button> </Link>
              <Link to="/login"> <button>Login</button> </Link>
            </>)
          } */}
      </BottomNavigation>
    </Box>
  );
}