import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { companies } from "../constants"
import { selectCompany, menuClose, selectMenu } from "../redux/actions"
import ProgressBar from "./elements/ProgressBar"
function MainMenu() {
    const active = useSelector(store => store.company.id)
    const dispatch = useDispatch()
    return (
        <div className="main-menu">
            <h5 className="company-selection-heading">
                Your Companies
            </h5>
            <ul className="dropdown-list">
                {companies.map(company =>
                    <div
                        className={(active === company.id) ? "company active" : "company"}
                        key={company.id}>
                        <div className="company-name"
                            onClick={() => { dispatch(selectCompany(company.id)); dispatch(menuClose())}}>
                            <span>
                                {company.name}
                                <br />
                                <span className="subtext">{company.subtext}</span>
                            </span>
                        </div>
                        <div className="check">
                            {(active === company.id)
                                ? <div className="material-icons-outlined">check</div>
                                : null
                            }
                        </div>
                        


                    </div>
                )}
            </ul>
            <button
                className="achievements-link"
                onClick={() => dispatch(selectMenu("Achievements"))}>
                    <div className="achievements-button-content">
                        <div className="achievements-icon">
                            <div className="material-icons-outlined">school</div>
                        </div>
                        <div className="achievements-text">
                            <h5>Achievements</h5>
                            <p className="text-muted">3/11 done ꞏ 27%</p>
                        </div>
                    </div>
                    <ProgressBar width={27}/>
                
            </button>
            <ul className="dropdown-list">
                <li><a href=""><span className="material-icons-outlined">phone</span>Get the mobile app</a> </li>
                <li><a href=""><span className="material-icons-outlined">people</span>Community</a></li>
                <li><a href=""><span className="material-icons-outlined">book</span>Knowledge base</a></li>
            </ul>
            <ul className="dropdown-list">
                <li><a href=""><span className="material-icons-outlined">settings</span>Settings</a></li>
                <li><a href=""><span className="material-icons-outlined">exit_to_app</span>Log out</a></li>
            </ul>
        </div>

    )
}
export default MainMenu