import React, { useState } from 'react'

const Form = () => {

    const [isHover, setIsHover] = useState(false);

    const [isChecked, setIsChecked] = useState(false)


    return (
        <form className='my-5 mb-4 d-flex align-items-center justify-content-center gap-3'>
            <input onChange={(e) => setIsChecked(e.target.checked)} id="terms" type="checkbox" className='form-check-input' />

            <div className='terms-wrapper'>
                <p style={{
                    visibility: isHover ? "visible" : "hidden"
                }}>This is not a real order</p>

                <label htmlFor='terms'>I have read and accept the terms</label>
            </div>

            <button
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                disabled={!isChecked} className='btn btn-primary'>Finish Order</button>

        </form>
    )
}

export default Form