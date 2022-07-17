import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Banner.css'

const Banner = ({ image, title, alt }) => {
  useEffect(() => {
    AOS.init({duration: 3000})
  }, [])
  return (
    <div className='bg-image banner-image shadow-4-strong' data-aos='fade-up'>
      <img src={image} className='img-fluid' alt={alt} />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0 image-heading'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner