import React, { Component } from "react";
// import axios from 'axios';
// import router from 'next/router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Logout } from '../redux/actions/authActions';
import Link from 'next/link';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataMenu:[]
        }
    }

    componentDidMount(){
        this.sortArray()
    }

    sortArray = () => {
        this.props.auth.menu.sort(function(a,b){
            return a.noMenu - b.noMenu;
        })
        this.setState({dataMenu:this.props.auth.menu})
    }

    render() {
        let menu;
        menu = this.state.dataMenu.map((value,index) => {
            if (value.namaMenu == 'Manage Users') {
                return (
                    
                        <li key={index}>
                            <Link href={value.urlMenu}><a><i className={this.props.auth.role == 'Administrator' ? value.iconMenu : 'fa fa-lock fa-fw'}></i> {this.props.auth.role == 'Administrator' ? value.namaMenu : 'Change Password'}</a></Link>
                        </li>
                );
            } else {
                return (
                    
                    <li key={index}>
                        <Link href={value.urlMenu}><a><i className={value.iconMenu}></i> {value.namaMenu}</a></Link>
                    </li>
            );
            }
        })
        return (
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
                    {menu}
                </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { auth } = state
    return { auth }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        Logout,
    },dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)