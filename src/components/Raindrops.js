import createCanvas from '../helpers/create-canvas'

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
  }
}

export default Raindrops
