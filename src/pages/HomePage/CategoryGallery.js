import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialGridGallery from '../../components/MaterialGridGallery'

const useStyles = makeStyles((theme) => ({
  categoryGalleryRoot: {
    height: '10rem',
    border: '1px solid black'
  }
}))

export default function CategoryGallery() {
  const classes = useStyles()
  return (
    <div className={classes.categoryGalleryRoot}>
      <h6> Shop Categories</h6>
      <MaterialGridGallery items={[]} />
    </div>
  )
}
