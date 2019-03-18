import React, { Component } from 'react'
// import Navbar from './components/Navbar'

class Code extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        {/* <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        /> */}
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js" />
        <script src="//code.jquery.com/jquery-1.11.1.min.js" />
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 col-xs-12">
              <img
                src="https://www.bugsee.com/wp-content/uploads/2016/04/github.png"
                alt=""
              />
              <p>
                Best way to show programming code in a Bootstrap site is to
                simply embed a
                <a href="https://gist.github.com/" target="_blank">
                  GitHub Gist
                </a>
                .
                <a
                  href="https://help.github.com/articles/about-gists/"
                  target="_blank"
                >
                  Help
                </a>
              </p>
              <script src="https://gist.github.com/VirtuaCreative/ef47c25b7f8933dd78fcb0f848464dde.js" />
              Best viewed
              <a href="http://bootsnipp.com/iframe/W75mz" target="_blank">
                full screen
              </a>
              :
              <a
                href="http://validator.w3.org/check?uri=http%3A%2F%2Fbootsnipp.com%2Fiframe%2FW75mz"
                target="_blank"
              >
                <small>HTML</small>
                <sup>5</sup>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Code
