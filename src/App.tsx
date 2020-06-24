import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header/index';
import Jogs, { routeName as jogsRouteName } from './pages/Jogs';
import Info, { routeName as infoRouteName } from './pages/Info';
import NotFound from './pages/NotFound';
import GlobalStyle, { theme } from './theme/globalStyle';
import { AuthContextWrapper } from './contexts/Auth';
import { FilterContextWrapper } from './contexts/Filter';

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Router>
        <Header></Header>
        <Switch>
          <Route component={Jogs} exact path={jogsRouteName}></Route>
          <Route component={Info} exact path={infoRouteName}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
      <GlobalStyle></GlobalStyle>
    </AppWrapper>
  );
};

export const AppWrapper: React.FC = ({ children }) => (
  <AuthContextWrapper>
    <FilterContextWrapper>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FilterContextWrapper>
  </AuthContextWrapper>
);

export default App;
