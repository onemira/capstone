import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo_cut.png'

class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">
            <img src={logo} class="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  <i class="fa fa-home" />
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/link">
                  <i class="fa fa-link">
                    <span class="badge badge-danger">11</span>
                  </i>
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/youtube">
                  <i class="fa fa-video-camera">
                    <span class="badge badge-info">11</span>
                  </i>
                  Video
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/file">
                  <i class="fa fa-file">
                    <span class="badge badge-success">11</span>
                  </i>
                  File
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/code">
                  <i class="fa fa-code">
                    <span class="badge badge-warning">11</span>
                  </i>
                  Code
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/image">
                  <i class="fa fa-image">
                    <span class="badge badge-danger">11</span>
                  </i>
                  Image
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-search-minus">
                    <span class="badge badge-primary">11</span>
                  </i>
                  More
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to={'/Article'}>
                    <a class="dropdown-item" href="/article">
                      Article
                    </a>
                  </Link>
                  <Link to={'/Meetup'}>
                    <a class="dropdown-item" href="/Meetup">
                      Meetup
                    </a>
                  </Link>
                  <div class="dropdown-divider" />
                  <a class="dropdown-item" href="/grab-all">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Upload
            </button>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
