import React, { Component } from 'react'

export default class jumbotron extends Component {
  render() {
    return (
      <>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading"> Devvit </h1>
            <p className="lead text-muted">
              Welcome Wizards! Here are something that makes you laugh,
              something resourceful,and something your folks want to share with!
            </p>
          </div>
        </section>
      </>
    )
  }
}
