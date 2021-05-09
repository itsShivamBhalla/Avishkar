import React from 'react'
import DownloadBar from './DownloadBar'
import logo1 from '../Assets/ams-download.png'
import logo2 from '../Assets/burn-utility-download.png'

function Download() {
    return (
        <div style={{height:"574px", backgroundColor:"#2881C3", border:"1px solid #707070", display:'flex', justifyContent:"space-evenly", alignItems:"center", flexDirection:"column"}}>
            <h1 style={{font: "normal normal bold 60px/75px Quicksand", color:" white"}}>
            Download AMS & Utility Software
            </h1>
            <DownloadBar available="Available for Windows & Mac" text="Save, Compile & Burn a program with just a few clicks." logo={logo1}/>
            <DownloadBar available="Available for Windows Only" text="Directly program bots with AMS online programs." logo={logo2}/>
            
        </div>
    )
}

export default Download
