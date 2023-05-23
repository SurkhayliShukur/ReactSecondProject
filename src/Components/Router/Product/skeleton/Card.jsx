import React from 'react'
import {Skeleton} from 'antd';

const Card = () => {
  return (

    new Array(20).fill(1).map(( _ , i) => (
      <div className='col-sm-12 col-lg-3 col-md-5 mt-3'>
           <div className='card p-2 me-2 card-bg' key={i}>
        <Skeleton.Image  active = "active" />
        <div className='card-body d-flex justify-content-between'>
        <Skeleton  active = "active" paragraph = {{rows : 2,}} title = {false} />
        <Skeleton.Button active = "active"/>
        </div>
        <div className='d-flex justify-content-between ms-3 mt-2'>
        <Skeleton.Button active = "active"/>
        <Skeleton.Button active = "active"/>
        </div>
    </div>
      </div>
     
    ))
  
  )
}

export default Card