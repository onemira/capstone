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
          {/* <fieldset className="form-group">
            <div className="row  mt-5 ml-5 mr-5">
              <legend className="col-form-label col-sm-2 pt-0">
                Categories
              </legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    placeholder="form"
                    checked
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Link
                  </label>
                </div>

                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Video
                  </label>
                </div>
              </div>
            </div>
          </fieldset> */}
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
