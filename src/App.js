import React from 'react';
import MapPage from './page/mapPage';
import {Switch, Route} from "react-router-dom";
import Counter from './page/Counter'
import CssTrick from './page/cssTrick/cssTrick'


function App () {
    return (
        <Switch>
            <Route exact path="/" component={MapPage}></Route>
            <Route path="/counter" component={Counter}></Route>
            <Route path="/cssTrick" component={CssTrick}></Route>
        </Switch>
    );
}

export default App;
