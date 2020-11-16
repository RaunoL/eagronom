import React from "react"
import DropDown from "./DropDown"
import { useSelector, useDispatch } from "react-redux"
import { menuToggle } from "../redux/actions"
function SettingsIcon() {

    const menuOpenState = useSelector(store => store.menuOpenState)
    const dispatch = useDispatch()


    return (
        <div className="settings">
            <button className="settings-icon" onClick={() => dispatch(menuToggle())}>
                <i className="material-icons-outlined ">settings</i>
            </button>
            {(menuOpenState) ? <DropDown /> : null}
        </div>
    )
}
export default SettingsIcon