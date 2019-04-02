import React, { Component } from 'react'
import Navbar from '../components/Navbar'

class Upload extends Component {
  render() {
    return (
      <>
        <Navbar />
        <form>
          <div className="form-group row mt-5 ml-5 mr-5">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-5">
              <input
                type="name"
                className="form-control"
                id="inputEmail3"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-group row mt-5 ml-5 mr-5">
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-5">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="Password"
              />
            </div>
          </div>
          <fieldset className="form-group">
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
                    checked
                  />
                  <label className="form-check-label" for="gridRadios1">
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
                  <label className="form-check-label" for="gridRadios2">
                    Video
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-group row mt-5 ml-5 mr-5">
            <div className="col-sm-2">Checkbox</div>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label className="form-check-label" for="gridCheck1">
                  Example checkbox
                </label>
              </div>
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

export default Upload
