import React from 'react'
import ImagePreloader from './ImagePreloader'
import RendererOne from './RendererOne'

const DemoOne = () => {
  return (
    <div className="demo-1">
      <ImagePreloader />
      <div className="container">
        <header className="codrops-header">
          <div className="codrops-links">
            <a
              href="https://tympanus.net/Development/CardStackEffects/"
              className="codrops-icon codrops-icon--prev"
              title="Previous Demo"
            >
              <span>Previous Demo</span>
            </a>
            <a
              href="https://tympanus.net/Development/CardStackEffects/"
              className="codrops-icon codrops-icon--drop"
              title="Back to the article"
            >
              <span>Back to the Codrops article</span>
            </a>
          </div>
          <h1>Rain &amp; Water Effects</h1>
          <nav className="codrops-demos">
            <a className="current-demo" href="#">
              Weather
            </a>
            <a href="#">Video</a>
          </nav>
        </header>
        <div className="slideshow">
          <RendererOne />
          {/*========== Heavy Rain ==========*/}
          <div
            className="slide slide--current"
            id="slide-1"
            data-weather="rain"
          >
            <div className="slide__element slide__element--date">
              Sunday, 24<sup>th</sup> of October 2043
            </div>
            <div className="slide__element slide__element--temp">
              12°<small>C</small>
            </div>
          </div>
          {/*========== Drizzle ==========*/}
          <div className="slide" id="slide-2" data-weather="drizzle">
            <div className="slide__element slide__element--date">
              Saturday, 25<sup>th</sup> of October 2043
            </div>
            <div className="slide__element slide__element--temp">
              18°<small>C</small>
            </div>
          </div>
          {/*========== Sunny ==========*/}
          <div className="slide" id="slide-3" data-weather="sunny">
            <div className="slide__element slide__element--date">
              Monday, 26<sup>th</sup> of October 2043
            </div>
            <div className="slide__element slide__element--temp">
              25°<small>C</small>
            </div>
          </div>
          {/*========== Heavy rain ==========*/}
          <div className="slide" id="slide-5" data-weather="storm">
            <div className="slide__element slide__element--date">
              Wednesday, 28<sup>th</sup> of October 2043
            </div>
            <div className="slide__element slide__element--temp">
              20°<small>C</small>
            </div>
          </div>
          {/*========== Fallout ==========*/}
          <div className="slide" id="slide-4" data-weather="fallout">
            <div className="slide__element slide__element--date">
              Tuesday, 27<sup>th</sup> of October 2043
            </div>
            <div className="slide__element slide__element--temp">
              34°<small>C</small>
            </div>
          </div>
          <nav className="slideshow__nav">
            <span className="nav-item">
              <i className="icon icon--rainy"></i>
              <span>10/24</span>
            </span>
            <span className="nav-item">
              <i className="icon icon--drizzle"></i>
              <span>10/25</span>
            </span>
            <span className="nav-item">
              <i className="icon icon--sun"></i>
              <span>10/26</span>
            </span>
            <span className="nav-item">
              <i className="icon icon--storm"></i>
              <span>10/28</span>
            </span>
            <span className="nav-item">
              <i className="icon icon--radioactive"></i>
              <span>10/27</span>
            </span>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default DemoOne
