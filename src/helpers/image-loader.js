const loadImage = async (src, i, onLoad) =>
  new Promise((resolve) => {
    const img = new Image()
    src.img = img
    img.addEventListener('load', () => {
      if (typeof onLoad === 'function') {
        onLoad.call(null, img, i)
      }
      resolve(src)
    })
    img.src = src.src
  })

const loadImages = async (images, onLoad) =>
  Promise.all(images.map((src, i) => loadImage(src, i, onLoad)))

const imageLoader = async (images, onLoad) =>
  new Promise((resolve) =>
    loadImages(images, onLoad)
      .then((loadedImages) => {
        const r = {}
        loadedImages.forEach((curImage) => {
          r[curImage.name] = {
            img: curImage.img,
            src: curImage.src,
          }
        })
        resolve(r)
      })
      .catch((e) => console.error(e))
  )

export default imageLoader
