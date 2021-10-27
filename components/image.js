import React from 'react'

const Image = ({ url, alt }) => (
  <img
    draggable={false}
    className="h-full w-full relative"
    src={url}
    alt={alt}
  />
)

export default Image
