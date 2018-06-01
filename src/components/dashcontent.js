import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Button, Image } from 'semantic-ui-react'



import Transacion from './transactions'
import QuickOverview from './dashboard/quickOverview'
import DashNavigation from './dashboard/dashNavi'
import Loader from '../reusable/Loader'



const Dashcontent = (props) => {

    return props.loading ?  (
        <div className="dashcontent">
            <DashNavigation/>           
            <Loader />
        </div>
    ) : (
        <div className="dashcontent">
            <DashNavigation/>           
            { props.children }
        </div>
    ) 
 
};

export default Dashcontent;




// const Boxone = (props) => {
//     return (
//         <div className="bannerBox1">
//             <Image src={props.src} height="60" width="60" className="iconsboxes" />
//             <div className="textboxes">
//                 <div className="saldo">
//                    <span style={{fontSize: 25, fontWeight: 500}}> {props.titre} </span> <br/>
//                    <span style={{fontSize: 12, fontWeight: 100}}>{props.textSecondaire}</span>
//                 </div>
//                 <div className="amount">
//                     <span> {props.montant}</span>
//                     <span style={{marginLeft: 11}}>{props.monaie}</span>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const Quicktask = (props) => {
//     return (
//         <div className="bannerbox2">
//             <div className="titreicons">
//                 {props.titre}
//             </div>
//             <Button>{props.taskbutton}</Button>
//         </div>
//     );
// }
