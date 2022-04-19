import React from 'react'
import { useState } from 'react'
import '../css/AddUser.css'

function AddUser() {

    const initaddUser = {
        name: '',
        phone: '',
        address: '',
        email: '',
        pref: '',
        dob: ''
    }

    const [addUser, setaddUser] = useState({ initaddUser })

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
                            value={addUser.name}
                            onChange={(e) => {
                                setaddUser({ ...addUser, name: e.target.value })
                            }} />
                    </div>

                    <div className="div-phoneno">
                        <div className="title-phoneno">Phone Number</div>
                        <input
                            type="text"
                            className='input-phone'
                            value={addUser.phone}
                            onChange={(e) => {
                                setaddUser({ ...addUser, phone: e.target.value })
                            }} />
                    </div>

                    <div className="div-address">
                        <div className="title-address">Address</div>
                        <select
                            name=""
                            id=""
                            className='input-address'
                            value={addUser.address}
                            onChange={(e) => {
                                setaddUser({ ...addUser, address: e.target.value })
                            }}>
                            <option value='' disabled>----------</option>
                            <option value="ba dinh">Ba Dinh</option>
                            <option value="cau giay">Cau Giay</option>
                        </select>
                    </div>


                        <div className="div-email">
                            <div className="title-email">Email</div>
                            <input
                                type="text"
                                className='input-email'
                                value={addUser.email}
                                onChange={(e) => {
                                    setaddUser({ ...addUser, email: e.target.value })
                                }} />
                        </div>

                        <div className="div-pref">
                            <div className="title-pref">Preference</div>
                            <input
                                type="text"
                                className='input-pref'
                                value={addUser.pref}
                                onChange={(e) => {
                                    setaddUser({ ...addUser, pref: e.target.value })
                                }} />
                        </div>

                        <div className="div-dob">
                            <div className="title-dob">Date of Birth</div>
                            <input
                                type="date"
                                className='input-dob'
                                value={addUser.dob}
                                onChange={(e) => {
                                    setaddUser({ ...addUser, dob: e.target.value })
                                }} />
                        </div>
                </form>

                {/* //TODO: add if clause for dynamic button rendering */}

                <button className="btn-add">
                    Add
                </button>

            </div>
        </div>
    )
}

export default AddUser