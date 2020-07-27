import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'

export default function NavToolbar() {
  return (
    <Toolbar>
      <Button>
        <NavLink to="/weightlifting">Weightlifting</NavLink>
      </Button>
      <Button>
        <NavLink to="/bodyweight">Bodyweight </NavLink>
      </Button>
      <Button>
        <NavLink to="/conditioning">Conditioning</NavLink>
      </Button>
      <Button>
        <NavLink to="/more-equipment">More Equipment</NavLink>
      </Button>
      <Button>
        <NavLink to="/packages">Packages </NavLink>
      </Button>
      <Button>
        <NavLink to="/apparel"> Apparel </NavLink>
      </Button>
    </Toolbar>
  )
}
