import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark' ? 'dark' : 'light'} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Aj's App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">{props.title}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
          <label className="form-check-label " >Change theme </label>
          <div role="toolbar" aria-label="Toolbar with button groups" className={`btn-toolbar form-check form-switch text-${props.mode === 'dark' ? 'light' : props.mode}`}>

            <div class="btn-group me-2" role="group" aria-label="First group">
              <button type="button" className="btn btn-danger" onClick={props.toggleModeRed}>Red</button>
              <button type="button" className="btn btn-warning" onClick={props.toggleModeYellow}>Yellow</button>
              <button type="button" className="btn btn-success" onClick={props.toggleModeGreen}>Green</button>
              <button type="button" className="btn btn-dark" onClick={props.toggleModeDark}>Dark</button>
              <button type="button" className="btn btn-light" onClick={props.toggleModeLight}>White</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
