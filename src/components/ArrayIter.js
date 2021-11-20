import React from 'react'

const ArrayIter = ({item}) => {
    return (
        <div>
            <label style={{marginTop:10}}><b>Check All Services You Require</b></label>
            <div>
                {item[0] ? "Email" : ""}
            </div>
            <div>
                {item[1] ? "Phone" : ""}
            </div>
            <div>
                {item[2] ? "Facebook" : ""}
            </div>
            <div>
                {item[3] ? "Twitter" : ""}
            </div>
            <div>
                {item[4] ? "Surface Mail" : ""}
            </div>
            <div>
                {item[5] ? "Personal Visit" : ""}
            </div>
        </div>
    )
}

export default ArrayIter
