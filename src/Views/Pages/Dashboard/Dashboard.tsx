import { Component, createRef } from "react";
import DashboardHTML from "./DashboardHtml";
import Store, { AppKey } from '../../../Global/Store';
interface Props {
}
export interface PageState {
  user: string
}

export default class Login extends Component<Props, PageState> {
  store = new Store();
  constructor(props: Props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  render() {
    return DashboardHTML(this);
  }
  // componentWillUnmount(){
  //   // this.abortController.abort();
  // }
}
