import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%"
  }
    return (
        // <footer className="page-footer font-small fixed-bottom" style={footerStyle}>
        <footer className="page-footer font-small fixed-bottom">
          <div className="footer-copyright text-center py-3 light-blue darken-1">© 2021 Copyright:
            <a href="https://codekree.com/">Codekree Solution LLP</a>
          </div>
        </footer>
    )
}
