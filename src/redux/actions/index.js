import { MENU_CLOSE, MENU_TOGGLE, COMPANY, CURRENTMENU } from "../actionTypes"

export const menuClose = () => {
    return {
        type: MENU_CLOSE
    }
}
export const menuToggle = () => {
    return {
        type: MENU_TOGGLE
    }
}
export const selectCompany = (id) => {
    return {
        type: COMPANY,
        id: id
    }
}
export const selectMenu = (menu) => {
    return {
        type: CURRENTMENU,
        menu: menu
    }
}