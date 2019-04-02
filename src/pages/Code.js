import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Iconbar from '../components/Iconbar'
import Footer from '../components/Footer'

class Code extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Iconbar />
        <Footer />
        <div class="card text-center">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
      </>
    )
  }
}

export default Code
