import "./App.css";
import * as React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Store, { AppKey } from "../../../Global/Store";
import history from "../../Components/BrowserHistory"
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'antd/dist/antd.css';
export interface IAppProps {
  example?: string;
}
const Dashboard = React.lazy(() => import("../Dashboard/Dashboard"));


export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Suspense fallback="Loading">
        <Router history={history}>
          <Switch>
            <Route  exact={true} path="/view-subscription" component={Dashboard} />
            
          </Switch>
        </Router>
      </Suspense>
    );
  }
}
