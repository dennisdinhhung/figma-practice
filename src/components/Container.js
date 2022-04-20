import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../util/auth'

import AddUser from './add_user/AddUser'
import About from './about/About'
import Home from './Home'
import HomeInfo from './home/HomeInfo'
import Login from './Login'
import { RequireAuth } from '../util/RequireAuth'


function Container() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route 
                        path='/home' 
                        element={
                            <RequireAuth>
                                <Home/>
                            </RequireAuth>}>
                        <Route index element={<HomeInfo/>}/>
                        <Route path='2nd' element={<AddUser/>}/>
                        <Route path='3rd' element={<About/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default Container