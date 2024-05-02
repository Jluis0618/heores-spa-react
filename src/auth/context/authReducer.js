import { types } from "../types/types";



// The reducer is a pure function that takes the previous state and an action, and returns the next state.
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                name: action.payload
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}