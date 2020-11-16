import { MENU_CLOSE, MENU_TOGGLE } from "../actionTypes"

export default function toggleMenu(state = false, action) {
    switch (action.type) {
        case MENU_CLOSE: {
            return false
        }
        case MENU_TOGGLE:{
            return !state
        }
        default:
            return state;
    }
}