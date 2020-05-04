const fs = require('fs')
const sizeOf = require('image-size')

const listing = fs
  .readdirSync('./img', { withFileTypes: true })
  .filter((f) => f.isFile())
  .map((f) => {
    const dim = sizeOf('./img/' + f.name)
    return {
      src: f.name,
      width: dim.width,
      height: dim.height,
      title: '',
      tags: '',
    }
  })

console.log(listing)
