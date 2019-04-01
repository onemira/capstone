import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Iconbar from '../components/Iconbar'

class Youtube extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <Iconbar /> */}
        <Footer />

        <div class="space-medium transparent-background">
          <div class="container">
            <div class="row">
              <div class="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12 text-center">
                <div class="section-title" />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="video-testimonial-block">
                  <div class="video">
                    <iframe
                      // width="560"
                      // height="315"
                      src="https://www.youtube.com/embed/8aGhZQkoFbQ"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <a href="#" class="video-play" />
                </div>
              </div>
              <br /> <br />
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="video-testimonial-block">
                  <div class="video">
                    <iframe
                      // width="560"
                      // height="315"
                      src="https://www.youtube.com/embed/uddZX9ZK6wY"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <a href="#" class="video-play" />
                </div>
              </div>
              <br /> <br />
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="video-testimonial-block">
                  <div class="video">
                    <iframe
                      // width="560"
                      // height="315"
                      src="https://www.youtube.com/embed/8ZBP0n6yeQo"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
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
