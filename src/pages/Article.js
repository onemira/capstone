import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Article extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Footer />

        {/* <div class="container">
          <div class="row">
            <h1>Article Thumbnails</h1>
            <p>Use it to your news site, feature a article.</p>
          </div> */}
        {/* <div class="row">
            <div class="col-md-5 col-lg-5">
              <div class="featured-article">
                <a href="#">
                  <img src="http://placehold.it/482x350" alt="" class="thumb" />
                </a>
                <div class="block-title">
                  <h2>Lorem ipsum dolor asit amet</h2>
                  <p class="by-author">
                    <small>By Jhon Doe</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-lg-7">
              <ul class="media-list main-list">
                <li class="media">
                  <a class="pull-left" href="#">
                    <img
                      class="media-object"
                      src="http://placehold.it/150x90"
                      alt="..."
                    />
                  </a>
                  <div class="media-body">
                    <h4 class="media-heading">Lorem ipsum dolor asit amet</h4>
                    <p class="by-author">By Jhon Doe</p>
                  </div>
                </li>
                <li class="media">
                  <a class="pull-left" href="#">
                    <img
                      class="media-object"
                      src="http://placehold.it/150x90"
                      alt="..."
                    />
                  </a>
                  <div class="media-body">
                    <h4 class="media-heading">Lorem ipsum dolor asit amet</h4>
                    <p class="by-author">By Jhon Doe</p>
                  </div>
                </li>
                <li class="media">
                  <a class="pull-left" href="#">
                    <img
                      class="media-object"
                      src="http://placehold.it/150x90"
                      alt="..."
                    />
                  </a>
                  <div class="media-body">
                    <h4 class="media-heading">Lorem ipsum dolor asit amet</h4>
                    <p class="by-author">By Jhon Doe</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </>
    )
  }
}

export default Article
