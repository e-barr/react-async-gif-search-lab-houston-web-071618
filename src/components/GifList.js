import React, { Component } from 'react'

const GifList = ({firstThreeGifs}) => {
  const allGifs = firstThreeGifs.map(oneGif => { return <li><img src={oneGif.images.original.url} key={oneGif.type.id} alt="a gif"/></li>})

  return (
    <ul className="gif-list">{allGifs}</ul>
  )
}

export default GifList
