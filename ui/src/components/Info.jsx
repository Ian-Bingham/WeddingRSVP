import React from 'reactn'

const Info = (props) => {
    return (
        <div>
            <h3>{props.header}</h3>
            <p>{props.info}</p>
        </div>
    )
}

export default Info