import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo_cut.png'

class Navbar extends Component {
  render() {
    return (
      <>
        <div class="navigation">
          <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">
              <img src={logo} class="logo" />
            </a>
            {/* <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button> */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link d-flex flex-column mr-auto" href="/">
                    <i class="fa fa-home fa-2x" />
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-flex flex-column" href="/link">
                    <i class="fa fa-link fa-2x">
                      {/* <span class="badge badge-danger fa-1">11</span> */}
                    </i>
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-flex flex-column" href="/youtube">
                    <i class="fab fa-youtube fa-2x">
                      {/* <span class="badge badge-warning">11</span> */}
                    </i>
                    Video
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-flex flex-column" href="/image">
                    <i class="fa fa-image fa-2x">
                      {/* <span class="badge badge-primary">11</span> */}
                    </i>
                    Image
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-flex flex-column" href="/article">
                    <i class="fab fa-medium fa-2x">
                      {/* <span class="badge badge-secondary">11</span> */}
                    </i>
                    Article
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-flex flex-column" href="/code">
                    <i class="fa fa-code fa-2x">
                      {/* <span class="badge badge-info">11</span> */}
                    </i>
                    Code
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-flex flex-column" href="/meetup">
                    <i class="fab fa-meetup fa-2x">
                      {/* <span class="badge badge-light">11</span> */}
                    </i>
                    Meetup
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-flex flex-column" href="/file">
                    <i class="fa fa-file fa-2x">
                      {/* <span class="badge badge-success">11</span> */}
                    </i>
                    File
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-2">
                <input
                  class="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0 mt-3"
                  type="submit"
                >
                  Search
                </button>
                <button
                  class="btn btn-outline-success my-2 my-sm-0 ml-1 mr-1 mt-3"
                  type="submit"
                >
                  <a href="/Upload">Upload</a>
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Log in
                </button>
              </form>
            </div>
          </nav>
        </div>
      </>
    )
  }
}

export default Navbar
