import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import AppWrapper from '../App'
import HomePage from '../pages/HomePage'
import WeightLifting from '../pages/WeightLifting'
import Bodyweight from '../pages/Bodyweight'
import Conditioning from '../pages/Conditioning'
import MoreEquipment from '../pages/MoreEquipment'
import Packages from '../pages/Packages'
import Apparel from '../pages/Apparel'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AppWrapper(HomePage)} />
        <Route path="/weightlifting" component={AppWrapper(WeightLifting)} />
        <Route path="/bodyweight" component={AppWrapper(Bodyweight)} />
        <Route path="/conditioning" component={AppWrapper(Conditioning)} />
        <Route path="/more-equipment" component={AppWrapper(MoreEquipment)} />
        <Route path="/packages" component={AppWrapper(Packages)} />
        <Route path="/apparel" component={AppWrapper(Apparel)} />
      </Switch>
    </Router>
  )
}
