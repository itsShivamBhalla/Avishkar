import React from 'react'
import Cards from './Cards'
import '../Styles/Style.css'

function Updates(props) {
    return (
        <div style={{backgroundColor:"#FF9B00F2", height:"571px"}}>

        <div >
        <h1 style={{font: "normal normal bold 60px/75px Quicksand", color:"white", padding:'46px 0 41px 139px', }}>Updates on Latest Versions</h1>
            

            <hr style={{backgroundColor:'white', border:"2px solid white", margin:'0 139px 0 139px' }}/>
        </div>
        
        <div style={{display:"flex", alignItems:'center', justifyContent:'center', paddingTop:"47px"}}>

<div style={{padding:'0 45px'}}>
<Cards/>
</div>
      <div style={{borderLeft:"2px solid white", borderRight:' 2px solid white', padding:'0 45px'}}>
      <Cards/>
      </div>
        <div style={{padding:'0 45px'}}><Cards/></div>
        
        </div>
        
       
         
        </div>
    )
}

export default Updates
