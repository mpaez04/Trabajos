import React,{Component} from "react";
import './Header.css';
import logo from '../logo.jpg'


class Header extends Component{
    render(){
        return(
            <div className="Header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Ejemplo #1
                </p>

            </div>
        );
    }
}
export default Header;