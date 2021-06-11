import React from 'react'
import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home'

export default function Router() {
    return (
       <BRouter>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </BRouter>
    )
}
