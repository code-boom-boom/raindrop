import createCanvas from '../helpers/create-canvas'

const dropSize = 64

const defaultOptions = {
  minR: 10,
  maxR: 40,
  maxDrops: 900,
  rainChance: 0.3,
  rainLimit: 3,
  dropletsRate: 50,
  dropletsSize: [2, 4],
  dropletsCleaningRadiusMultiplier: 0.43,
  raining: true,
  globalTimeScale: 1,
  trailRate: 1,
  autoShrink: true,
  spawnArea: [-0.1, 0.95],
  trailScaleRange: [0.2, 0.5],
  collisionRadius: 0.65,
  collisionRadiusIncrease: 0.01,
  dropFallMultiplier: 1,
  collisionBoostMultiplier: 0.05,
  collisionBoost: 1,
}

class Raindrops {
  width = 0
  height = 0
  scale = 0
  dropColor = null
  dropAlpha = null
  options = null
  canvas = null
  ctx = null
  droplets = null
  dropletsPixelDensity = 1
  dropletsCtx = null
  dropletsCounter = 0
  drops = null
  dropsGfx = null
  clearDropletsGfx = null
  textureCleaningIterations = 0
  lastRender = null

  constructor(width, height, scale, dropAlpha, dropColor, options = {}) {
    this.width = width
    this.height = height
    this.scale = scale
    this.dropAlpha = dropAlpha
    this.dropColor = dropColor
    this.options = Object.assign({}, defaultOptions, options)
    this.init()
  }

  init() {
    this.canvas = createCanvas(this.width, this.height)
    this.ctx = this.canvas.getContext('2d')

    this.droplets = createCanvas(
      this.width * this.dropletsPixelDensity,
      this.height * this.dropletsPixelDensity
    )
    this.dropletsCtx = this.droplets.getContext('2d')

    this.drops = []
    this.dropsGfx = []

    this.renderDropsGfx()
  }

  renderDropsGfx() {
    const dropBuffer = createCanvas(dropSize, dropSize)
    const dropBufferCtx = dropBuffer.getContext('2d')
    this.dropsGfx = Array.apply(null, Array(255)).map(() => {
      const drop = createCanvas(dropSize, dropSize)
      // const dropCtx = drop.getContext('2d')

      dropBufferCtx.clearRect(0, 0, dropSize, dropSize)

      // color
      dropBufferCtx.globalCompositeOperation = 'source-over'
      dropBufferCtx.drawImage(this.dropColor, 0, 0, dropSize, dropSize)

      // blue overlay, for depth
      // dropBufferCtx.globalCompositeOperation = 'screen'
      // dropBufferCtx.fillStyle = 'rgba(0, 0, ' + i + ', 1'
      // dropBufferCtx.fillRect(0, 0, dropSize, dropSize)

      // alpha
      return drop
    })

    this.clearDropletsGfx = createCanvas(128, 128)
    const clearDropletsCtx = this.clearDropletsGfx.getContext('2d')
    clearDropletsCtx.fillStyle = '#000'
    clearDropletsCtx.beginPath()
    clearDropletsCtx.arc(64, 64, 64, 0, Math.PI * 2)
    clearDropletsCtx.fill()
  }
}

export default Raindrops
