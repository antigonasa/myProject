import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Home/Banner'
import Form from '../../components/pages/Login/Form'

const Login = () => {
  return (
    <div className='login-page shared-page home-page'>
      <Navbar />
      <Banner />
      <Form />
     </div>
  )
}

export default Login