import {CURRENTMENU} from "../actionTypes"

const defaultState = {
    menu : "mainMenu"
}
export default function toggleMenu(state = defaultState, action) {
    switch (action.type) {
        case CURRENTMENU: {
            return {
                menu: action.menu
            }
        }
        default:
            return state;
    }
}