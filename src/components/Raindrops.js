import createCanvas from '../helpers/create-canvas'

class Raindrops {
  width = 0
  height = 0
  canvas = null

  constructor(width, height) {
    this.width = width
    this.height = height
    this.init()
  }

  init() {
    this.canvas = createCanvas(this.width, this.height)
  }
}

export default Raindrops
