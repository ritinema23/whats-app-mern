import React, {useEffect, useState} from 'react'
import './sidebar.css' 
import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search';
import Sidebarchat from './Sidebarchat.js';

function Sidebar() {

    return (
        <div className="sidebar">
            <div className="icons">
                <Avatar fontSize="small"/>
                <div className="side_icons">
                    <IconButton>
                        <DonutLargeRoundedIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <ChatIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>


            <div className="search">
                <div className="s_comp">
                    <SearchIcon fontSize="small" />
                    <input type="search" placeholder="Search or Start new chat"/>
                </div>
            </div>


            <div className="chats">
                <Sidebarchat user={<p>user 1</p>} id={1}/>
                <Sidebarchat user={<p>user 2</p>} id={2}/>
            </div>
        </div>
    )
}

export default Sidebar;
