import React from 'react'

function Gallery() {
  const images = [
    '/img1.webp',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg',
    '/img5.jpg',
    '/img6.jpg',
    '/img7.jpg',
    '/img8.jpg',
    'pricing.jpg',
    'bmi.jpg',
  ]
  return (
    <section className='gallery'>
      <h1>Become Best</h1>
      <div className='images'>
        <div>
          {
            images.slice(0,4).map((image, index) => (
              <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
            ))
          }
        </div>
        <div>
          {
            images.slice(3,6).map((image, index) => (
              <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
            ))
          }
        </div>
        <div>
          {
            images.slice(6,9).map((image, index) => (
              <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Gallery