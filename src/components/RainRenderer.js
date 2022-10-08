import GL from './GL'
import vertShader from '../shaders/simple.vert.js'
import fragShader from '../shaders/water.frag.js'

const defaultOptions = {
  renderShadow: false,
  minRefraction: 256,
  maxRefraction: 512,
  brightness: 1,
  alphaMultiply: 20,
  alphaSubtract: 5,
  parallaxBg: 5,
  parallaxFg: 20,
}

class RainRenderer {
  canvas = null
  canvasLiquid = null
  imageShine = ''
  imageFg = ''
  imageBg = ''
  options = null
  gl = null
  width = 0
  height = 0
  textures = null
  programWater = null
  programBlurX = null
  programBlurY = null
  parallaxX = 0
  parallaxY = 0
  renderShadow = false

  constructor(
    canvas,
    canvasLiquid,
    imageFg,
    imageBg,
    imageShine = null,
    options = {}
  ) {
    this.canvas = canvas
    this.canvasLiquid = canvasLiquid
    this.imageShine = imageShine
    this.imageFg = imageFg
    this.imageBg = imageBg
    this.options = Object.assign({}, defaultOptions, options)
    this.init()
  }

  init() {
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.gl = new GL(this.canvas, { alpha: false }, vertShader, fragShader)
  }
}

export default RainRenderer
