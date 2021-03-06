import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action } from '../redux/actions/Action'

const Counter = () => {
    const state = useSelector(state => state?.reducer?.state)
    const dispatch = useDispatch();
    console.log(state, 'state')

    return (
        <div className='mb-3'>
            <h3>counter {state} </h3>
            <button onClick={() => dispatch(Action())}>counter ++</button>
        </div>
    )
}

export default Counter
