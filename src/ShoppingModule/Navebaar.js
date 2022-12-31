import React from 'react'
import {Link} from 'react-router-dom';

function Navebaar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-white bg-dark">
  <a className="navbar-brand text-white" href="#">SHOPPING LIST</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white" to="/home">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-white" to="/about">About</Link>
      </li>

      <li className="nav-item">
      <Link className="nav-link text-white" to="/item">item</Link>
      </li>
      {/* <li class="nav-item">
      <Link className="nav-link text-white" to="/display">show</Link>
      </li> */}
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navebaar