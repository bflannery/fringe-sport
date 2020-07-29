import React from 'react'
import PropTypes from 'prop-types'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  homepageBanner: {
    height: '20rem',
    border: '1px solid black'
  }
}))

export default function ReactCarousel({ images }) {
  const classes = useStyles()
  return (
    <div className={classes.homepageBanner}>
      <h6> Image Carousel </h6>
      <Carousel>
        {images.map((i) => (
          <div>
            <img src={i.source} alt={i.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

const imageShape = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

ReactCarousel.propTypes = {
  images: PropTypes.oneOfType([PropTypes.shape(imageShape)]).isRequired
}
