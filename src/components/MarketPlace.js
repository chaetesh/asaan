import React from 'react'
import { Link } from 'react-router-dom'

const MarketPlace = () => {
  return (
    <div className='container'>
        <div className="row">
        <div class="col-md-4 mt-5">
            <Link class="card card-hover text-decoration-none" >
                <img class="card-img-top img-fluid" src="https://cdn.discordapp.com/attachments/1048250927787810836/1078829654443561010/auto.png" alt="Card image cap" style={{height:'350px'}} />
                <div class="card-block text-center">
                    <h4 class="card-title card-tit-style text-black ">Transport</h4>
                </div>      
            </Link>
        </div>
        <div class="col-md-4 mt-5">
            <Link class="card card-hover text-decoration-none" >
                <img class="card-img-top img-fluid" src="pngegg.png" style={{height:'350px'}} alt="Card image cap" />
                <div class="card-block text-center">
                    <h4 class="card-title card-tit-style text-black ">Food Delivery</h4>
                </div>      
            </Link>
        </div>
        <div class="col-md-4 mt-5">
            <Link class="card card-hover text-decoration-none" >
                <img class="card-img-top img-fluid" src="https://cdn.discordapp.com/attachments/1078705696490668092/1078832279650058270/plus.png" style={{height:'350px'}} alt="Card image cap" />
                <div class="card-block text-center">
                    <h4 class="card-title card-tit-style text-black ">Add New</h4>
                </div>      
            </Link>
        </div>
        </div>
    </div>
  )
}

export default MarketPlace