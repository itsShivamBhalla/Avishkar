import React from 'react'

function Social({heading, contact}) {
    return (
        <div style={{color:"white",}}>
            

            <h3 style={{ font: "normal normal normal 24px/32px Segoe UI"}}>
                {heading}
            </h3>
            <h4 style={{font: "normal normal bold 19px/26px Segoe UI"}}>
                {contact}
            </h4>
        </div>
    )
}

export default Social
