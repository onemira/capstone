import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

export default class Link extends Component {
  state = {
    links: [
      {
        website_name: 'Font Awesome',
        description: "The Web's Most Popular Icon Set and Toolkit",
        link: 'https://fontawesome.com/',
        user: 'Mark',
        created_at: 'Feb 15 2019'
      },
      {
        website_name: 'Hatchful',
        description: 'Logo Generator',
        link: 'https://hatchful.shopify.com/',
        user: 'Shantell',
        created_at: 'Mar 11 2019'
      },
      {
        website_name: 'Unsplash',
        description: 'Free High-resolution Photos',
        link: 'https://unsplash.com/',
        user: 'Shantell',
        created_at: 'Mar 15 2019'
      },
      {
        website_name: 'PONY',
        description: 'ERD maker',
        link: 'https://editor.ponyorm.com/',
        user: 'Mira',
        created_at: 'Mar 21 2019'
      },
      {
        website_name: 'dev.doc',
        description: 'Programming Language Documentary',
        link: 'https://devdocs.io/',
        user: 'Gavin',
        created_at: 'Mar 29 2019'
      }
    ]
  }

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        {/* <Iconbar /> */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              DEV. TOOL
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/career">
              JOBS
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/etc">
              ETC
            </a>
          </li> */}
        </ul>

        <table className="table table-hover ml-6 mr-6">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Website Name</th>
              <th scope="col">Description</th>
              <th scope="col">Link</th>
              <th scope="col">User</th>
              <th scope="col">Created at</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {this.state.links.map((link, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{link.website_name}</td>
                <td>{link.description}</td>
                <td>
                  <a href={link.link} />
                  {link.link}
                </td>
                <td>{link.user}</td>
                <td>{link.created_at}</td>
                <td
                  className="btn btn-outline-danger"
                  data-dismiss="modal"
                  type="button"
                  id="del"
                >
                  <a href="/link">
                    <i className="fas fa-trash-alt" />
                  </a>
                </td>
                <td
                  className="btn btn-outline-warning"
                  data-dismiss="modal"
                  type="button"
                  id="edit"
                >
                  <a href={`/edit/${index}`}>
                    <i className="fas fa-cut" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}
