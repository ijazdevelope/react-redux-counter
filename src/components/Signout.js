import React, { useContext } from 'react'
import { Context } from './MyContext'

const Signout = () => {
    const { handleIncrement, handleDecrement, counter, errorMsg } = useContext(Context)

    return (
        <div>
            <h3>Counter</h3>
            <div className='d-flex'>
                <h3 className={`${errorMsg && 'text-danger'}`}> {counter} </h3>
                <h6 className={`${errorMsg ? 'text-danger mr-1' : 'd-none'}`}> Negative values are not allowed.... </h6>
            </div>
            <button onClick={handleIncrement}>Increment Counter +</button>
            <button onClick={handleDecrement}>Decrement Counter -</button>
        </div>
    )
}

export default Signout
