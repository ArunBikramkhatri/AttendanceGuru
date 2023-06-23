import React, {useState, useEffect} from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Avatar } from '@mui/material';

const UserProfileSidebar = (props) => {
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    if(localStorage.getItem("darkMode")){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  })

  useEffect(() => {
    if(!lightMode){
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", true);
    }
  },[lightMode])

  return (
    <div class='flex space-x-2 items-center px-3'>
      {/* light-dark icon */}
      <div class='basis-1/3 text-discordBlue border-1 bg-white dark:bg-black p-2 shadow-sm shadow-gray rounded cursor-pointer' onClick={() => setLightMode(!lightMode)}>
        {(lightMode)?<DarkModeIcon />:<LightModeIcon />}
      </div>
      {/* bell */}
      <div class='text-discordBlue basis-1/3 border-1 bg-white p-2 shadow-sm shadow-gray rounded cursor-pointer'>
        <NotificationsNoneIcon />
      </div>
      {/* user avatar */}
      <div class='basis-1/3 text-discordBlue border-1 bg-white p-2 shadow-sm shadow-gray rounded cursor-pointer'>
        <Avatar src='../../../assets/Images/userprofile.jpg' sx={{ width: 24, height: 24 }} />
        </div>
    </div>
  )
}

export default UserProfileSidebar
