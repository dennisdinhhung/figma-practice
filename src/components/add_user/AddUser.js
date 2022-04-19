import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import { addInfo, setStateInfo, updateInfo } from '../../reducer/action';
import '../../static/css/AddUser.css'
import Validate from '../../util/Validate';

function AddUser() {

    const [info, dispatch] = useContext(Context);

    const {users, user} = info;

    const [error_msg, setErrorMsg] = useState({})

    const redirect = useNavigate();
    

    const handleAdd = () => {
        const validation = Validate(user);

        if (Object.values(validation).some(item => item)){
            setErrorMsg(validation);
            return;
        }

        dispatch(addInfo(user))
        redirect('/home')
    }

    const handleUpdate = () => {
        const validation = Validate(user);

        if (Object.values(validation).some(item => item)){
            setErrorMsg(validation);
            return;
        }

        dispatch(updateInfo(user))
        redirect('/home')
    }

    const renderButton = () => {
        if (user.id){
            return(
                <button 
                    className={"btn-avail"}
                    onClick={handleAdd}>
                    Add
                </button>
            )
        }
        else{
            return(
                <button
                    className={user.id ? 'btn-avail' : "btn-hidden"}
                    onClick={handleUpdate}>
                        Update
                </button>
            )
        }
    }

    return (
        <div className='section-add'>
            <div className="add-title">
                Add user
            </div>

            <div className="div-add">
                <form action="" className='add-form'>
                    <div className="div-name">
                        <div className="title-name">Name</div>
                        <input
                            type="text"
                            className='input-name'
                            value={user.name}
                            onChange={(e) => {
                                dispatch(
                                    setStateInfo({
                                        ...user,
                                        name: e.target.value
                                    })
                                )
                            }} 
                            onBlur={() => {
                                const obj = {name: user.name}
                                setErrorMsg({
                                    ...error_msg,
                                    ...Validate(obj)
                                })
                            }}
                            />
                            <div className='validate-msg'>{error_msg.name}</div>
                    </div>

                    <div className="div-phoneno">
                        <div className="title-phoneno">Phone Number</div>
                        <input
                            type="text"
                            className='input-phone'
                            value={user.phone}
                            onChange={(e) => {
                                dispatch(
                                    setStateInfo({
                                        ...user,
                                        phone: e.target.value
                                    })
                                )
                            }}
                            onBlur={() => {
                                const obj = {phone: user.phone}
                                setErrorMsg({
                                    ...error_msg,
                                    ...Validate(obj)
                                })
                            }}
                            />
                            <div className='validate-msg'>{error_msg.phone}</div>
                    </div>

                    <div className="div-address">
                        <div className="title-address">Address</div>
                        <select
                            name=""
                            id=""
                            className='input-address'
                            value={user.address}
                            onChange={(e) => {
                                dispatch(
                                    setStateInfo({
                                        ...user,
                                        address: e.target.value
                                    })
                                )
                            }}
                            onBlur={() => {
                                const obj = {address: user.address}
                                setErrorMsg({
                                    ...error_msg,
                                    ...Validate(obj)
                                })
                            }}
                            >
                            <option value='' disabled>----------</option>
                            <option value="ba dinh">Ba Dinh</option>
                            <option value="cau giay">Cau Giay</option>
                        </select>
                        <div className='validate-msg'>{error_msg.address}</div>
                    </div>


                        <div className="div-email">
                            <div className="title-email">Email</div>
                            <input
                                type="text"
                                className='input-email'
                                value={user.email}
                                onChange={(e) => {
                                    dispatch(
                                        setStateInfo({
                                            ...user,
                                            email: e.target.value
                                        })
                                    )
                                }}
                                onBlur={() => {
                                    const obj = {email: user.email}
                                    setErrorMsg({
                                        ...error_msg,
                                        ...Validate(obj)
                                    })
                                }}
                                />
                                <div className='validate-msg'>{error_msg.email}</div>
                        </div>

                        <div className="div-pref">
                            <div className="title-pref">Preference</div>
                            <input
                                type="text"
                                className='input-pref'
                                value={user.pref}
                                onChange={(e) => {
                                    dispatch(
                                        setStateInfo({
                                            ...user,
                                            pref: e.target.value
                                        })
                                    )
                                }}
                                />
                        </div>

                        <div className="div-dob">
                            <div className="title-dob">Date of Birth</div>
                            <input
                                type="date"
                                className='input-dob'
                                value={user.dob}
                                onChange={(e) => {
                                    dispatch(
                                        setStateInfo({
                                            ...user,
                                            dob: e.target.value
                                        })
                                    )
                                }}
                                onBlur={() => {
                                    const obj = {dob: user.dob}
                                    setErrorMsg({
                                        ...error_msg,
                                        ...Validate(obj)
                                    })
                                }}
                                />
                                <div className='validate-msg'>{error_msg.dob}</div>
                        </div>
                </form>

                {/* //TODO: add if clause for dynamic button rendering */}
                
                <div className="buttons">
                    {user.id ? (
                        <button
                        className={user.id ? 'btn-avail' : "btn-hidden"}
                        onClick={handleUpdate}>
                            Update
                        </button>
                    ) : (
                        <button 
                        className={"btn-avail"}
                        onClick={handleAdd}>
                            Add
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AddUser