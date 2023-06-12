import React from 'react'
import { useFormik } from 'formik'
import { Sign } from './Schema'
import "./App.css"
const App = () => {
const {errors,values,handleBlur,handleChange,handleSubmit,touched}=  useFormik(
    {
      initialValues:{
        name:"",
        email:"",
        password:"",
        c_password:""
      },
      validationSchema:Sign,
      onsubmit:(values)=>
      {
        
      }
    } 
  )
  console.log(errors)
  return (
    <>
      <div className='form'>
        <div className='form_info'>
        <img src={require("./img/gop.jpg")} alt="img"/>        </div>
        <div className='form_registration'>
          <div className='form-inputs'>
            <form onsubmit={handleSubmit}>
            <label>Username:</label>
            <br/>
            <input type="text" id="name" value={values.name} onBlur={handleBlur} onChange={handleChange}/>
            <p>{errors.name && touched.name? errors.name: null}</p>
            
            <label>Email:</label><br/>
            <input type="text" id="email" value={values.email} onBlur={handleBlur} onChange={handleChange}/>

            <p>{errors.email && touched.email? errors.email: null}</p>
           
            <label>Password:</label><br/>
            <input type="password" id="password" value={values.password} onBlur={handleBlur} onChange={handleChange}/>
           <p>{errors.password && touched.password? errors.password: null}</p>
            
            <label>Conform-password</label><br/>
            <input type="password" id="c_password" value={values.c_password} onBlur={handleBlur} onChange={handleChange}/>
            <p>{errors.c_password && touched.c_password? errors.c_password: null}</p>
            
            <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

