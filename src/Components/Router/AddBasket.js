import React from 'react'
import {Offcanvas , CloseButton} from 'react-bootstrap';

const AddBasket = ({showBasket,setState,basket}) => {
  return (
    <div>
      <Offcanvas show ={showBasket} onHide = {()=>  setState({
                  type:"SHOWBASKET",
                  showBasket:false
                })}>
        <Offcanvas.Header>
          Basket

          <CloseButton onClick ={() => setState({
             type:"SHOWBASKET",
             showBasket:false
          })}/>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="cardlist">
          {basket?.map((item, index) => (
            <div className="card" key= {index} style={{ width: "18rem" }}>
              <img
                src={item.image}
                width="100px"
                height="100px"
                className="img-fluid imgC"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default AddBasket