import React, { Component} from "react";
import axios from 'axios';
import Layout from '../components/layout';
import Tabel from '../components/tabel';
import router from 'next/router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Logout } from '../redux/actions/authActions';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valActiveDefault: false,
            valActive2: false,
            dataAll: [],
            totalData: 0,
            header:['Nama','Email'],
        };
    }

    componentDidMount(){
        this.setState({valActiveDefault: true})
        this.handleCheckToken(this.props.auth.token)
    }

    handleCheckToken=(token)=>{
        axios({
            method:'get',
            url:process.env.NEXT_PUBLIC_API_URL+"backoffice/status",
            crossdomain: true,
            params:{
                token:token
            }
        })
        .then(res=>{
            if (res.data.statusCode == '555' || res.data.statusCode == '666' || res.data.statusCode == '777' || res.data.statusCode == '888')
            {
                this.props.Logout();
            }
            else {
                console.log(res.data.message)
            }
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    tabKlik(e){
        var id = e.currentTarget.id;
        var el = document.getElementById(id);
        if (el.classList.contains('active'))
        {
            console.log('cek');
        } else {
            
            this.setState({valActiveDefault: false,valActive2: true})
        }
    }

    tabKlikDefault(e){
        var id = e.currentTarget.id;
        var el = document.getElementById(id);
        if (el.classList.contains('active'))
        {
            console.log('cek');
        } else {
            this.setState({valActiveDefault: true,valActive2: false})
        }
    }

    render() {
        if (this.props.auth.status == 'NOT LOGIN')
        {
            router.push('/')
        }
        else
        {
            return (
                <Layout>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">Notification</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActiveDefault != false ? "panel panel-primary active" : "panel panel-primary"} id="button1" onClick={this.tabKlikDefault.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Billing</div>
                                    </div>
                                </button>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActive2 != false ? "panel panel-primary active" : "panel panel-primary"} id="button2" onClick={this.tabKlik.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Data</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <Tabel tombol="no" nama="Notifications" header={this.state.header} data={this.state.dataAll} total={this.state.totalData}></Tabel>
                    </div>
                </Layout>
            )
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Notification)