import { COMPANY } from "../actionTypes"


const defaultState = {
    id: 0
}

export default function activeCompany(state = defaultState, action) {
    switch (action.type) {
        case COMPANY: {
            return {
                id: action.id
            }
        }
        default:
            return state;
    }
}