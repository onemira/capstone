import React, { Component } from 'react'
import Navbar from './components/Navbar'

class Youtube extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
          integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg"
          crossorigin="anonymous"
        />
        <div class="space-medium">
          <div class="container">
            <div class="row">
              <div class="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12 text-center">
                <div class="section-title">
                  <h2>Youtube</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="video-testimonial-block">
                  <div class="video">
                    <iframe
                      src="https://www.youtube.com/embed/KEiAVv1UNac"
                      allowfullscreen
                    />
                  </div>
                  <a href="#" class="video-play" />
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="video-testimonial-block">
                  <div class="video">
                    <iframe
                      src="https://www.youtube.com/embed/KEiAVv1UNac"
                      allowfullscreen
                    />
                  </div>
                  <a href="#" class="video-play" />
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="video-testimonial-block">
                  <div class="video">
                    <iframe
                      src="https://www.youtube.com/embed/KEiAVv1UNac"
                      allowfullscreen
                    />
                  </div>
                  <a href="#" class="video-play" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Youtube
