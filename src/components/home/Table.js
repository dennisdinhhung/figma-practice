import React from 'react'
import '../css/Table.css'

function Table() {
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
                    {/* map */}
                    <tr>

                    </tr>
                </tbody>
            </table>

            <div className="btn-del">
                <button>
                    Delete
                </button>
            </div>

            <div className="btn-edit">
                <button>
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