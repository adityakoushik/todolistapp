import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark indigo">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        

          <div className="collapse navbar-collapse" id="basicExampleNav">
        

            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
        
            </ul>

        
            { props.searchBar ? <form className="form-inline">
              <div className="md-form my-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              </div>
            </form> : ''}
          </div>

        
        </nav>
    )
}

// below code is for default props type
Header.defaultProps = {
    title: "My Title",
    // searchBar: true
}


// Below code is for define prop type
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired 
}
