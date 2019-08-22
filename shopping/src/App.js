import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history"
import Login from './components/loginProcess/Login'
import Register from './components/loginProcess/Register'
import Logout from './components/loginProcess/Logout'

const history = createBrowserHistory();
class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/logout" component={Logout} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;