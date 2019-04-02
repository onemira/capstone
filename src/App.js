import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Upload from './pages/Upload'
import Youtube from './pages/Youtube'
import Image from './pages/Image'
import Link from './pages/Link'
import Code from './pages/Code'
import Article from './pages/Article'
import File from './pages/File'
import Contact from './pages/Contact'
import Meetup from './pages/Meetup'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/Youtube" component={Youtube} />
            <Route exact path="/File" component={File} />
            <Route exact path="/Article" component={Article} />
            <Route exact path="/Code" component={Code} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Image" component={Image} />
            <Route exact path="/Link" component={Link} />
            <Route exact path="/Meetup" component={Meetup} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
