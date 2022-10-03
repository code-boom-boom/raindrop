import React, { useEffect, useRef } from 'react'
import Raindrops from './Raindrops'
import dropColorSrc from '../assets/img/drop-color.png'
import dropAlphaSrc from '../assets/img/drop-alpha.png'
import textureRainFgSrc from '../assets/img/weather/texture-rain-fg.png'
import textureRainBgSrc from '../assets/img/weather/texture-rain-bg.png'
import textureSunFgSrc from '../assets/img/weather/texture-sun-fg.png'
import textureSunBgSrc from '../assets/img/weather/texture-sun-bg.png'
import textureFalloutFgSrc from '../assets/img/weather/texture-fallout-fg.png'
import textureFalloutBgSrc from '../assets/img/weather/texture-fallout-bg.png'
import textureDrizzleFgSrc from '../assets/img/weather/texture-drizzle-fg.png'
import textureDrizzleBgSrc from '../assets/img/weather/texture-drizzle-bg.png'
import textureStormLighteningFgSrc from '../assets/img/weather/texture-storm-lightning-fg.png'
import textureStormLighteningBgSrc from '../assets/img/weather/texture-storm-lightning-bg.png'
import createCanvas from '../helpers/create-canvas'
import RainRenderer from './RainRenderer'
import imageLoader from '../helpers/image-loader'

const textureBgSize = {
  width: 384,
  height: 256,
}
const textureFgSize = {
  width: 96,
  height: 64,
}

let renderer
let raindrops
let textureFg, textureFgCtx, textureBg, textureBgCtx
let textureRainFg,
  textureRainBg,
  // textureStormLightningFg,
  // textureStormLightningBg,
  // textureFalloutFg,
  // textureFalloutBg,
  // textureSunFg,
  // textureSunBg,
  // textureDrizzleFg,
  // textureDrizzleBg,
  dropColor,
  dropAlpha

const RendererOne = () => {
  const canvasEl = useRef(null)

  useEffect(() => {
    if (canvasEl.current) {
      imageLoader([
        { name: 'dropAlpha', src: dropAlphaSrc },
        { name: 'dropColor', src: dropColorSrc },

        { name: 'textureRainFg', src: textureRainFgSrc },
        { name: 'textureRainBg', src: textureRainBgSrc },

        { name: 'textureStormLightningFg', src: textureStormLighteningFgSrc },
        { name: 'textureStormLightningBg', src: textureStormLighteningBgSrc },

        { name: 'textureFalloutFg', src: textureFalloutFgSrc },
        { name: 'textureFalloutBg', src: textureFalloutBgSrc },

        { name: 'textureSunFg', src: textureSunFgSrc },
        { name: 'textureSunBg', src: textureSunBgSrc },

        { name: 'textureDrizzleFg', src: textureDrizzleFgSrc },
        { name: 'textureDrizzleBg', src: textureDrizzleBgSrc },
      ]).then((images) => {
        textureRainFg = images.textureRainFg.img
        textureRainBg = images.textureRainBg.img

        dropColor = images.dropColor.img
        dropAlpha = images.dropAlpha.img
        init()
      })
    }
  }, [canvasEl])

  const init = () => {
    const canvas = canvasEl.current
    const dpi = window.devicePixelRatio
    canvas.width = window.innerWidth * dpi
    canvas.height = window.innerHeight * dpi
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'

    raindrops = new Raindrops(
      canvas.width,
      canvas.height,
      dpi,
      dropAlpha,
      dropColor,
      {
        trailRate: 1,
        trailScaleRange: [0.2, 0.45],
        collisionRadius: 0.45,
        dropletsCleaningRadiusMultiplier: 0.28,
      }
    )

    textureFg = createCanvas(textureFgSize.width, textureFgSize.height)
    textureFgCtx = textureFg.getContext('2d')
    textureBg = createCanvas(textureBgSize.width, textureBgSize.height)
    textureBgCtx = textureBg.getContext('2d')

    generateTextures(textureRainFg, textureRainBg)

    renderer = new RainRenderer(
      canvas,
      raindrops.canvas,
      textureFg,
      textureBg,
      null,
      {
        brightness: 1.04,
        alphaMultiply: 6,
        alphaSubtract: 3,
      }
    )

    console.log(renderer)
  }

  const generateTextures = (fg, bg, alpha = 1) => {
    textureFgCtx.globalAlpha = alpha
    textureFgCtx.drawImage(fg, 0, 0, textureFgSize.width, textureFgSize.height)

    textureBgCtx.globalAlpha = alpha
    textureFgCtx.drawImage(bg, 0, 0, textureBgSize.width, textureBgSize.height)
  }

  return <canvas width="1" height="1" ref={canvasEl} />
}

export default RendererOne
