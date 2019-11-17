import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Paginas Principais
import Home from '/home/brendaum/Área de Trabalho/siteartisan/src/pages/Home.jsx'

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
)