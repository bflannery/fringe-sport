import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import ReactCarousel from '../components/Carousel'
import PopularEquipmentList from '../components/PopularEquipmentList'

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
        <Container className={classes.homepageBanner}>Home Page</Container>
      </Grid>
    </Grid>
  )
}
