import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav(props){
  const BackGroundGreen =() =>{
    document.body.style.backgroundColor= "green";
    props.koibhi('Green Theme Applied');
  }
  const yelllowww =() =>{
    document.body.style.backgroundColor= "yellow";
    props.koibhi('Yellow Theme Applied');
  }
  const reddd =() =>{
    document.body.style.backgroundColor= "red";
    props.koibhi('Red Theme Applied');
  }
  const greeyyyy =() =>{
    document.body.style.backgroundColor= "grey";
    props.koibhi('Grey Theme Applied');
  }
  const bluuueee =() =>{
    document.body.style.backgroundColor= "blue";
    props.koibhi('Blue Theme Applied');
  }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Dlmode">Feature</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li>
          </ul>
          <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" aria-checked="true" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault"></label>
</div>
<button className="btn btn-success" onClick={BackGroundGreen}></button>
<button className="btn btn-warning" onClick={yelllowww}></button>
<button className="btn btn-danger" onClick={reddd}></button>
<button className="btn btn-secondary" onClick={greeyyyy}></button>
<button className="btn btn-primary" onClick={bluuueee}></button>
<button style={{color: 'white'}} className="btn" onClick={bluuueee}></button>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
        </div>
    )
}