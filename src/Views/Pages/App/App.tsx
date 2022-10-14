import "./App.css";
import * as React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Store, { AppKey } from "../../../Global/Store";
import history from "../../Components/BrowserHistory"
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import 'antd/dist/antd.css';
export interface IAppProps {
  example?: string;
}
const Dashboard = React.lazy(() => import("../Dashboard/Dashboard"));
const Orders = React.lazy(() => import("../Orders/Orders"));
const Products = React.lazy(() => import("../Products/Products"));
const Customers = React.lazy(() => import("../Customers/Customers"));
const Invoices = React.lazy(() => import("../Invoices/Invoices"));
const Settings = React.lazy(() => import("../Settings/Settings"));


export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Suspense fallback="Loading">
        <Router history={history}>
          <Switch>
            <Route  exact={true} path="/dashboard" component={Dashboard} />
            <Route  exact={true} path="/orders" component={Orders} />
            <Route  exact={true} path="/products" component={Products} />
            <Route  exact={true} path="/customers" component={Customers} />
            <Route  exact={true} path="/invoices" component={Invoices} />
            <Route  exact={true} path="/settings" component={Settings} />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}
