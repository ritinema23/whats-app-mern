import React, {useEffect, useState} from 'react'
import './sidebarchat.css'
import {Avatar, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom' ;

function Sidebarchat({id, user}) {

const [seed, setSeed] = useState('');

useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
}, [])


    return (
        <Link to={`/rooms/${id}`}>
            <div className="single_chat">
                <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}
                        fontSize="small" />
                <div className="chat_info">
                    <h3>{user}</h3>
                    <p>msg...</p>
                </div>
            </div>
        </Link>
    )
}

export default Sidebarchat;
