import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'
// import Pagination from '../components/Pagination'
// import Iconbar from '../components/Iconbar'

class Youtube extends Component {
  state = {
    videos: [
      {
        src: 'https://www.youtube.com/embed/8aGhZQkoFbQ'
      },
      {
        src: 'https://www.youtube.com/embed/uddZX9ZK6wY'
      },
      {
        src: 'https://www.youtube.com/embed/XKu_SEDAykw'
      }
    ]
  }
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
              <div className="buttons mx-auto">
                {this.state.videos.map(video => (
                  <div className="video-testimonial-block ">
                    <div className="video mr-5">
                      <iframe
                        width="560px"
                        height="315px"
                        src={video.src}
                        frameBorder="1"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <a href="/" className="video-play" />
                    <button
                      className="btn btn-outline-danger"
                      data-dismiss="modal"
                      type="button"
                      id="del"
                    >
                      <a href="/">
                        <i className="fas fa-trash-alt" />
                      </a>
                    </button>
                    <button
                      className="btn btn-outline-warning"
                      data-dismiss="modal"
                      type="button"
                      id="edit"
                    >
                      <a href="/">
                        <i className="fas fa-cut" />
                      </a>
                    </button>
                  </div>
                ))}
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
