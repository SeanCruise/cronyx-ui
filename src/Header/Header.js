import React, { Component } from 'react';
import logo from '../../assets/assets_triggerList_2017-05-16/group.png';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img className="Logo" src={logo} />
                <div className="Line"/>
            </div>
        );
    }
}

export default Header;
