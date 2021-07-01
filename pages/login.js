import React, { Component } from "react";
import axios from 'axios';
import router from 'next/router'
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoggedIn } from '../redux/actions/authActions';
import Layout from '../components/layout_login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valEmail: '',
            valPass: '',
            valDefaultUrl: '',
        }
    }

    componentDidMount(){
        if (this.props.auth.status == 'SUCCESS') {
            Swal.fire({
                icon: 'info',
                title: 'Login',
                text: 'Anda sudah login',
                showConfirmButton: false,
                timer: 1200
            })
        }
    }

    handleLogin = async () => {
        try {
            if (this.state.valEmail != '' && this.state.valPass != '') {
                let params = {
                    emailUser: this.state.valEmail,
                    passwordUser: this.state.valPass
                }
                let res = await axios.post(process.env.NEXT_PUBLIC_API_URL + 'login',params,{
                    crossdomain: true
                })
                if (res.data.statusCode == '000') {
                    this.insertLoginData(res.data.data_user);
                    this.setState({valDefaultUrl:res.data.data_user.defaultUrl})
                    router.push(this.state.valDefaultUrl)
                    Swal.fire({
                        icon: 'success',
                        title: 'Login',
                        text: 'Berhasil',
                        showConfirmButton: false,
                        timer: 1200
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login',
                        text: res.data.message,
                    })
                }

            } else if ((this.state.valEmail == '' && this.state.valPass != '') || (this.state.valEmail == '' && this.state.valPass == '')) {
                Swal.fire({
                    icon: 'error',
                    title: 'Login',
                    text: 'Email Harus Diisi!!!',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login',
                    text: 'Password Harus Diisi!!!',
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    insertLoginData = (responseJson) => {
        let authData = {
            id:responseJson.id,
            nama: responseJson.nama,
            email: responseJson.email,
            token: responseJson.token,
            role: responseJson.role,
            menu: responseJson.menu,
            defaultUrl: responseJson.defaultUrl,
        };
        this.props.setLoggedIn(authData);
    }

    showPassword = (e) => {
        e.preventDefault();
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    pressEnter = (el) =>{
        if (el.keyCode === 13) {
            document.getElementById("loginSubmit").click();
        }
    }

    render() {
        if (this.props.auth.status == 'SUCCESS') {
            router.push(this.props.auth.defaultUrl)
        }
        return (
            <Layout>
                <div className="main">
                    <p className="sign" align="center">Welcome</p>
                    <form className="form1" role="form">
                        {/*<fieldset>*/}
                            <div className="form-group">
                                <input className="un" autoComplete="off" placeholder="E-mail" name="email" type="email" id="email" onChange={event => this.setState({ valEmail: event.target.value })} onKeyUp={this.pressEnter} autoFocus />
                            </div>
                            <div className="form-group">
                                <input className="pass" placeholder="Password" name="password" type="password" id="password" onChange={event => this.setState({ valPass: event.target.value })} onKeyUp={this.pressEnter} /><a onClick={this.showPassword}><i className="fa fa-eye fa-fw" style={{ color: "#20b2aa", paddingRight: "20px", marginLeft: "-25px", marginTop: "-25px", zIndex: "2", position: "relative" }}></i></a>
                            </div>
                            <a className="submit" id="loginSubmit" onClick={this.handleLogin} >Login</a>
                        {/*</fieldset>*/}
                    </form>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    const { auth } = state
    return { auth }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setLoggedIn,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Login)