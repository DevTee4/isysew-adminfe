import { Component, createRef } from "react";
import InvoicesHTML from "./InvoicesHtml";
import Store, { AppKey } from '../../../Global/Store';
import history from "../../Components/BrowserHistory";
interface Props {
}
export interface PageState {
  user: string
  openDrawer: boolean
}

export default class Invoices extends Component<Props, PageState> {
  store = new Store();
  displayMenu = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: '/images/dashboard.png',
    },
    {
      name: 'Orders',
      url: '/orders',
      icon: '/images/orders.png',
    },
    {
      name: 'Products',
      url: '/products',
      icon: '/images/products.png',
    },
    {
      name: 'Customers',
      url: '/customers',
      icon: '/images/customers.png',
    },
    {
      name: 'Invoices',
      url: '/invoices',
      icon: '/images/invoices.png',
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: '/images/settings.png',
    }
  ]
  constructor(props: Props) {
    super(props);
    this.state = {
      user: "",
      openDrawer: false
    };
  }
  handleDrawer() {
    this.setState({ openDrawer: !this.state.openDrawer })
  }
  navigate(route: string) {
    history.push(`${route}`);
  }
  render() {
    return InvoicesHTML(this);
  }
}
