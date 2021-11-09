import React from 'react'

const Header = () => {
    const headerStyle = {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '36px',
        padding: 30,
        paddingBottom:15,
        background: 'white'
    }

    const descStyle = {
        fontSize: '16px',
        background: 'white',
        paddingLeft: 30,
        paddingBottom: 5
    }

    const reqStyle = {
        fontSize: '16px',
        background: 'white',
        paddingLeft: 30,
        paddingBottom: 30,
        color: 'red'
    }
    return (
        <div >
            <div style={headerStyle}>
                Data survey form
            </div>
            <div style={descStyle}>
                CSC 642 848 Fall 2021 Individual Assignment Christopher Su
            </div>
            <div style={reqStyle}>
                * Required
            </div>
        </div>
    )
}

export default Header
