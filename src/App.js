import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import asyncComponent from "./utils/asyncComponent.jsx";
import * as serviceWorker from "./serviceWorker";
//import axios from "./services";
import configureStore, { history } from "./store";
export const store = configureStore();
import "./assets/css/animation/animate.css";
import "./assets/css/bootstrap/bootstrap.css";
import "./assets/css/owl-carousel/owl.carousel.css";
import "./assets/css/owl-carousel/owl.theme.css";
import "./assets/css/owl-carousel/owl.transitions.css";
import "./assets/css/animation/animate.css";
import "./assets/css/animation.css";
import "./assets/css/fix-scroll.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./assets/css/map.css";
import Header from "./components/Header/index.js";
import Blog from "./components/Blog/index.js";
import Footer from "./components/Footer/index.jsx";
import ContactUs from "./components/ContactUs/index.jsx";
import Portfolio from "./components/Portfolio/index.jsx";

const demoHTML = () => <div>HELLO</div>;
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
          <Header/>
            <Switch>
              {/* <Home></Home> */}
              <Route path="/" component={Blog} exact/>
              <Route path="/blog" component={Blog} exact/>
              <Route path="/contactUs" component={ContactUs} />
              <Route path="/portfolio" component={Portfolio}/>
            </Switch>
            <Footer/>
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
export default App;
