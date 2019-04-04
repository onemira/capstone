import React, { Component } from 'react'
import Navbar from './Navbar'
import Jumbotron from '../components/Jumbotron'

class Edit extends Component {
  componentDidMount = () => {
    // TODO:  we will do an API call to get the information
    console.log('getting the information for ' + this.props.match.params.id)
  }

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <form>
          {/* -----WebsiteName input----- */}
          <div className="form-group row mt-3 ml-5 mr-5">
            <label for="inputName" className="col-sm-2 col-form-label">
              Title
            </label>
            <div className="col-sm-5">
              <input
                type="name"
                className="form-control"
                id="inputName"
                placeholder="Website Name"
              />
            </div>
          </div>
          {/* -----URL input----- */}
          <div className="form-group row mt-3 ml-5 mr-5">
            <label for="inputURL" className="col-sm-2 col-form-label">
              URL
            </label>
            <div className="col-sm-5">
              <input
                type="url"
                className="form-control"
                id="inputURL"
                placeholder="URL"
              />
            </div>
          </div>
          <p className="text-primary ml-5">
            *SRC URL for image or video uploading
          </p>
          {/* ----Description input----- */}
          <div className="form-group row mt-3 ml-5 mr-5">
            <label for="inputURL" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-5">
              <input
                type="Description"
                className="form-control"
                id="inputDescription"
                placeholder="Description"
              />
            </div>
          </div>
          <div className="form-group row mt-5 ml-5 mr-5">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default Edit
