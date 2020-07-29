import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
    // backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}))

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function MaterialGridGallery({ items }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {items.map((item) => (
          <GridListTile key={item.img}>
            <img src={item.img} alt={item.title} />
            <GridListTileBar
              actionIcon={
                <IconButton
                  aria-label={`Show ${item.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

const itemShape = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

MaterialGridGallery.propTypes = {
  items: PropTypes.oneOfType([PropTypes.shape(itemShape)]).isRequired
}
