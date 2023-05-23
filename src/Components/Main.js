import React from 'react'
import Navbar from './Navbar'
import Home from './Router/Home'
import Form from './Router/Form'
import { Route, Routes , useLocation } from 'react-router-dom'
import User from './Router/User'
import Employee from './Router/Employee'
import Product from './Router/Product/Product'
import {useContext} from 'react'
import { Context } from '../Context/Context'
// import { languages } from './languages'


const Main = () => {
  const location = useLocation()
  const background = location.state && location.state.background
  const {lang}  = useContext(Context)
  
  const Tabs = [
    {
      path: "/home",
      element: <Home />,
      name:"Home"
      // name: languages(lang)['home']
    },
  
    {
      path: "/user",
      element: <User />,
      name:"User"
      // name: languages(lang)['user']

    },
    {
      path: "/employee",
      element: <Employee />,
      name:"Employee"
      // name: languages(lang)['employee']
    },
    {
      path: "/product",
      element: <Product  location={location} background={background}  />,
      name:"Product"
      // name: languages(lang)['product']
    },
    {
      path: "/form",
      element: <Form />,
      name:"Form"
      // name: languages(lang)['form']
    }
    

  ]

  

  return (
    <div>
        <Navbar Tabs={Tabs} />
        <Routes location={background || location}>
          {
            Tabs.map((item) => (
              <>
                <Route path={item.path} element={item.element} />
              </>
            ))
          }
        </Routes>
    </div>
  )
}

export default Main