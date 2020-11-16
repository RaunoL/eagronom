import React, {useState} from "react"
import Settings from "./Settings"
import {useSelector} from "react-redux"
import {companies, user} from "../constants"
function Nav(){
    const currentCompany = companies[useSelector(store=>store.company.id)]
    return(
        <nav>
            <div className="user-data">
                <h4>{user.name}</h4>
                <p>{(currentCompany.subtext === "" ? currentCompany.name : currentCompany.subtext)}</p>
            </div>
            <div className="menu-icon">
                <Settings/>
            </div>
            

        </nav>
    )
}

export default Nav