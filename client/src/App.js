
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import { BrowserRouter, Route, Link, Switch, Router } from 'react-router-dom';
import OrdersScreen from './screens/Cartscreen';
import RegisterScreen from './screens/Registerscreen';
import LoginScreen from './screens/Loginscreen';
import history from './history';
import TrackingOrdersScreen from './screens/Trackingordersscreen';
function App() {
    return (
        <div className="App container-fluid">
            
            <Router history={history}>
            <Navbar></Navbar>
            <Switch>
                <Route path="/" exact component={Homescreen}></Route>
                <Route path="/ordersscreen" exact component={OrdersScreen}></Route>
                <Route path="/register" exact component={RegisterScreen}></Route>
                <Route path="/login" exact component={LoginScreen}></Route>
                <Route path="/orderstracker" exact component={TrackingOrdersScreen}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;