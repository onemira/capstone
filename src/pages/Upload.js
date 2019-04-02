import React, { Component } from 'react'
import Navbar from '../components/Navbar'

class Upload extends Component {
  render() {
    return (
      <>
        <Navbar />
        <form>
          <div class="form-group row mt-5 ml-5 mr-5">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-5">
              <input
                type="name"
                class="form-control"
                id="inputEmail3"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="form-group row mt-5 ml-5 mr-5">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-5">
              <input
                type="password"
                class="form-control"
                id="inputPassword3"
                placeholder="Password"
              />
            </div>
          </div>
          <fieldset class="form-group">
            <div class="row  mt-5 ml-5 mr-5">
              <legend class="col-form-label col-sm-2 pt-0">Categories</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Link
                  </label>
                </div>

                <div class="form-check ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Video
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div class="form-group row mt-5 ml-5 mr-5">
            <div class="col-sm-2">Checkbox</div>
            <div class="col-sm-10">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label class="form-check-label" for="gridCheck1">
                  Example checkbox
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row mt-5 ml-5 mr-5">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">
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
