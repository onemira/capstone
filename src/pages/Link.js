import React, { Component } from 'react'
import Navbar from '../components/Navbar'
// import Iconbar from '../components/Iconbar'
import Footer from '../components/Footer'

export default class Link extends Component {
  state = {
    links: [
      {
        website_name: 'Font Awesome',
        description: "the web's most popular icon set and toolkit",
        link: 'https://fontawesome.com/',
        user: 'Mark',
        created_at: 'Feb 15 2019',
        delete: <i className="fas fa-trash-alt" />,
        edit: <i className="fas fa-cut" />
      },
      {
        website_name: 'Hatchful',
        description: 'Logo Generator',
        link: 'https://hatchful.shopify.com/',
        user: 'Shantell',
        created_at: 'Mar 11 2019',
        delete: <i className="fas fa-trash-alt" />,
        edit: <i className="fas fa-cut" />
      },
      {
        website_name: 'Hatchful',
        description: 'Logo Generator',
        link: 'https://hatchful.shopify.com/',
        user: 'Shantell',
        created_at: 'Mar 11 2019'
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
        description: '>Developer Documentary',
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
        {/* <Iconbar /> */}
        <Footer />
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading"> Devvit Links</h1>
            <p className="lead text-muted">
              Welcome Wizards! Here are something that makes you laugh,
              something resourceful,and something your folks want to share with!
            </p>
          </div>
        </section>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              DEV. TOOL
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/career">
              JOBS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/etc">
              ETC
            </a>
          </li>
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
              <th scope="col">
                <Link to={'/image'}>
                  <i className="fas fa-trash-alt" />
                </Link>
              </th>
              <th scope="col">
                <i className="fas fa-cut" />
              </th>
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
                <td>{link.delete}</td>
                <td>{link.edit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}
