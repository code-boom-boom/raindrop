import React, { useEffect, useRef, useState } from 'react'
import Raindrops from './Raindrops'
// import ImageLoader from './ImageLoader'
// import dropColor from '../assets/img/drop-color.png'
// import dropAlpha from '../assets/img/drop-alpha.png'
// import textureRainFg from '../assets/img/weather/texture-rain-fg.png'
// import textureRainBg from '../assets/img/weather/texture-rain-bg.png'
// import textureSunFg from '../assets/img/weather/texture-sun-fg.png'
// import textureSunBg from '../assets/img/weather/texture-sun-bg.png'
// import textureFalloutFg from '../assets/img/weather/texture-fallout-fg.png'
// import textureFalloutBg from '../assets/img/weather/texture-fallout-bg.png'
// import textureDrizzleFg from '../assets/img/weather/texture-drizzle-fg.png'
// import textureDrizzleBg from '../assets/img/weather/texture-drizzle-bg.png'
// import textureStormLighteningFg from '../assets/img/weather/texture-storm-lightning-fg.png'
// import textureStormLighteningBg from '../assets/img/weather/texture-storm-lightning-bg.png'

const RendererOne = () => {
  const canvasEl = useRef(null)
  const [raindrops, setRainDrops] = useState(null)

  useEffect(() => {
    if (canvasEl.current) {
      init()
    }
  }, [canvasEl])

  const init = () => {
    const canvas = canvasEl.current
    const dpi = window.devicePixelRatio
    canvas.width = window.innerWidth * dpi
    canvas.height = window.innerHeight * dpi
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'

    setRainDrops(new Raindrops(canvas.width, canvas.height))

    console.log('raindrop', raindrops)
  }

  return <canvas width="1" height="1" ref={canvasEl} />
}

export default RendererOne
