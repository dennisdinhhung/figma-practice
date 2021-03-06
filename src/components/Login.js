import React, { useState } from 'react'
import Group from '../static/Group.svg'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import Validate from '../util/Validate'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../util/auth';
import { account } from '../static/data/account';
import '../static/css/Login.css'

function Login() {
    const redirect = useNavigate();
    const auth = useAuth();

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const [pwState, setPwState] = useState({
        icon: false,
        pwtype: 'password'
    });

    const [error_msg, setErrorMsg] = useState('');
    
    const changeEyeCon = () => {
        if (!pwState.icon){
            setPwState({
                icon: true,
                pwtype: 'text'
            })
        }
        else{
            setPwState({
                icon: false,
                pwtype: 'password'
            })
        }
    }
    
    //handle the login submit sequence
    const handleSubmit = (e) => {
        e.preventDefault();

        // set error message to blank
        setErrorMsg('')
        
        //check the login info with the list of accounts
        for(let i = 0; i < account.length; i++){
            console.log(account[i], 'account')
            console.log(login)
            if (account[i].username === login.username && account[i].password === login.password){
                setLogin({
                    username: '',
                    password: '',
                })

                //router auth
                auth.login(login);  

                // replace: true is for when the back button is pressed, the browser will not make the user log in again
                redirect('/home', {replace: true})
            }
        }

        //when everything does not match, set the error and set input fields to blank
        setErrorMsg('Your id or password is incorrect.')

        setLogin({
            username: '',
            password: '',
        })

        //because there are no matching accounts, return the function
        return;
        
    }

    //TODO: handle session validation

    return (
        <div className='login-page'>
            <div className='login-title'>
                ??????????????????
            </div>
            <form>
                <input
                    onChange={(e) => {
                        setLogin({...login, username: e.target.value});
                    }}
                    value={login.username}
                    type="text" 
                    className='input-id' 
                    placeholder='????????????ID*'/>
                
                <div>
                    <input 
                        onChange={(e) => {
                            setLogin({...login, password: e.target.value});
                        }}
                        value={login.password}
                        type={pwState.pwtype}
                        autoComplete='off' 
                        className='input-pw' 
                        placeholder='???????????????*'/>
                    
                    <div
                        onClick={() => changeEyeCon()}>
                            {pwState.icon ? <AiOutlineEye className='eye-con' /> : <AiOutlineEyeInvisible className='eye-con'/>}
                    </div>

                    <div className="error_msg">
                        {error_msg}
                    </div>
                </div>

                

                <button
                    onClick={handleSubmit}
                    className='btn-login'
                    >
                        ??????
                </button>
                
            </form>

            <img src={Group} alt="pills-group" className='pills' />
        </div>
    )
}

export default Login