import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import { editInfo } from '../../reducer/action';
import '../../static/css/Table.css'

function Table() {

    const [state, dispatch] = useContext(Context);

    const {users, user} = state;

    const redirect = useNavigate();

    const [pickedUser, setPickedUser] = useState({});

    const handleEdit = () => {
        dispatch(
            editInfo(pickedUser)
        )
        redirect('/home/2nd')
    }

    return (
        <div className='section-table'>
            <div className="title-table">
                Table
            </div>

            <div className="div-table">
                <table className='the-table'>
                    <thead>
                        <tr>
                            <th>*</th>
                            <th>Name</th>
                            <th>Phone No</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Pref</th>
                            <th>DoB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index++}>
                                    <td>
                                        <input 
                                            type="radio" 
                                            onChange={
                                                () => setPickedUser(user)
                                            }/>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address}</td>
                                    <td>{user.email}</td>
                                    <td>{user.pref}</td>
                                    <td>{user.dob}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div className="btn-del">
                    <button>
                        Delete
                    </button>
                </div>

                <div className="btn-edit">
                    <button
                        onClick={handleEdit}>
                        Edit
                    </button>
                </div>

                <div className="btn-add">
                    <button>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Table