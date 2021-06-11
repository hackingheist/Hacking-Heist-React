import React from 'react'
import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'

export default function Router() {
    return (
       <BRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/team' exact component={Team} />
            </Switch>
        </BRouter>
    )
}
