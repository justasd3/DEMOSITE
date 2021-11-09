import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Services from './component/Services';
import './styles/style.scss';

const App = ({ history }) => {
  return (
    <>
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route path="/Home">
            <Main />
          </Route>
          <Route path="/Services">
            <Services />
          </Route>
        </Switch>
        <Footer />
      </ConnectedRouter>
    </>
  );
};

export default App;
