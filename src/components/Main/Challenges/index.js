import React, { Component } from "react"

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context("../../../images/unsdg", false, /\.(png|jpe?g|svg)$/));

export class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: images,
      index: 0,
    };
  }

  nextImage = () => {
    this.setState({
      index: ((this.state.index + 1) % this.state.images.length)
    })
  }

  prevImage = () => {
    this.setState({
      index: (this.state.index - 1 < 0 ? this.state.images.length - 1 : this.state.index - 1)
    })
  }

  render() {
    const image = this.state.images[this.state.index];

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="heading">
              Challenges
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <p className="content">
              In 2016, the <span className="accent">United Nations </span>
              created the <span className="accent">Sustainable Development
              Goals (SDGs)</span> as a blueprint to create a sustainable
              future by 2030. The SDGs comprise 17 different goals that
              relate to the areas of basic human needs, industry, community,
              and the environment.
              <br/>
              <br/>
              Accomplishing the goals within the scope of a decade requires
              various political, economic, and social will. In addition, it
              also requires the insights and contributions of multiple individuals
              and companies in STEM. During this hackathon, we challenge you – as
              intelligent innovators and future leaders in STEM – to create a
              product that will help nations accomplish one or more of the SDGs.
            </p>
            <div className="button-container">
              <a href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/" className="button button-secondary button-margin">
                Visit UN SDG Website
              </a>
              <br className="d-block d-md-none"/><br className="d-block d-md-none"/>
              <a href="/SET_Hacks_Case_Package.pdf" className="button button-margin">
                Download Case Package
              </a>
              <br className="d-block d-md-none"/>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <img src={image} alt={"UN SDG Goal " + this.state.index} className="img-fluid mt-5 mt-lg-0"/>
            <button className="button carousel-control" onClick={this.prevImage}>
              Previous
            </button>
            <button className="button carousel-control" onClick={this.nextImage}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

