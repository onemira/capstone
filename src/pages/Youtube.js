import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'

// import Pagination from '../components/Pagination'
// import Iconbar from '../components/Iconbar'

class Youtube extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <Iconbar /> */}
        <Footer />
        <Jumbotron />
        <div className="space-medium transparent-background">
          <div className="container">
            <div className="row">
              <div>
                <div className="video-testimonial-block dp-flex justify-content-md-center">
                  <div className="video mr-5">
                    <iframe
                      title=""
                      width="400px"
                      height="315px"
                      src="https://www.youtube.com/embed/8aGhZQkoFbQ"
                      frameBorder="1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <a href="/" className="video-play" />
                </div>
              </div>
              <div>
                <div className="video-testimonial-block">
                  <div className="video">
                    <iframe
                      width="400px"
                      height="315px"
                      src="https://www.youtube.com/embed/uddZX9ZK6wY"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <a href="#" className="video-play" />
                </div>
              </div>
              <br /> <br />
              <div>
                <div className="video-testimonial-block">
                  <div className="video">
                    <iframe
                      width="400px"
                      height="315px"
                      src="https://www.youtube.com/embed/8ZBP0n6yeQo"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <a href="#" className="video-play" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Pagination /> */}
      </>
    )
  }
}

export default Youtube
