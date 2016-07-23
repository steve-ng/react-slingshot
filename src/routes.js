import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';


import ParentLandingPage from './components/ParentLandingPage.js';


/**

/parent = parent home page
/parent/dashboard = parent dashboard
/search = after parent search for the page
/sitter/:id = sitter public profile page


/sitter = sitter home page
/sitter/dashboard = after logging in what they see
/sitter/profile = sitter view own profile page

**/

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="parent" component={ParentLandingPage} />
    <Route path="parent/dashboard" component={FuelSavingsPage} />
    <Route path="search" component={FuelSavingsPage} />
    <Route path="sitter/:sitterId" component={FuelSavingsPage}/>
    <Route path="sitter" component={FuelSavingsPage}/>
    <Route path="sitter/dashboard" component={AboutPage}/>
    <Route path="sitter/profile" component={FuelSavingsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
