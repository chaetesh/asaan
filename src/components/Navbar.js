import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg" style={{backgroundColor:'#FCA909'}}>
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">
      <img src="https://media.discordapp.net/attachments/1078705696490668092/1078837084426600548/Logo.png" style={{width:'40px',marginLeft:'20px'}} alt="" />
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mx-3" id="navbarSupportedContent" style={{flexDirection:"row-reverse"}}>
      <ul class="navbar-nav">
        <li class="nav-item mx-3">
          <Link class="nav-link active" aria-current="page" href="#">ACADEMICS</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link active" aria-current="page" to="/social">SOCIAL</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link active" aria-current="page" href="#">HOSTEL</Link>
        </li>
        <li class="nav-item mx-3">
          <Link to="/health" class="nav-link active" aria-current="page" href="#">HEALTH</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link active" aria-current="page" href="#">FOOD</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link active" aria-current="page" to="/marketplace">MARKETPLACE</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar