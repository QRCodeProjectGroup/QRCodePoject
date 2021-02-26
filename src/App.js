import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import links from './data/links';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {

  const routeMaps = links.map((item, index) => (
    <Route key={index} exact={item.isExact} path={item.link} component={item.component} />
  ))

  return (
    <BrowserRouter>
      <Navbar links={links} />
      <div className="container-fluid">
        <div className="row">
          <Switch>
            {routeMaps}
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
