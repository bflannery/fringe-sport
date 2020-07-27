import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MainToolbar from './MainToolbar'

const useStyles = makeStyles((theme) => ({
  toolbarRoot: {
    flexGrow: 1
  }
}))

export default function AppToolbar() {
  const classes = useStyles()
  return (
    <div className={classes.toolbarRoot}>
      <MainToolbar />
    </div>
  )
}
