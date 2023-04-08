import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm/LoginForm'
import Home from '../pages/Home/Home'
import Form from '../pages/Form/Form';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<LoginForm/>} path='/login'/>
            <Route element={<Home/>} path='/'/>
            <Route element={<Form/>} path='/form'/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router