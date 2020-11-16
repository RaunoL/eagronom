import React from "react"
import MainMenu from "./MainMenu"
import Achievements from "./Achievements"
import {useSelector} from "react-redux"
function DropDown() {
    const currentMenu = useSelector(store=>store.currentMenu.menu)
    return (
        <div className="dropdown">
            {(currentMenu === "mainMenu") ? <MainMenu/> : <Achievements/>}
        </div>

    )
}

export default DropDown