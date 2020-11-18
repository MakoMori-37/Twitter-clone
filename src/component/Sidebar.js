import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import Sidemenu from './Sidemenu';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import SidebarFooter from './SidebarFooter';

function Sidebar() {
    return (
        <div className='sidebar__con' >

            <TwitterIcon />

            <Sidemenu Icon={HomeIcon} menuname='Home' />
            <Sidemenu Icon={SearchIcon} menuname='Explore' />
            <Sidemenu Icon={NotificationsNoneOutlinedIcon} menuname='Notifications' />
            <Sidemenu Icon={EmailOutlinedIcon} menuname='Messages' />
            <Sidemenu Icon={TurnedInNotOutlinedIcon} menuname='Bookmarks' />
            <Sidemenu Icon={ListAltOutlinedIcon} menuname='Lists' />
            <Sidemenu Icon={MoreHorizOutlinedIcon} menuname='More' />

            <button>Tweet</button>
            <SidebarFooter/>

            
        </div>
    )
}

export default Sidebar
