import { createContext } from "react";
import React from "react";

export const Context = createContext();
 const Provider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    document.body.classList.add(theme)
  },[])

  const [lang, setLang] = React.useState('eng');


  const data = {
    theme ,setTheme, lang, setLang
  }



  
  return(
    <Context.Provider value={data}>
        {children}
    </Context.Provider>
  ) 
};

  export default Provider
