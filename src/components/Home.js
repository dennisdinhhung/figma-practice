import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../context/context'

import {BsSliders, BsClipboardPlus} from 'react-icons/bs'
import {BiCategory} from 'react-icons/bi'
import profile_pic from '../static/profile_pic.png'
import '../static/css/Home.css'
import { resetStateInfo } from '../reducer/action'
import { useAuth } from '../util/auth'

function Home() {

    const redirect = useNavigate();
    const auth = useAuth();

    const [state, dispatch] = useContext(Context);

    const {users, user} = state;
    
    const handleAdd = () => {
        if (user.id){
            dispatch(
                resetStateInfo(user)
            )
        }
        redirect('/home/2nd')
    }

    const handleLogOut = () => {
        auth.logout();
        redirect('/')
    }

    return (
        <div className='home-page'>
            <div className="left-menu">
                <div className="profile">
                    <img src={profile_pic} alt="profile-pic" className='profile-pic'/>
                    <div className='profile_name'>
                        {auth.authUser.username}
                    </div>
                </div>

                <div className="menu-items">
                    <div className="item1">
                        <button 
                            className='item1-btn active'
                            onClick={() => redirect('/home')}>
                            <BiCategory className='icon1 icon-active'/>
                            <div className="item1-text text-active">
                                Home
                            </div>
                        </button>
                    </div>
                    <div className="item2"> 
                        <button 
                            className='item2-btn inactive'
                            onClick={handleAdd}>
                            <BsClipboardPlus className='icon2 icon-inactive'/>
                            <div className="item2-text text-inactive">
                                Add User
                            </div>
                        </button>
                    </div>
                    <div className="item3">
                        <button 
                            className='item3-btn inactive'
                            onClick={() => redirect('/home/3rd')}>
                            <BsSliders className='icon3 icon-inactive'/>
                            <div className="item3-text text-inactive">
                                About
                            </div>
                        </button>
                    </div>
                </div>

                <div className="logout">
                    <button onClick={handleLogOut}>
                        Log Out
                    </button>
                </div>
            </div>

            <Outlet/>
        </div>
    )
}

export default Home