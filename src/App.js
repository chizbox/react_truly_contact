import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import routes from './routes';
import { GlobalProvider } from './context/provider'
import isAuthenticated from './utils/isAuthenticated';


const RenderRoute = (route) => {
  console.log('APP.js This is the route.path: ', route.path)
  console.log('APP.js This is the routes: ', routes)

  const history = useHistory();
  document.title = route.title || 'TrulyContacts';
  if (route.needsAuth && !isAuthenticated()) {
    history.push('/auth/login');
  }

  return (<Route
    path={route.path}
    exact
    render={(props) => <route.component {...props} />}
  ></Route>)
};

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RenderRoute {...route} key={index} />))
          }
        </Switch>
      </Router>
    </GlobalProvider>
  );
}
export default App;
