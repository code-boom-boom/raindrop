const loadImage = (src, i, onLoad) =>
  new Promise((resolve) => {
    if (typeof src === 'string') {
      src = {
        name: 'image' + i,
        src,
      }

      const img = new Image()
      src.img = img
      img.addEventListener('load', () => {
        if (typeof onLoad === 'function') {
          onLoad.call(null, img, i)
        }
        resolve(src)
      })
      img.src = src.src
    }
  })

const loadImages = (images, onLoad) =>
  Promise.all(images.map((src, i) => loadImage(src, i, onLoad)))

const imageLoader = (images, onLoad) =>
  new Promise((resolve) =>
    loadImages(images, onLoad).then((loadedImages) => {
      const r = {}
      loadedImages.forEach((curImage) => {
        r[curImage.name] = {
          img: curImage.img,
          src: curImage.src,
        }
      })
      resolve(r)
    })
  )

export default imageLoader
