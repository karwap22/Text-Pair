import React, { useState } from 'react'
import {v4 as uuidV4} from 'uuid'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const [roomId,setRoomId] = useState('');
    const [username,setUsername] = useState('');
    
    const createNewRoom = (e) =>{
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success("created a new room")
        
    }
    const joinRoom = (e) =>{
        if(!roomId || !username){
            toast.error("room id or username not filled");
            return;
        }

        //Redirect 
        navigate(`/editor/${roomId}`,{
            state:{
                username
            }
        });
        console.log(`Hello ${username}`);
    }
    const handleInputEnter = (event) => {
        if(event.code == "Enter"){
            joinRoom();
        }
    }
  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <img src='/code-sync.png' alt='code-sync-logo'/>
            <h4 className='mainLabel'>paste invitation</h4>
            <div className='inputGroup'>
                <input type='text' onChange={(e)=>setRoomId(e.target.value)} placeholder='room id' className='inputBox' value={roomId} onKeyUp={handleInputEnter}></input>
                <input type='text' onChange={(e)=>setUsername(e.target.value)} placeholder='username' className='inputBox' value={username} onKeyUp={handleInputEnter}></input>
                <button className='btn joinBtn' onClick={joinRoom}>join</button>
                <span className='craeteInfo'>if nobody invited you then you can create &nbsp;
                    <a href='' onClick={createNewRoom} className='createNewBtn'>room</a>
                </span>
            </div>
        </div>
        <footer>
            <h4>build by paawan</h4>
        </footer>
        
    </div>
  )
}

export default Home