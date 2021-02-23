import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import links from './data/links';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const routeMaps = links.map((item, index) => (
    <Route key={index} exact={item.isExact} path={item.link} component={item.component} />
  ))

  return (
    <BrowserRouter>
        <Navbar links={links} />
        <div className="container-fluid">
          <nav style={{ width:'100%', padding:'2rem 0',backgroundColor:'gray'}}>
            <button onClick={() =>handleClick ('en')}>
            EN
            </button>
            <button onClick={() =>handleClick ('tr')}>
            TR
            </button>
          </nav>
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
