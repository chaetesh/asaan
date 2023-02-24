import React from 'react'
import { Link } from 'react-router-dom'

const Functionalities = () => {
  return (
    <div className="container my-5">
        <div className="flex" style={{display:'inline-block'}}>
        <div className="mt-5">
        <div class="mt-3">
        <Link type="button" to="/faq" class="btn" style={{backgroundColor:'#FCA909',width:'30vw',height:'45px'}}>Frequently Asked Questions</Link>
        </div>
        <div class="mt-3">
        <button type="button" class="btn" style={{backgroundColor:'#FCA909',width:'30vw',height:'45px'}}>This is a button</button>
        </div>
        <div class="mt-3">
        <button type="button" class="btn" style={{backgroundColor:'#FCA909',width:'30vw',height:'45px'}}>This is a button</button>
        </div>
        <div class="mt-3">
        <button type="button" class="btn" style={{backgroundColor:'#FCA909',width:'30vw',height:'45px'}}>This is a button</button>
        </div>
    </div>
        </div>
        <img src="https://cdn.discordapp.com/attachments/717256815863136267/1078719313873227909/GG.png" alt="" style={{width:'60vh',position:'absolute',right:'0'}} />
    </div>
  )
}

export default Functionalities