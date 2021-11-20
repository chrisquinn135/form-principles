import React from 'react'


const Confirm = () => {
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
        paddingBottom: 30
    }

    return (
        <div >
            <div style={headerStyle}>
                Results Verification Page: Christopher Su
            </div>
            <div style={descStyle}>
                CSC 642 848 Fall 2021 Individual Assignment Christopher Su
            </div>
        </div>
    )
}

export default Confirm
