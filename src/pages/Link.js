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

        <div class="container">
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <div class="panel panel-default panel-table">
                <div class="panel-heading">
                  <div class="row">
                    <div class="col col-xs-6">
                      <h3 class="panel-title">Links</h3>
                    </div>
                    <div class="col col-xs-6 text-right">
                      <button
                        type="button"
                        class="btn btn-sm btn-primary btn-create"
                      >
                        Create New
                      </button>
                    </div>
                  </div>
                </div>
                <div class="panel-body">
                  <table class="table table-striped table-bordered table-list">
                    <thead>
                      <tr>
                        <th>
                          <em class="fa fa-cog" />
                        </th>
                        <th class="hidden-xs">ID</th>
                        <th>Description</th>
                        <th>Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td align="center">
                          <a class="btn btn-default">
                            <em class="fa fa-pencil" />
                          </a>
                          <a class="btn btn-danger">
                            <em class="fa fa-trash" />
                          </a>
                        </td>
                        <td class="hidden-xs">1</td>
                        <td>Logo Maker</td>
                        <td>https://hatchful.shopify.com/</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="panel-footer">
                  <div class="row">
                    <div class="col col-xs-4">Page 1 of 5</div>
                    <div class="col col-xs-8">
                      <ul class="pagination hidden-xs pull-right">
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">5</a>
                        </li>
                      </ul>
                      <ul class="pagination visible-xs pull-right">
                        <li>
                          <a href="#">«</a>
                        </li>
                        <li>
                          <a href="#">»</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
