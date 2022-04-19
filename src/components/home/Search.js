import React, { useState } from 'react'
import '../../static/css/Search.css'

function Search() {

    const initSearchInfo = {
        name: '',
        phone: '',
        address: '',
        email: '',
        pref: '',
        dob: ''
    }

    const [searchInfo, setSearchInfo] = useState({initSearchInfo})

    //reset table along with search div
    const handleReset = () => {
        setSearchInfo(initSearchInfo)
    }

    //TODO: handle search
    const handleSearch = () => {

    }

  return (
    <div className='section-search'>
        <div className="search-title">
            Search
        </div>

        <div className="div-search">
            <form action="" className='form'>
                <div className="column1">
                    <div className="div-name">
                        <div className="title-name">Name</div>
                        <input 
                            type="text" 
                            className='input-name'
                            value={searchInfo.name}
                            onChange={(e) => {
                                setSearchInfo({...searchInfo, name: e.target.value})
                            }}/>
                    </div>
                    
                    <div className="div-phoneno">
                        <div className="title-phoneno">Phone Number</div>
                        <input 
                            type="text" 
                            className='input-phone'
                            value={searchInfo.phone}
                            onChange={(e) => {
                                setSearchInfo({...searchInfo, phone: e.target.value})
                            }}/>
                    </div>
                    
                    <div className="div-address">
                        <div className="title-address">Address</div>
                        <select 
                            name="" 
                            id="" 
                            className='input-address'
                            value={searchInfo.address}
                            onChange={(e) => {
                                setSearchInfo({...searchInfo, address:e.target.value})
                            }}>
                            <option value='' disabled>----------</option>
                            <option value="ba dinh">Ba Dinh</option>
                            <option value="cau giay">Cau Giay</option>
                        </select>
                    </div>
                </div>
                
                <div className="column2">
                    <div className="div-email">
                        <div className="title-email">Email</div>
                        <input 
                            type="text" 
                            className='input-email'
                            value={searchInfo.email}
                            onChange={(e) => {
                                setSearchInfo({...searchInfo, email: e.target.value})
                            }}/>
                    </div>
                    
                    <div className="div-pref">
                        <div className="title-pref">Preference</div>
                        <input 
                            type="text" 
                            className='input-pref'
                            value={searchInfo.pref}
                            onChange={(e) => {
                                setSearchInfo({...searchInfo, pref: e.target.value})
                            }}/>
                    </div>
                    
                    <div className="div-dob">
                        <div className="title-dob">Date of Birth</div>
                        <input 
                            type="date" 
                            className='input-dob'
                            value={searchInfo.dob}
                            onChange={(e) => {
                                setSearchInfo({...searchInfo, dob: e.target.value})
                            }}/>
                    </div>
                </div>
            </form>
        </div>

        <div className="buttons">
            <div className="btn-reset">
                <button
                    onClick={handleReset}>
                    Reset
                </button>
            </div>

            <div className="btn-search">
                <button
                    onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    </div>
  )
}

export default Search