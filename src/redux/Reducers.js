import { INCREMENT } from "./constants"

const InitialState = {
    state: 0
}

export const Reducers = (state = InitialState, action) => {
    const { type, payload } = action
    console.log(type, payload, 'action')
    switch (type) {
        case INCREMENT: return { state: state + 1 }
        default: return state;
    }
}