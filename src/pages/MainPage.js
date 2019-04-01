import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Iconbar from '../components/Iconbar'
import Footer from '../components/Footer'
// import { Link } from 'react-router-dom'

class MainPage extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Iconbar />
        <Footer />
        <script async src="//jsfiddle.net/StartBootstrap/jm1sLd6f/embed/" />
      </>
    )
  }
}

export default MainPage
