import { Link, useHistory } from "react-router-dom";
import './Welcome.css'
import Expenses from "./Expenses";
const Welcome = (props) => {
    const history  = useHistory();
    function logoutHandler(){
        localStorage.clear();
        history.replace('/Login')

    };
    return(
        <>
    <div className="header">
    
    <Link className="profileButton" to='/profile'>PROFILE</Link>
    </div>
    <button className="logoutbtn" onClick={logoutHandler}>Log Out</button>
    <Expenses></Expenses>

    </>
    )
}
 
export default Welcome;