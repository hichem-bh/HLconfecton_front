import AssignmentIcon from '@material-ui/icons/Assignment';
import './sidebar.css'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Sidebar = ()=>{
    return (
            <div className="Sidebar">
                <ul className="SidebarList">
                    <li className="row" onClick={()=>{
                        window.location.pathname = '/commandeU'
                    }}>
                        <div id="icon"><AddCircleOutlineIcon/></div>
                        <div id="title">Commande unitaire</div>
                    </li>
                    <li className="row" onClick={()=>{
                        window.location.pathname = '/commandeP'
                    }}>
                        <div id="icon"><AddCircleIcon/></div>
                        <div id="title">Commande personnalisée</div>
                    </li>
                    <li className="row" onClick={()=>{
                        window.location.pathname = '/stock'
                    }}>
                        <div id="icon"><ShowChartIcon/></div>
                        <div id="title">Stock</div>
                    </li>
                    <li className="row" onClick={()=>{
                        window.location.pathname = '/article'
                    }}>
                        <div id="icon"><AssignmentIcon/></div>
                        <div id="title">Articles</div>
                    </li>
                    <li className="row" onClick={()=>{
                        window.location.pathname = '/personnel'
                    }}>
                        <div id="icon"><AssignmentIndIcon/></div>
                        <div id="title">Personnel</div>
                    </li>
                </ul>
            </div>

    )
}
export default Sidebar