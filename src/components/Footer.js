import React from 'react'

function Footer(props) {

     let footerStyle = {
          position: 'fixed',
          height: 'auto',
          bottom: '0',
          width: '100%',
          margin: 'auto',
     }

     let footerTextStyle = {
          fontWeight: '600',
          color: 'black',
          fontSize: '12px',
     }
     return (
          <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 mb-0 border-top" style={footerStyle}>
               <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="me-2 mb-md-0 text-muted text-decoration-none lh-1">
                         <img src="footerLogo.png" alt="Bootstrap" width="36" height="36" />
                    </a>
                    <span className="mb-md-0" style={footerTextStyle}>&copy; 2024 Company, Inc</span>
               </div>

               <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="/"><img src="facebook-48.png" alt="Bootstrap" width="36" height="36" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="/"><img src="instagram-48.png" alt="Bootstrap" width="36" height="36" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="/"><img src="twitter-48.png" alt="Bootstrap" width="36" height="36" /></a></li>
               </ul>
          </footer>
     )
}

export default Footer
