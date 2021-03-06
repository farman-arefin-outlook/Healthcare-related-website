import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Appoinment from './components/Appointment/Appoinment';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AuthProvider from './contexts/AuthProvider';
import Footer from './components/Footer/Footer';
import Reset from './components/Reset/Reset';
import Details from './components/Details/Details';
import PrivateRoute from './Route/PrivateRoute';
import Admit from './components/Admit/Admit';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/admit">
              <Admit></Admit>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='/reset'>
              <Reset></Reset>
            </Route>
            <Route exact path='/appoint'>
              <Appoinment></Appoinment>
            </Route>
            <Route path="/appoint/:key">
              <Details></Details>
            </Route>
            <Route path='*'>
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
