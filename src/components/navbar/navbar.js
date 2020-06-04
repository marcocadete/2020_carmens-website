import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const toggleNavDropDown = () => {
    setShowNav(!showNav)
  }
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} width="112" height="28" />
          </Link>

          <a
            role="button"
            onClick={toggleNavDropDown}
            className={
              showNav
                ? "navbar-burger burger is-active"
                : "navbar-burger burger"
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={showNav ? "navbar-menu is-active" : "navbar-menu"}
        >
          <div className="navbar-start">
            <Link to="/" className="navbar-item" activeClassName="is-active">
              Home
            </Link>

            <Link
              to="/blog"
              className="navbar-item"
              activeClassName="is-active"
            >
              Blog
            </Link>
          </div>

          {/* <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
