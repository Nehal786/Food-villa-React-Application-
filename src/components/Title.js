import { Link } from "react-router-dom";


export const Title = () => (
    <a href="/">
    <img 
    className="logo"
    alt="Logo"
    src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj">
    </img>
    </a>
);

const Header= () => {
    return(
        <div className="header"> 
        <Title/>
        <div className="nav-itmes">
            <ul className="list-items">
                <li>
                    <Link to = "/">Home</Link>
                </li>
               <li>
                <Link to = "about">About Us</Link>
               </li>
                <li>
                    <Link to = " contact">Conatct Us</Link>
                </li>
                <li>
                    <Link to="Register"> Register</Link>
                </li>
                <li>Cart</li>
            </ul>

        </div>
        
        </div>
       
    );
};


export default Header