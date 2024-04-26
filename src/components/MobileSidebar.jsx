import * as React from "react";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import Groups2Icon from "@mui/icons-material/Groups2";
import StadiumIcon from "@mui/icons-material/Stadium";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import HomeIcon from "@mui/icons-material/Home";

import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { NavLink } from "react-router-dom";

const elements = [
  {index: '1',icon:<HomeIcon />, title: 'Home', link: '/'},
  {index: '2',icon:<InfoIcon />, title: 'About', link: '/about'},
  {index: '3',icon:<ConnectWithoutContactIcon />, title: 'Contact', link: '/contact'},
  {index: '4',icon:<StadiumIcon />, title: 'Events', link: '/event'},
  {index: '5',icon:<Groups2Icon />, title: 'Fan Club', link: '/fan-club'},
];

export default function MobileSidebar() {
  const isSmOrMd = useMediaQuery("(max-width: 960px)");
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  const toggleClose = () => {
    setState({ ...state, [anchor]: open });
    
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="mt-10 "
    >
      <div className="flex justify-start items-center px-4 mb-5" onClick={toggleClose}>
        <CloseFullscreenIcon fontSize="30" className="bg-gray-500 rounded-xl text-white text-xl  "  />
      </div>
      <List>
        {elements.map(
          (element) => (
            <ListItem key={element.index} disablePadding>
                <NavLink to={element.link} >
              <ListItemButton>
                <ListItemIcon>{element.icon}</ListItemIcon>
                <ListItemText primary={element.title} />
              </ListItemButton>
                </NavLink>
            </ListItem>
          )
        )}
      </List>
      <Divider />
   

      <div className="flex justify-center items-center mt-10">
        <button className="px-5 py-2 bg-red-500 text-white rounded-md">
          <NavLink to={'/login'}>
            Login
          </NavLink>
        </button>
      </div>
    </Box>
  );

  return (
    <div>
      {isSmOrMd &&
        ["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <MenuIcon onClick={toggleDrawer(anchor, true)}>Right</MenuIcon>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
              className=""
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
    </div>
  );
}
