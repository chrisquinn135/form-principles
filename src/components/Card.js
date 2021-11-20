import React from 'react'

const Card = ({item, thing}) => {
    return (
        <div>
            <label style={{marginTop:10}}><b>{thing}</b></label>
            <div>
                {item}
            </div>
        </div>
    )
}

export default Card
