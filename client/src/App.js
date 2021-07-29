
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
function App() {
    return (
        <div className="App container-fluid">
            <Navbar></Navbar>
            <Homescreen></Homescreen>
        </div>
    )
}

export default App;