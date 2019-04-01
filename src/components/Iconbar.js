import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Iconbar extends Component {
  render() {
    return (
      <>
        <div class="screen background-image">
          <ul class="icon">
            <Link to={'/Link'}>
              <li class="link">
                <i class="fas fa-link" />
              </li>
            </Link>
            <Link to={'/Youtube'}>
              <li class="youtube">
                <i class="fab fa-youtube-square" />
              </li>
            </Link>
            <Link to={'/Image'}>
              <li class="image">
                <i class="far fa-image" />
              </li>
            </Link>
            <Link to={'/article'}>
              <li class="article">
                <i class="fab fa-medium" />
              </li>
            </Link>
            <Link to={'/Code'}>
              <li class="coding">
                <i class="fas fa-code" />
              </li>
            </Link>
            <Link to={'/Meetup'}>
              <li class="meetup">
                <i class="fab fa-meetup" />
              </li>
            </Link>
            <Link to={'/File'}>
              <li class="file">
                <i class="fas fa-file" />
              </li>
            </Link>
          </ul>
        </div>
      </>
    )
  }
}
