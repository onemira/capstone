import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Iconbar from '../components/Iconbar'

export default class Image extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <Iconbar /> */}
        <Footer />

        <div class="container">
          <div class="well">
            <div class="media">
              <a class="pull-left" href="#">
                <img
                  width="300"
                  height="230"
                  class="media-object"
                  src="https://files.slack.com/files-pri/T7HH5AJ56-FH540TF5J/img_0711.jpg"
                />
              </a>
              <div class="media-body">
                <h4 class="media-heading">Cohort-xiii</h4>
                <p class="text-right">By Katherine Trammell</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  pharetra varius quam sit amet vulputate. Quisque mauris augue,
                  molestie tincidunt condimentum vitae, gravida a libero. Aenean
                  sit amet felis dolor, in sagittis nisi. Sed ac orci quis
                  tortor imperdiet venenatis. Duis elementum auctor accumsan.
                  Aliquam in felis sit amet augue.
                </p>
                <ul class="list-inline list-unstyled">
                  <li>
                    <span>
                      <i class="glyphicon glyphicon-calendar" /> 2 days, 8 hours
                    </span>
                  </li>
                  <li>|</li>
                  <span>
                    <i class="glyphicon glyphicon-comment" /> 2 comments
                  </span>
                  <li>|</li>
                  <li>
                    <span class="glyphicon glyphicon-star" />
                    <span class="glyphicon glyphicon-star" />
                    <span class="glyphicon glyphicon-star" />
                    <span class="glyphicon glyphicon-star" />
                    <span class="glyphicon glyphicon-star-empty" />
                  </li>
                  <li>|</li>
                  <li>
                    <span>
                      <i class="fa fa-facebook-square" />
                    </span>
                    <span>
                      <i class="fa fa-twitter-square" />
                    </span>
                    <span>
                      <i class="fa fa-google-plus-square" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="well">
            <div class="media">
              <a class="pull-left" href="#">
                <img
                  class="media-object"
                  width="300"
                  height="230"
                  src="https://files.slack.com/files-pri/T7HH5AJ56-FGR7VG9NJ/image.png"
                />
              </a>
              <div class="media-body">
                <h4 class="media-heading">Receta 2</h4>
                <p class="text-right">By Emmanuel Vixamar</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  pharetra varius quam sit amet vulputate. Quisque mauris augue,
                  molestie tincidunt condimentum vitae, gravida a libero. Aenean
                  sit amet felis dolor, in sagittis nisi. Sed ac orci quis
                  tortor imperdiet venenatis. Duis elementum auctor accumsan.
                  Aliquam in felis sit amet augue.
                </p>
                <ul class="list-inline list-unstyled">
                  <li>
                    <span>
                      <i class="glyphicon glyphicon-calendar" /> 2 days, 8 hours{' '}
                    </span>
                  </li>
                  <li>|</li>
                  <span>
                    <i class="glyphicon glyphicon-comment" /> 2 comments
                  </span>
                  <li>|</li>
                  <li>
                    <span class="glyphicon glyphicon-star" />
                    <span class="glyphicon glyphicon-star" />
                    <span class="glyphicon glyphicon-star" />
                    <span class="glyphicon glyphicon-star" />
                    <span class="glyphicon glyphicon-star-empty" />
                  </li>
                  <li>|</li>
                  <li>
                    <span>
                      <i class="fa fa-facebook-square" />
                    </span>
                    <span>
                      <i class="fa fa-twitter-square" />
                    </span>
                    <span>
                      <i class="fa fa-google-plus-square" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
