import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg" style={{backgroundColor:'#322B23'}}>
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Name</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mx-3" id="navbarSupportedContent" style={{flexDirection:"row-reverse"}}>
      <ul class="navbar-nav">
        <li class="nav-item mx-3">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar