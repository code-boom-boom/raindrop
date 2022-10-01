import React from 'react'
import dropColor from '../assets/img/drop-color.png'
import dropAlpha from '../assets/img/drop-alpha.png'
import textureRainFg from '../assets/img/weather/texture-rain-fg.png'
import textureRainBg from '../assets/img/weather/texture-rain-bg.png'
import textureSunFg from '../assets/img/weather/texture-sun-fg.png'
import textureSunBg from '../assets/img/weather/texture-sun-bg.png'
import textureFalloutFg from '../assets/img/weather/texture-fallout-fg.png'
import textureFalloutBg from '../assets/img/weather/texture-fallout-bg.png'
import textureDrizzleFg from '../assets/img/weather/texture-drizzle-fg.png'
import textureDrizzleBg from '../assets/img/weather/texture-drizzle-bg.png'

const ImagePreloader = () => (
  <div className="image-preload">
    <img src={dropColor} alt="" />
    <img src={dropAlpha} alt="" />
    <img src={textureRainFg} alt="" />
    <img src={textureRainBg} alt="" />
    <img src={textureSunFg} alt="" />
    <img src={textureSunBg} alt="" />
    <img src={textureFalloutFg} alt="" />
    <img src={textureFalloutBg} alt="" />
    <img src={textureDrizzleFg} alt="" />
    <img src={textureDrizzleBg} alt="" />
  </div>
)

export default ImagePreloader
