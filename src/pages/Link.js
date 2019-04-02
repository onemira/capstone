import React, { Component } from 'react'
import Navbar from '../components/Navbar'
// import Iconbar from '../components/Iconbar'
import Footer from '../components/Footer'

export default class Link extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <Iconbar /> */}
        <Footer />
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              DEV. TOOL
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              JOBS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              ETC
            </a>
          </li>
        </ul>
        <table class="table table-hover ml-6 mr-6">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Website Name</th>
              <th scope="col">Description</th>
              <th scope="col">Link</th>
              <th scope="col">User</th>
              <th scope="col">Created at</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Hatchful</td>
              <td>Logo Generator</td>
              <td>
                <a href="https://hatchful.shopify.com" />
                https://hatchful.shopify.com/
              </td>
              <td>Shantell</td>
              <td>Mar 11 2019</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>dev.doc</td>
              <td>Developer Documentary</td>
              <td>https://devdocs.io/</td>
              <td>Gavin</td>
              <td>Mar 29 2019</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>PONY</td>
              <td>ERD maker</td>
              <td>https://editor.ponyorm.com/</td>
              <td>Mira</td>
              <td>Apr 1 2019</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}
