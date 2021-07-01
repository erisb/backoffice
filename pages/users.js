import React, { Component} from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import Layout from '../components/layout';
import Tabel from '../components/tabel';
import router from 'next/router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Logout } from '../redux/actions/authActions';

let valAct;
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu:'',
            valButton: '',
            headerModalAdd:'',
            headerModalEdit:'',
            valActiveDefault: false,
            dataAll: [],
            dataTemp: [],
            dataMenus: [],
            dataRoles: [],
            totalData: 0,
            totalDataTemp: 0,
            header:[],
            page:5,
            nextPage:1,
            urlAdd:'',
            urlEdit:'',
            urlDelete:'',
            urlSearch:'',
            urlPage:'',
            valActive2: false,
        };
    }

    componentDidMount(){
        valAct = 'users';
        this.setState({
            menu:"users",
            header:['Nama','Email'],
            valActiveDefault: true,
            valButton: 'Add User',
            headerModalAdd: 'Add User',
            headerModalEdit:'Edit User',
            urlAdd:process.env.NEXT_PUBLIC_API_URL+"register",
            urlEdit:process.env.NEXT_PUBLIC_API_URL+"user",
            urlDelete:process.env.NEXT_PUBLIC_API_URL+"user",
            urlSearch:process.env.NEXT_PUBLIC_API_URL+"users/by",
            urlPage:process.env.NEXT_PUBLIC_API_URL+"users/next/"+this.state.page+"/page",
        })
        this.listDatas(1);
        this.listRoles()
        this.listMenus()
    }

    handleAddData=async(page,data1,data2,data3,data4)=>{
        try {
            let params;
            if (valAct == 'users') {
                params={
                    namaUser:data1,
                    emailUser:data2,
                    passwordUser:data3,
                    roleUser:data4,
                    token:this.props.auth.token
                }
            } else {
                params={
                    namaRole:data1,
                    listMenu:data2,
                    token:this.props.auth.token
                }
            }
            let res = await axios.post(this.state.urlAdd,params,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer '+this.props.auth.token
                },
                crossdomain: true
            })

            if (res.data.statusCode == '555' || res.data.statusCode == '666' || res.data.statusCode == '777' || res.data.statusCode == '888' || res.data.statusCode == '401' || res.data.statusCode == '601')
            {
                this.props.Logout();
            }
            if (res.data.statusCode == '000')
            {
                this.listDatas(page)
                Swal.fire({
                    icon: 'success',
                    title: 'User',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'User',
                    text: res.data.message,
                })
            }
            
        } catch(error) {
            console.log(error);
        }
    }

    handleEditData=async(page,id,data1,data2,data3,data4)=>{
        try {
            let params;
            if (valAct == 'users') {
                params={
                    namaUser:data1,
                    emailUser:data2,
                    passwordUser:data3,
                    roleUser:data4,
                    token:this.props.auth.token
                }
            } else {
                params={
                    namaRole:data1,
                    listMenu:data2,
                    token:this.props.auth.token
                }
            }
            let res = await axios.put(this.state.urlEdit+'/'+id,params,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer '+this.props.auth.token
                },
                crossdomain: true
            })
            
            if (res.data.statusCode == '555' || res.data.statusCode == '666' || res.data.statusCode == '777' || res.data.statusCode == '888' || res.data.statusCode == '401' || res.data.statusCode == '601')
            {
                this.props.Logout();
            }
            if (res.data.statusCode == '000')
            {
                this.listDatas(page)
                Swal.fire({
                    icon: 'success',
                    title: 'User',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'User',
                    text: res.data.message,
                })
            }
            
        } catch(error) {
            console.log(error);
        }
    }

    handleDeleteData=async(page,id)=>{
        try {
            let res = await axios.delete(this.state.urlDelete+'/'+id,{
                headers: {
                    'Authorization' : 'Bearer '+this.props.auth.token
                },
                crossdomain: true
            })

            if (res.data.statusCode == '555' || res.data.statusCode == '666' || res.data.statusCode == '777' || res.data.statusCode == '888' || res.data.statusCode == '401' || res.data.statusCode == '601')
            {
                this.props.Logout();
            }
            if (res.data.statusCode == '000')
            {
                this.listDatas(page)
                Swal.fire({
                    icon: 'success',
                    title: 'User',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'User',
                    text: res.data.message,
                })
            }
            
        } catch(error) {
            console.log(error);
        }
    }

    handleChangePassword=async()=>{
        try {
            let passBaru = document.getElementById('password').value;
            let passConf = document.getElementById('password_confirmation').value;

            if (passBaru == passConf) {
                let params = {
                    passwordUser:passBaru
                }
                let res = await axios.put(process.env.NEXT_PUBLIC_API_URL + "pass/"+this.props.auth.id,params,{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : 'Bearer '+this.props.auth.token
                    },
                    crossdomain: true
                })

                if (res.data.statusCode == '555' || res.data.statusCode == '666' || res.data.statusCode == '777' || res.data.statusCode == '888' || res.data.statusCode == '401' || res.data.statusCode == '601')
                {
                    this.props.Logout();
                }
                if (res.data.statusCode == '000')
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'User',
                        text: 'Berhasil',
                        showConfirmButton: false,
                        timer: 1200
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'User',
                        text: res.data.message,
                    })
                }                
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'User',
                    text: 'Password Tidak Sama',
                })
            }
        } catch(error) {
            console.log(error);
        }
    }

    handleSearchData=async(e)=>{
        try {
            let params = {
                search:e
            }
            let res = await axios.post(this.state.urlSearch,params,{
                crossdomain: true
            })
            if (res.data.statusCode == '000')
            {
                if (res.data.data.length != 0)
                {
                    this.setState({dataAll:[],totalData:res.data.data.length})
                    for (let i=0;i<res.data.data.length;i++)
                    {
                        if (valAct == 'users') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id:res.data.data[i]._id,
                                    nama:res.data.data[i].namaUser,
                                    email:res.data.data[i].emailUser,
                                    role:res.data.data[i].roleUser
                                })
                                return dataAll;
                            })
                        } else {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id:res.data.data[i]._id,
                                    namaRole:res.data.data[i].namaRole,
                                    listMenu:res.data.data[i].listMenu
                                })
                                return dataAll;
                            })
                        }

                    }
                }
                else {
                    this.setState({dataAll:this.state.dataTemp,totalData:this.state.totalDataTemp})
                }
            }
            else {
                alert(res.data.message)
            }
            
        } catch(error) {
            console.log(error);
        }
    }

    handlePageData=async(e)=>{
        try {
            let res = await axios.get(this.state.urlPage+'/'+e,{
                crossdomain: true,
            })
            if (res.data.statusCode == '000')
            {
                this.setState({dataAll:[],nextPage:e})
                for (let i=0;i<res.data.data.length;i++)
                {
                    if (valAct == 'users') {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id:res.data.data[i]._id,
                                nama:res.data.data[i].namaUser,
                                email:res.data.data[i].emailUser,
                                role:res.data.data[i].roleUser
                            })
                            return dataAll;
                        })
                    } else {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id:res.data.data[i]._id,
                                namaRole:res.data.data[i].namaRole,
                                listMenu:res.data.data[i].listMenu
                            })
                            return dataAll;
                        })
                    }
                }
            }
            else {
                alert(res.data.message)
            }
            
        } catch(error) {
            console.log(error);
        }
    }
    
    listDatas=async(page)=>{
        try {
            let urlDatas;
            if (valAct == 'users')
            {
                urlDatas = page == 1 ? process.env.NEXT_PUBLIC_API_URL+'users/first/'+this.state.page : process.env.NEXT_PUBLIC_API_URL+'users/next/'+this.state.page+"/page/"+page
            } else {
                urlDatas = page == 1 ? process.env.NEXT_PUBLIC_API_URL+'roles/first/'+this.state.page : process.env.NEXT_PUBLIC_API_URL+'roles/next/'+this.state.page+"/page/"+page
            }
            let res = await axios.get(urlDatas,{
                crossdomain: true,
            })
            
            if (res.data.statusCode == '000')
            {
                this.setState({dataAll:[],dataTemp:[],totalData:0,totalDataTemp:0})
                if (res.data.data.length != 0) {
                    for (let i=0;i<res.data.data.length;i++)
                    {
                        if (valAct == 'users') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id:res.data.data[i]._id,
                                    nama:res.data.data[i].namaUser,
                                    email:res.data.data[i].emailUser,
                                    role:res.data.data[i].roleUser
                                })
                                return dataAll;
                            })
                            this.setState(state => {
                                const dataTemp = state.dataTemp.push({
                                    id:res.data.data[i]._id,
                                    nama:res.data.data[i].namaUser,
                                    email:res.data.data[i].emailUser,
                                    role:res.data.data[i].roleUser
                                })
                                return dataTemp;
                            })
                        } else {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id:res.data.data[i]._id,
                                    namaRole:res.data.data[i].namaRole,
                                    listMenu:res.data.data[i].listMenu
                                })
                                return dataAll;
                            })
                            this.setState(state => {
                                const dataTemp = state.dataTemp.push({
                                    id:res.data.data[i]._id,
                                    namaRole:res.data.data[i].namaRole,
                                    listMenu:res.data.data[i].listMenu
                                })
                                return dataTemp;
                            })
                        }
                    }
                    this.setState({totalData:res.data.total,totalDataTemp:res.data.total,nextPage:page})
                } else {
                    this.setState({ totalData: [], totalDataTemp: [], nextPage: page })
                }
            }
            else {
                alert(res.data.message)
            }
            
        } catch(error) {
            console.log(error);
        }
    }

    listRoles = async() => {
        try {
            let res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "roles",{
                crossdomain: true,
            })
            if (res.data.statusCode == '000') {
                for (let i = 0; i < res.data.data.length; i++) {

                    this.setState(state => {
                        const dataRoles = state.dataRoles.push({
                            id: res.data.data[i]._id,
                            namaRole: res.data.data[i].namaRole,
                        })
                        return dataRoles;
                    })
                }
            }
            else {
                alert(res.data.message)
            }
                
        } catch(error) {
            console.log(error);
        }
    }

    listMenus = async() => {
        try {
            let res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "menus",{
                crossdomain: true,
            })
            if (res.data.statusCode == '000') {
                for (let i = 0; i < res.data.data.length; i++) {

                    this.setState(state => {
                        const dataMenus = state.dataMenus.push({
                            noMenu: res.data.data[i].noMenu,
                            namaMenu: res.data.data[i].namaMenu,
                            urlMenu: res.data.data[i].urlMenu,
                            iconMenu: res.data.data[i].iconMenu,
                        })
                        return dataMenus;
                    })
                }
            }
            else {
                alert(res.data.message)
            }
            
        } catch(error) {
            console.log(error);
        }
    }

    tabKlik(e) {
        let id = e.currentTarget.id;
        let el = document.getElementById(id);
        if (el.classList.contains('active')) {
            console.log('cek');
        } else {
            if (id == 'button2') {
                valAct = 'role'
                this.setState({
                    menu: "role",
                    header: ['Nama Role'],
                    valActiveDefault: false,
                    headerModalAdd: 'Add Role',
                    headerModalEdit: 'Edit Role',
                    dataAll: [],
                    dataTemp: [],
                    totalData: 0,
                    totalDataTemp: 0,
                    urlAdd: process.env.NEXT_PUBLIC_API_URL + "role",
                    urlEdit: process.env.NEXT_PUBLIC_API_URL + "role",
                    urlDelete: process.env.NEXT_PUBLIC_API_URL + "role",
                    urlSearch: process.env.NEXT_PUBLIC_API_URL + "roles/by",
                    urlPage: process.env.NEXT_PUBLIC_API_URL + "roles/next/" + this.state.page + "/page",
                    valActive2: true,
                    valButton: 'Add Role'
                })
            }
            this.listDatas(1)
        }
    }

    tabKlikDefault(e) {
        let id = e.currentTarget.id;
        let el = document.getElementById(id);
        if (el.classList.contains('active')) {
            console.log('cek');
        } else {
            valAct = 'users';
            this.setState({
                menu: "users",
                header:['Nama','Email'],
                valActiveDefault: true,
                valButton: 'Add User',
                headerModalAdd: 'Add User',
                headerModalEdit:'Edit User',
                urlAdd:process.env.NEXT_PUBLIC_API_URL+"register",
                urlEdit:process.env.NEXT_PUBLIC_API_URL+"user",
                urlDelete:process.env.NEXT_PUBLIC_API_URL+"user",
                urlSearch:process.env.NEXT_PUBLIC_API_URL+"users/by",
                urlPage:process.env.NEXT_PUBLIC_API_URL+"users/next/"+this.state.page+"/page",
                valActive2: false,
                valButton: 'Add User'
            })
            this.listDatas(1)
        }
    }

    showPassword = (e) => {
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    };

    showPasswordConfirmation = (e) => {
        let x = document.getElementById("password_confirmation");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    };

    render() {
        if(this.props.auth.status == 'NOT LOGIN')
        {
            router.push('/')
            Swal.fire({
                icon: 'info',
                title: 'Login',
                text: 'Anda belum login',
                showConfirmButton: false,
                timer: 1200
            })
        }
        else
        {
            if (this.props.auth.role == 'Administrator') {
                return (
                    <Layout>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 className="page-header">Users</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <button className={this.state.valActiveDefault != false ? "panel panel-primary active" : "panel panel-primary"} id="button1" onClick={this.tabKlikDefault.bind(this)}>
                                        <div className="col-xs-9 text-left">
                                            <div className="huge">Users</div>
                                        </div>
                                    </button>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <button className={this.state.valActive2 != false ? "panel panel-primary active" : "panel panel-primary"} id="button2" onClick={this.tabKlik.bind(this)}>
                                        <div className="col-xs-9 text-left">
                                            <div className="huge">Roles</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <Tabel 
                                tombol="ok" 
                                nama={this.state.valButton}
                                menu={this.state.menu}
                                headerModalAdd={this.state.headerModalAdd}
                                headerModalEdit={this.state.headerModalEdit}
                                header={this.state.header}
                                data={this.state.dataAll}
                                dataRoles={this.state.dataRoles}
                                dataMenus={this.state.dataMenus}
                                total={this.state.totalData}
                                page={this.state.page}
                                nextPage={this.state.nextPage}
                                actAdd={this.handleAddData}
                                actEdit={this.handleEditData}
                                actDelete={this.handleDeleteData}
                                actSearch={this.handleSearchData}
                                actPage={this.handlePageData}
                            />
                        </div>
                    </Layout>
                )
            } else {
                return (
                    <Layout>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 className="page-header">Change Password</h1>
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="modal-input"
                                    id="password"
                                    aria-describedby="emailHelp"
                                    placeholder="Password Baru"
                                    autoComplete="false"
                                />
                                <a onClick={this.showPassword}>
                                    <i
                                        className="fa fa-eye fa-fw"
                                        style={{
                                            float: "right",
                                            color: "#20b2aa",
                                            paddingRight: "20px",
                                            marginLeft: "-25px",
                                            marginTop: "-25px",
                                            zIndex: "2",
                                            position: "relative",
                                        }}
                                    ></i>
                                </a>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="modal-input"
                                    id="password_confirmation"
                                    aria-describedby="emailHelp"
                                    placeholder="Password Confirmation"
                                    autoComplete="false"
                                />
                                <a onClick={this.showPasswordConfirmation}>
                                    <i
                                        className="fa fa-eye fa-fw"
                                        style={{
                                            float: "right",
                                            color: "#20b2aa",
                                            paddingRight: "20px",
                                            marginLeft: "-25px",
                                            marginTop: "-25px",
                                            zIndex: "2",
                                            position: "relative",
                                        }}
                                    ></i>
                                </a>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.handleChangePassword}>Save</button>
                        </div>
                    </Layout>
                )
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(Users)