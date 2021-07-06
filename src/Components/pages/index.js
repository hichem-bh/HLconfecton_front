import Sidebar from "../bars/sidebar";
import '../../App.css'
import Navbar from "../bars/navbar";
import CommandeU from "./commandeUnitaire";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Articles from "./article";
import CommandeP from "./commandePersonnalisee";
import Stock from "./stock";
import Personnel from "./personnel";

const Dashboard = () => {
    return (
        <div className="App">
            <Navbar/>
            <div className="Center">
                <Sidebar/>
                    <Router>
                        <div className={'Container'}>
                        <Route path='/commandeU' component={CommandeU}/>
                        <Route path='/commandeP' component={CommandeP}/>
                        <Route path='/stock' component={Stock}/>
                        <Route path='/personnel' component={Personnel}/>
                        <Route path='/article' component={Articles}/>
                        </div>
                    </Router>
            </div>
        </div>
    )
}
export default Dashboard