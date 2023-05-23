
import Main from "./Components/Main";
import "./Sass/app.scss"
import { useContext } from 'react'
import { Context } from './Context/Context'

function App() {
  const {theme} = useContext(Context)

  console.log(theme)
  return(
    <div className={`App ${theme}`}>
    <Main/>
  </div>
  ) 
}

export default App;
