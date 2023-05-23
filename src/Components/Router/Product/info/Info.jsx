import React from 'react'
import { CloseButton, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Info = ({ show,  id }) => {

    const [getProduct,setGetProduct] = React.useState({
        image:"",
        title:"",
        category:"",
        rating:{
            rate:"",
            count:""
        }
    })

    const navigate = useNavigate()

    const requestFakeApi = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const cardData = await res.json()
        console.log(cardData)
        setGetProduct(cardData)
    }
    

    React.useEffect(() => {
        requestFakeApi()
    }, [id])

    return (
        <>
            <Modal show={show} onHide={() =>   navigate(-1)}>
                <Modal.Header>
                    Info
                    <CloseButton onClick={() => navigate(-1)}/>
                </Modal.Header>
                <Modal.Body>
                    <form className='form-group d-flex flex-column align-items-center'>
                        <img src={getProduct.image}
                            style={{
                                width: '250px',
                                height: '230px',
                                border: '1px solid black',
                                borderRadius: '50%',
                                objectFit: 'contain'
                            }} alt=""
                        />
                        <label>Title</label>
                        <input type="text" className='form-control' value={getProduct.title} />
                        <label>Category</label>
                        <input type="text" className='form-control' value={getProduct.category} />
                        <label>rate</label>
                        <input type="text" className='form-control w-50 d-flex' value={getProduct.rating.rate} />
                        <label>count</label>
                        <input type="text" className='form-control w-50 d-flex' value={getProduct.rating.count}  />
                        <button className='btn btn-primary w-100'>Submit</button>
                    </form>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default Info