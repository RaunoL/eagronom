import React from "react"
import { useDispatch } from "react-redux"
import { selectMenu } from "../redux/actions"
import { achievements } from "../constants"
import ProgressBar from "./elements/ProgressBar"
function Achievements() {
    const dispatch = useDispatch()
    return (
        <div className="achievements">
            <div className="achievements-heading">
                <div className="back-button">
                    <button className="material-icons-outlined" onClick={() => dispatch(selectMenu("mainMenu"))}>arrow_back</button>
                </div>
                <div className="achievements-title">
                    <h5> Achivements tab</h5>
                </div>


            </div>

            <ul className="dropdown-list">
                {achievements.map((achievement, index) =>
                    <li key={index}>
                        <h5 className={(achievement.progressValue === 100)? "full" : ""}>{achievement.name}</h5>
                        <p className="text-muted">
                            {achievement.desc}
                        </p>
                        <div className="progress-container">
                            <ProgressBar width={achievement.progressValue} />
                            <div className="progress-name">{(achievement.progressValue === 100) ? <div className="material-icons-outlined full">check</div> :  <p>{achievement.progressName}</p> }</div>
                        </div>
                    </li>
                )}
            </ul>
        </div>

    )
}
export default Achievements