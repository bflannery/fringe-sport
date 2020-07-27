import React from 'react'
import AppToolbar from './components/Toolbar'

export default (ComposedComponent) => () => (
  <>
    <AppToolbar />
    <ComposedComponent />
  </>
)
