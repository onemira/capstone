import React, { Component } from 'react'

class MainPage extends Component {
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
        <div class="screen">
          <ul class="icon">
            <li class="youtube">
              <i class="fab fa-youtube-square" />
            </li>
            <li class="link">
              <i class="fas fa-link" />
            </li>
            <li class="image">
              <i class="far fa-image" />
            </li>
            <li class="article">
              <i class="fab fa-medium" />
            </li>
            <li class="coding">
              <i class="fas fa-code" />
            </li>
            <li class="meetup">
              <i class="fab fa-meetup" />
            </li>
            <li class="contact">
              <i class="fas fa-envelope" />
            </li>
            <li class="file">
              <i class="fas fa-file" />
            </li>
          </ul>
        </div>
        <script async src="//jsfiddle.net/StartBootstrap/jm1sLd6f/embed/" />
      </>
    )
  }
}

export default MainPage
