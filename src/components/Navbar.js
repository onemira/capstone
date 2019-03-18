import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
        <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            Dev. Directory
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
                <a class="nav-link" href="#">
                  <i class="fa fa-home" />
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-link">
                    <span class="badge badge-danger">11</span>
                  </i>
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-image">
                    <span class="badge badge-danger">11</span>
                  </i>
                  Image
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-file">
                    <span class="badge badge-success">11</span>
                  </i>
                  File
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-code">
                    <span class="badge badge-warning">11</span>
                  </i>
                  Codes
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
                  <a class="dropdown-item" href="#">
                    Video
                  </a>
                  <a class="dropdown-item" href="#">
                    Image
                  </a>
                  <div class="dropdown-divider" />
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-bell">
                    <span class="badge badge-info">11</span>
                  </i>
                  Test
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-envelope">
                    {/* <span class="badge badge-success">11</span> */}
                  </i>
                  Contact
                </a>
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
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
