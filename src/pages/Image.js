import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Lightbox from 'react-lightbox-component'
import Jumbotron from '../components/Jumbotron'

export default class Image extends Component {
  state = {
    images: [
      {
        src:
          'https://files.slack.com/files-pri/T7HH5AJ56-FHEUD6EHL/655ab26acda49d933e8c8ecf429ab3367e7811bd61ea7d1ce1c3b46a6db78881_1.jpg.jpg'
      },
      {
        src:
          'https://files.slack.com/files-pri/T7HH5AJ56-FH540TF5J/img_0711.jpg'
      },
      {
        src: 'https://files.slack.com/files-pri/T7HH5AJ56-FGU1076CW/e09b2c8.jpg'
      },
      {
        src:
          'https://files.slack.com/files-pri/T7HH5AJ56-FF8ECPRG8/image_from_ios.jpg'
      },
      {
        src:
          'https://files.slack.com/files-pri/T7HH5AJ56-FEJ0AHZ6D/image_from_ios.jpg'
      },
      {
        src:
          'https://files.slack.com/files-pri/T7HH5AJ56-FEXA5BBBQ/image_from_ios.jpg'
      },
      {
        src:
          'https://files.slack.com/files-pri/T7HH5AJ56-FESSZ1ZSQ/image_from_ios.jpg'
      },
      {
        src: 'https://files.slack.com/files-pri/T7HH5AJ56-FGFLSG3RC/image.png'
      }
    ]
  }

  render() {
    return (
      <>
        <Navbar />
        <Footer />
        <Jumbotron />
        <main role="main">
          <section className="album py-5 bg-light center dp-flex justify-content-md-center">
            <div className="row">
              <div className="col-lg-12 text-center my-2">
                <h4 className="border-bottom border-dark p-2">
                  <span>Let Your Sadness Comment Out!😆</span>
                  {/* <pre><code>
                    if(sad() === true){spread.stop(); beHappy();}</code></pre> */}
                </h4>
              </div>
            </div>
            <div className="row image-lightbox mx-auto">
              <Lightbox
                images={this.state.images}
                renderImageFunc={(
                  index,
                  image,
                  toggleLightbox,
                  width,
                  height
                ) => {
                  return (
                    <div>
                      <img
                        key={index}
                        src={image.src}
                        className="rounded"
                        // border="dark"
                        style={{ width: '350px', height: '350px' }}
                        onClick={toggleLightbox.bind(null, index)}
                        alt="img"
                      />
                      <button
                        className="btn btn-light btn-outline-danger image-delete-btn"
                        data-dismiss="modal"
                        type="button"
                        id="del"
                      >
                        <a href="/image">
                          <i className="fas fa-trash-alt" />
                        </a>
                      </button>
                      <button
                        className="btn btn-light btn-outline-warning image-edit-btn"
                        data-dismiss="modal"
                        type="button"
                        id="edit"
                      >
                        <a href={`/edit/${index}`}>
                          <i className="fas fa-cut" />
                        </a>
                      </button>
                    </div>
                  )
                }}
              />
            </div>
          </section>
        </main>
        {/* <Pagination /> */}
      </>
    )
  }
}
