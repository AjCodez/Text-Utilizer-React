import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==='dark'?'dark':'light'} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.about}</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                {/* <li><hr className="dropdown-divider"/></li> */}
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
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
              {/* <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" /> */}
            </div>
          </div>
        </div>
    </nav>
  )
}
