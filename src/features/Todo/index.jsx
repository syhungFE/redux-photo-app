import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import  MainPage from './page/Main'
function ToDo(props){
    const match = useRouteMatch();
    return(
        <Switch>
            <Route exact path={match.url} component={MainPage}/>
        </Switch>
    )
}

export default ToDo