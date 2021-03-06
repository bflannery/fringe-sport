import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialGridList from '../../components/MaterialGridList'

const useStyles = makeStyles((theme) => ({
  popularRoot: {
    height: '10rem',
    border: '1px solid black'
  }
}))

export default function PopularEquipmentList() {
  const classes = useStyles()
  return (
    <div className={classes.popularRoot}>
      <h6> Popular Equipment</h6>
      <MaterialGridList items={[]} />
    </div>
  )
}
