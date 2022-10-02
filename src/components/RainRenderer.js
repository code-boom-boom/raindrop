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
  }
}

export default RainRenderer
