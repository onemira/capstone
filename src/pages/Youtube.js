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
        src: 'https://www.youtube.com/embed/8aGhZQkoFbQ',
        description: 'event loop'
      },
      {
        src: 'https://www.youtube.com/embed/uddZX9ZK6wY',
        description: ' New DevTools'
      },
      {
        src: 'https://www.youtube.com/embed/XKu_SEDAykw',
        description: 'How to work at Google'
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
          {this.state.videos.map(video => (
            <div className="video-testimonial-block">
              <div className="embed-responsive embed-responsive-16by9 videos">
                <iframe
                  className="embed-responsive-item"
                  max-width="560px"
                  max-height="315px"
                  src={video.src}
                  description={video.description}
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
        {/* <Pagination /> */}
      </>
    )
  }
}

export default Youtube
