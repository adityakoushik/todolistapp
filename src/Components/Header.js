import React from 'react'
import PropTypes from 'prop-types'


export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark indigo">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        

          <div className="collapse navbar-collapse" id="basicExampleNav">
        

            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home
                  <span className="sr-only">(current)</span>
                </a>
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
