import { Route, Switch } from "react-router-dom"
import Home from "../pages/Home"

export const Router = ()=> {

    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}