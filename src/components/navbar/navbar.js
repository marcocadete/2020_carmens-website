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
            <img src={logo} width="112" height="28" alt="logo" />
          </Link>

          <button
            // role="button"
            // tabIndex="0"
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
          </button>
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
            <Link
              to="/portfolio"
              className="navbar-item"
              activeClassName="is-active"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
