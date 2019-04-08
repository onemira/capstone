import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

// import Footer from '../components/Footer'
// import Pagination from '../components/Pagination'
// import Iconbar from '../components/Iconbar'

class Youtube extends Component {
  state = {
    videos: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/videos').then(response => {
      this.setState({ videos: response.data })
    })
  }

  render() {
    return (
      <>
        <Navbar />
        {/* <Iconbar /> */}
        {/* <Footer /> */}
        <Jumbotron />
        <Link className="btn btn-dark mx-auto width-200px" to="/videos/upload">
          {' '}
          Upload{' '}
        </Link>
        <div className="space-medium transparent-background">
          {this.state.videos.map(video => (
            <div className="video-testimonial-block videos">
              <div className="embed-responsive embed-responsive-16by9 video">
                <iframe
                  className="embed-responsive-item"
                  title="videos"
                  src={video.url}
                  description={video.description}
                  frameBorder="1"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* ------delete & edit btn--- */}
              <div className="video-detail">
                {/* <p>{video.name}</p>
                <p>{video.description}</p> */}
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
      </>
    )
  }
}

export default Youtube
