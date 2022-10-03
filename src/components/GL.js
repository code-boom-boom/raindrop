import * as WebGL from '../helpers/webgl'

class GL {
  canvas = null
  gl = null
  program = null
  width = 0
  height = 0
  constructor(canvas, options, vert, frag) {
    this.init(canvas, options, vert, frag)
  }

  init(canvas, options, vert, frag) {
    this.canvas = canvas
    this.width = canvas.width
    this.height = canvas.height
    this.gl = WebGL.getContext(canvas, options)
    this.program = this.createProgram(vert, frag)
    this.useProgram()
  }

  createProgram(vert, frag) {
    return WebGL.createProgram(this.gl, vert, frag)
  }

  useProgram() {
    this.gl.useProgram(this.program)
  }
}

export default GL
