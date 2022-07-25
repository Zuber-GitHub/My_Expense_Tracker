import { Link } from "react-router-dom";
import './Welcome.css'
const Welcome = (props) => {
    return(
        <>
    <div className="header">
    <div className="welcomeContent" >
        Welcome to Expense Tracker!!!
    </div>
    <div className="profileButton">Your Profile is Incomplete <Link to='/profile'>Complete Now?</Link></div>
    </div>
    </>
    )
}
 
export default Welcome;