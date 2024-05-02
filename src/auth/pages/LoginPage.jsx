import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {


  const navigate = useNavigate(); // hook de react-router-dom que permite navegar entre rutas de forma programatica

  const onLogin = () => {
    navigate('/marvel',{
      replace: true
    })
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button 
      className='btn btn-primary'
      onClick={onLogin}
      >
        Login
        </button>
    </div>
  )
}
