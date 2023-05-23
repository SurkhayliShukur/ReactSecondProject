import React from 'react';
import userList from '../../customers-list.json';
import Select from 'react-select';
import '../style.css'

const User = () => {

    const options = [
        { value: 5, label: 5 },
        { value: 10, label: 10 },
        { value: 15, label: 15 }
    ]

    const [currentPage, setCurrenPage] = React.useState(1)
    const [recordsPerPage, setRecordsPerPage] = React.useState(options[1].value);
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = userList.slice(firstIndex, lastIndex)
    const npage = Math.ceil(userList.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const setFilter = (recordsPerPage) => {
        setRecordsPerPage(recordsPerPage.value)
    }

    const prePage = () => {
        if (currentPage !== firstIndex) {
            setCurrenPage(currentPage - 1)
        }
       

    }

    const changeCPage = (id) => {
        setCurrenPage(id)
    }

    const NextPage = () => {
        if (currentPage !== firstIndex) {
            setCurrenPage(currentPage + 1)
        }
    }

    // React.useEffect(()=>{
    //     if(currentPage > 3 && currentPage < 5 ){
    //         recordsPerPage.slice(currentPage-3,currentPage +2)
    //     }
    // },[])
    return (
        <>
            <div className='d-flex justify-content-center mt-5'>
                <table>
                    <thead>
                        {
                            Object.keys(userList[0]).map((item) => (

                                <th>{item}</th>

                            ))
                        }
                    </thead>

                    <tbody>
                        {
                            records.map((item, key) => (

                                <tr key={key}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.location}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.total_spend}</td>
                                    <td>{item.total_orders}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-between m-5 '>
            <Select options={options} placeholder="5" onChange={setFilter} />
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" onClick={prePage}>Previous</button>
                        </li>
                        {
                            numbers.map((n, key) => (
                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={key}>
                                    <button href="/" className='page-link' onClick={() => changeCPage(n)}>{n}</button>
                                </li>
                            ))
                        }
                        <li className="page-item">
                            <button className="page-link" onClick={NextPage}>Next</button>
                        </li>
                    </ul>
              
                </div>



        </>

    )
}

export default User