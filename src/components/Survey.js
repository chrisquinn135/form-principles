import React from 'react'
import Header from './Header'
import User from './User'


const Survey = () => {

    const surveyStyle = {
        margin: 'auto',
        marginTop: '50px',
        width: "825px",
        left: '308px',
        // top: '54px',
        // background: 'white',    //background: '#FFF0F0',
        // boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.25)'
    }

    return (
        <div style={surveyStyle}>
            <Header />

            <User />

        </div>
    )
}

export default Survey
