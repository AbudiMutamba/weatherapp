import * as React from 'react'
// import {Link} from 'react-router-dom'

import Home from '../views/Home' 

import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'

function App() {
    //const [page, setPage] = React.useState(null)

    return (
        <Router>
        
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                


            </Switch>

        </Router>
    )
}

export default App
