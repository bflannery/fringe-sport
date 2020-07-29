import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import ReactCarousel from '../../components/Carousel'
import PopularEquipmentList from './PopularEquipmentList'
import CategoryGallery from './CategoryGallery'

const useStyles = makeStyles((theme) => ({
  homepageRoot: {
    flexGrow: 1,
    border: '1px solid black'
  },
  homepageBanner: {
    height: '20rem',
    border: '1px solid black'
  }
}))

export default function HomePage() {
  const classes = useStyles()
  return (
    <Grid container className={classes.homepageRoot}>
      <Grid item xs={12}>
        <ReactCarousel images={[]} />
        <PopularEquipmentList />
        {/* <NewEquipmentList /> */}
        <CategoryGallery />
      </Grid>
    </Grid>
  )
}
