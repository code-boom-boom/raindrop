import React from 'react'
import ImagePreloader from './ImagePreloader'

const DemoOne = () => {
  return (
    <>
      <ImagePreloader />
      <div className="container">
        <header className="codrops-header">
          <div className="codrops-links">
            <a
              href="https://tympanus.net/Development/CardStackEffects/"
              className="codrops-icon codrops-icon--prev"
              title="Previous Demo"
            >
              Previous Demo
            </a>
            <a
              href="https://tympanus.net/Development/CardStackEffects/"
              className="codrops-icon codrops-icon--drop"
              title="Back to the article"
            >
              Back to the Codrops article
            </a>
          </div>
        </header>
      </div>
    </>
  )
}

export default DemoOne
