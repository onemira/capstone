import React, { Component } from 'react'
import Navbar from '../components/Navbar'
// import Iconbar from '../components/Iconbar'
import Footer from '../components/Footer'

class File extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <Iconbar /> */}
        <Footer />

        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <form method="post" action="#" id="#">
                <div class="form-group files">
                  <label>Upload Your File </label>
                  <input type="file" class="form-control" multiple="" />
                </div>
              </form>
            </div>
            <div class="col-md-6">
              <form method="post" action="#" id="#">
                <div class="form-group files color">
                  <label>Upload Your File </label>
                  <input type="file" class="form-control" multiple="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default File
