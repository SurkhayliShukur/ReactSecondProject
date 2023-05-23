import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {Context}   from '../Context/Context'

const Navbar = ({ Tabs }) => {

  const { theme, setTheme ,setLang } = useContext(Context)

  const changeTheme = () => {

    setTheme(theme === "light" ? "dark" : "light")
    if (theme === "light") {
      document.body.classList.add("dark")
      document.body.classList.remove("light")
    }
    else {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }
  }
 
  React.useEffect(() => {
    localStorage.setItem("darkMode", (theme))
  }, [theme])


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Tabs.map((item, key) => (
                <li className='nav-item' key={key}>
                  <Link className='nav-link' to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <button className='btn btn-primary me-2' onClick={() => {
              setLang('eng')
              localStorage.setItem('lang', 'eng')             
            } }>En</button>
            <button className='btn btn-success' onClick={() => {
              setLang('aze')
              localStorage.setItem('lang', 'aze')
            }} >Az</button>
            <button className="btn btn-dark ms-2" onClick={() =>
              changeTheme()
            }>{theme}</button>
            {/* <Select className='w-20' options={options}  onChange={changeLanguage} /> */}
          

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar