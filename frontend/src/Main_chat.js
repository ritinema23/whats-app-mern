import React, {useState, useEffect} from 'react'
import './main_chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVert from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search';
import AttachFile from '@material-ui/icons/AttachFile'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {useParams} from 'react-router-dom' ;


function Main_chat() {

const [seeds, setSeeds] = useState('');
const [input, setInput] = useState('');
const { roomid } = useParams();

useEffect(() => {
    setSeeds(Math.floor(Math.random() * 5000))
}, [roomid ])       

const onSearch = (e) => {
    setInput(e.target.value);
}
    
    return (
        <div className="main_chat">
            <div className="main_chat_header">
                <Avatar src= {`https://avatars.dicebear.com/api/human/${seeds}.svg`}
                        fontSize="small" />
                <div className="m_c_h_info">

                    <h2>CHAT AREA</h2> 
                    <p>last seen</p>
                
                </div>
                <div className="m_c_h_icons">
                    <IconButton>
                        <SearchIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <AttachFile fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <MoreVert fontSize="small" />
                    </IconButton>
                </div>
            </div>
            
            <div className="main_chat_area">
                
                    <p className="chat_msg"> 
                        <p className="chat_name_for">
                            user1
                        </p>
                        hello!!
                        <span className="time_stamp">
                            time 1
                        </span>
                    </p>
                    <p className="receive_msg"> 
                        <p className="chat_name_rec">
                            user2
                        </p>
                        wats up!!
                        <span className="time_stamp">
                            time 2
                        </span>
                    </p>
                
            </div>

            <div className="main_chat_footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input type="text" 
                           placeholder="Type a message"
                           value={input}
                           onChange={onSearch}
                    />
                    <button>submit</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Main_chat;