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
        user: 'Mark',
        src: 'https://www.youtube.com/embed/8aGhZQkoFbQ',
        description: 'event loop'
      },
      {
        user: 'Mark',
        src: 'https://www.youtube.com/embed/uddZX9ZK6wY',
        description: ' New DevTools'
      },
      {
        user: 'Mark',
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
            <div className="video-testimonial-block videos">
              <div className="embed-responsive embed-responsive-16by9 video">
                <iframe
                  className="embed-responsive-item"
                  title="videos"
                  // max-width="560px"
                  // max-height="315px"
                  src={video.src}
                  description={video.description}
                  frameBorder="1"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* <a href="/" className="video-play" /> */}
              {/* ------delete & edit btn--- */}
              <div className="video-detail">
                <p>{video.user}</p>
                <p>{video.description}</p>
                <button
                  className="btn btn-light btn-outline-danger video-delete-btn"
                  data-dismiss="modal"
                  type="button"
                  id="del"
                >
                  <a href="/">
                    <i className="fas fa-trash-alt" />
                  </a>
                </button>
                <button
                  className="btn btn-light btn-outline-warning video-edit-btn"
                  data-dismiss="modal"
                  type="button"
                  id="edit"
                >
                  <a href="/">
                    <i className="fas fa-cut" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <Pagination /> */}
      </>
    )
  }
}

export default Youtube
