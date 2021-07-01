import React, { Component } from "react";
import axios from 'axios';
import router from 'next/router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Logout } from '../redux/actions/authActions';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    handleLogout=async(e)=>{
        e.preventDefault();
        try {
            let params = {
                emailUser:this.props.auth.email
            }
            let res = await axios.post(process.env.NEXT_PUBLIC_API_URL+'logout',params,{
                crossdomain: true
            })
            if (res.data.statusCode == '000')
            {
                this.props.Logout();
                router.push('/')
            }
            else {
                alert(res.data.message)
            }
        } catch(error) {
            console.log(error);
        }
    }

    showToggle=(e)=>{
        e.preventDefault();
        document.getElementById("logout_toggle").classList.toggle("show");
    }

    render() {
        return (
            <ul className="nav navbar-right navbar-top-links">
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.showToggle}>
                        <img src="../images/hijab.png"/> {this.props.auth.nama} <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu dropdown-user" id="logout_toggle">
                        <li><a href="#" onClick={this.handleLogout}><i className="fa fa-sign-out fa-fw"></i> Logout</a></li>
                    </ul>
                </li>
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)