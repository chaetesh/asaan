import React from 'react'

const Health = () => {
  return (
    <>
    <div className=''>
        <img src="https://cdn.discordapp.com/attachments/1048250927787810836/1078756914541895761/image.png" alt="" style={{height:'60vh'}} />
        <button type="button" class="btn" style={{backgroundColor:'#FCA909',width:'20vw',height:'80px',marginLeft:'100px',borderRadius:'50px',fontSize:'1.6rem'}}>Book Appointment</button>
    </div>

    <div className="container my-5 p-5" style={{backgroundColor:'aliceblue',width:'60vw',borderRadius:'30px'}}>
        <p>NAME: </p>
        <p>REG: </p>
        <p>BLOOD GROUP: </p>
        <p>HEIGHT: </p>
        <p>WEIGHT: </p>
        <p>MOB. NO: </p>
    </div>
    </>
  )
}

export default Health