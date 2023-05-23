import React from 'react'
import Table from './Table/Table'


const Employee = () => {
    // const [status, setStatus] = React.useState([])
    // React.useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then( (response) => response.json())
    //     .then(status => setStatus(status))
    //     .catch(err => console.log(err))
    // },[])

    // console.log(status)

    // const requestStatus = async () => {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/users")
    //     const data = await res.json()
    //     console.log(data)
    //     setStatus(data)
    // }

    // React.useEffect(()=>{
    //     requestStatus()
    // },[])

    const [table, setTable] = React.useState([0])
 
    const requestTable = async () => {
      const res = await fetch("https://dummyjson.com/users")
      const tableData = await res.json()
      setTable(tableData)
      console.log(tableData)
    }
    React.useEffect(() => {
      requestTable()
    },[])
    

  return (
    <>
       <Table>
        {
          
        }
       </Table>
    </>
  )
}

export default Employee