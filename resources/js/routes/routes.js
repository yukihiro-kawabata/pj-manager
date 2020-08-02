import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "../components/header/Header";
import TopComponent from '../components/top/Top'

function Routes() {
    return (
        <Router>
            <Header />
            <Route path="/view/top" component={TopComponent} />
        </Router>
    );
}

export default Routes;
