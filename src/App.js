import React, { Component } from 'react'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
// import Youtube from './components/Youtube'
import Code from './components/Code'
import Article from './components/Article'
import Meetup from './components/Meetup'
import Image from './components/Image'
import Link from './components/Link'
import File from './components/File'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <MainPage />
        {/* <Youtube /> */}
        {/* <Code /> */}
        <Article />
        <Meetup />
        <Image />
        <Link />
        <File />
        <Contact />
      </>
    )
  }
}

export default App
