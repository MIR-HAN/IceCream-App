import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";


const Module = ({ item, addToBasket, clearFromBasket, decreaseAmount }) => {

  return (
    <div className='d-flex bg-dark align-items-center justify-content-between p-3 rounded '>

      <div className='d-flex align-items-center rounded gap-3 text-white mt-2'>
        <img height={100} src={item.imagePath} alt="" />
        <p className='text-white fs-6 fw-bold'>{item.name}</p>
      </div>

      <div className='d-flex align-items-center gap-2'>


        <button onClick={() => decreaseAmount(item.id)} className='btn bg-danger text-white'><TiMinus />
        </button>
        <span className='text-white'>{item.amount}</span>
        <button onClick={() => addToBasket(item)} className='btn bg-success text-white'><FaPlus />
        </button>

        <button onClick={() => clearFromBasket(item.id)} className='btn btn-light bg-light-hover text-danger'>
          <MdDeleteOutline className='fs-5' />

        </button>

      </div>


    </div>
  )
}

export default Module