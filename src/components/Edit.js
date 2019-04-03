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
          <div className="form-group row mt-5 ml-5 mr-5">
            <label
              htmlFor="inputWebsiteName"
              className="col-sm-2 col-form-label"
            >
              Website Name
            </label>
            <div className="col-sm-4">
              <input
                type="Website name"
                className="form-control"
                id="inputWebsiteName"
                // placeholder={this.props.link.website_name}
              />
            </div>
          </div>
          <div className="form-group row mt-5 ml-5 mr-5">
            <label htmlFor="inputLink" className="col-sm-2 col-form-label">
              Link
            </label>
            <div className="col-sm-4">
              <input
                type="url"
                className="form-control"
                id="inputLink"
                placeholder="Link"
              />
            </div>
          </div>
          <div className="form-group row mt-5 ml-5 mr-5">
            <label htmlFor="inputURL" className="col-sm-2 col-form-label">
              URL
            </label>
            <div className="col-sm-4">
              <input
                type="Website name"
                className="form-control"
                id="inputURL"
                placeholder="URL"
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
