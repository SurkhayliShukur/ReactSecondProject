import React from 'react';
import { Context } from '../../Context/Context';
import  {languages}  from '../languages';


const Form = () => {

  const [title,setTitle] = React.useState("")
  const [description,setDescription] = React.useState("")
  const [list, setList] = React.useState([])
  const inputRef = React.useRef()
  const {lang} = React.useContext(Context)
  


  const handleSubmit = (e) => {
    e.preventDefault()
    let newList = list
    newList.push({
      title:title,
      description:description
    })
    setList(newList)
    setTitle('')
    setDescription('')
    add(e)
  }
  const add = (e) => {
    e.preventDefault()
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      body: JSON.stringify({
        title:title,
        description:description
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    inputRef.current.focus()
  },[])


  return (
    <>
    <div className='d-flex justify-content-center'>
      <form className='form-control m-2 w-50 bg-primary' onSubmit={handleSubmit}>
        <label className='mt-2 text-white'>title</label>
        <input className='form-control' value={title} ref={inputRef} onChange={(e) => setTitle(e.target.value)}/>
        <label className='mt-2 text-white'>description</label>
        <textarea className='form-control' value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button className='btn btn-warning w-100 mt-3' type='submit'>Add</button>
      </form>
    
    </div>
    <div className='d-flex justify-content-center mt-4'>
    <div>
         {
        list.map((item,key) =>(
          <div key={key}>
             <label >Title</label>
             <p>{item.title}</p>
             <label >description</label>
             <p>{item.description}</p>
          </div>
        ))
      }
    </div>
    </div>
  
        
      
    </>
    
  )
}

export default Form