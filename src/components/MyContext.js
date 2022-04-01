import React, { createContext, useState } from 'react'
export const Context = createContext();

const MyContext = ({ children }) => {
    const [counter, setCounter] = useState(0)
    const [errorMsg, setErrorMsg] = useState(false)

    const handleIncrement = () => {
        setCounter(counter + 1);
        if (counter >= 0) {
            setErrorMsg(false)
        }
    }
    const handleDecrement = () => {
        setCounter(counter - 1)
        // counter <= 0 && setCounter(0)
        if (counter <= 0) {
            setCounter(0);
            setErrorMsg(true)
        }
    }
    const state = {
        name: 'Muhammad Ijaz',
        email: 'ijaz343@gmai.com',
        age: 44
    }

    return (
        <Context.Provider value={{ state, handleIncrement, handleDecrement, counter, errorMsg }}>
            {children}
        </Context.Provider>
    )
}

export default MyContext