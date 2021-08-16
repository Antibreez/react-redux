const initialState = {
    counter: 0
}

const addCounter = {
    type: 'ADD'
}

const decreaseCounter = {
    type: 'SUB'
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return {
                counter: state.counter + action.value
            }
        case 'SUB':
            return {
                counter: state.counter - action.value
            }
        default:
            return state
    }
}