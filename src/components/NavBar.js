import { Link } from 'react-router-dom';
const NavBar = () =>{
    return (
        <center>
        <div id='nav'> 
            
            <button className='button is-primary'><Link to="/home">Home</Link></button>  
            <button className='button is-primary'><Link to="/FormAction">FormAction</Link></button> 
        </div>
            </center> 
    )
}

export default NavBar;