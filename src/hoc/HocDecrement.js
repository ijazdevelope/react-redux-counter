import React, { useState } from 'react'

const HocDecrement = () => {
    const [counterDec, setCounterDec] = useState(0)

    return (
        <div>
            <h3>HocDecrement {counterDec}</h3>
            <button onClick={() => setCounterDec(counterDec - 1)}>HocIncrement --</button>
        </div>
    )
}

export default HocDecrement
