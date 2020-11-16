import React from "react"

function ProgressBar(props){
    const {width} = props
    return(
        <div className="achievements-progress">
            {(width==100)? <div className="progress full" style={{width: width+"%"}}/>: <div className="progress" style={{width: width+"%"}}/>}
            
        </div>
    )
}
export default ProgressBar