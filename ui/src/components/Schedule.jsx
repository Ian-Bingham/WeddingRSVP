import React from 'reactn'

const Schedule = (props) => {
    return (
        <div>
            <h3>{props.header}</h3>
            <ul >
                {props.timeline.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
        </div>
    ) 
}

export default Schedule