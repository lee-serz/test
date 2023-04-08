import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './assets/pages/Home/Home'
import './index.css'
import Register from './assets/pages/Register/Register'
import Form from './assets/pages/Form/Form'
import LoginForm from './assets/components/LoginForm/LoginForm/LoginForm'
import RegisterForm from './assets/components/RegisterForm/RegisterForm'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
)
