import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import Module from '../Module/index'


const Basket = ({ basket, addToBasket, clearFromBasket, decreaseAmount }) => {

    const [isOpen, setIsOpen] = useState(false);

    const totalAmount = basket.reduce((total, i) => total + i.amount, 0)


    return (
        <div >
            <div className='d-flex position-relative justify-content-end'>

                <div
                    className='position-fixed'>
                    <button
                        style={{
                            opacity: "0.9"
                        }}
                        onClick={() => setIsOpen(!isOpen)} className='btn bg-success text-white p-3position-relative '>
                        <FaShoppingBasket className='fs-2' />
                        <span style={{ top: '-12px', right: '-15px' }} className='bg-danger badge p-2 position-absolute'>{totalAmount}</span>
                    </button>
                </div>

            </div>

            {isOpen && (
                <div className='d-flex relative flex-column gap-3 index rounded  '>
                    <div className='d-flex justify-content-end mb-5'>
                        <button onClick={() => setIsOpen(false)} className='btn btn-light bg-light-hover position-fixed  text-danger '>
                            <IoClose className='fs-3' />
                        </button>
                    </div>


                    {basket.map((item) => (
                        <div key={item.id}>
                            <Module item={item}
                                decreaseAmount={decreaseAmount}
                                clearFromBasket={clearFromBasket}
                                addToBasket={addToBasket} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};



export default Basket