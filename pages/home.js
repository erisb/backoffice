import React, { Component } from "react";
import axios from 'axios';
import router from 'next/router'
import Swal from 'sweetalert2'
import Layout from '../components/layout';
import Tabel from '../components/tabel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Logout } from '../redux/actions/authActions';

let valAct;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: '',
            valButton: '',
            headerModalAdd: '',
            headerModalEdit: '',
            valActiveDefault: false,
            dataAll: [],
            dataTemp: [],
            totalData: 0,
            totalDataTemp: 0,
            header: [],
            page: 5,
            nextPage: 1,
            urlAdd: '',
            urlEdit: '',
            urlDelete: '',
            urlSearch: '',
            urlPage: '',
        };
    }

    componentDidMount() {
        valAct = 'products';
        this.setState({
            menu: "products",
            header: ['Judul', 'Gambar', 'Status'],
            valActiveDefault: true,
            valButton: 'Add Product',
            headerModalAdd: 'Add Product',
            headerModalEdit: 'Edit Product',
            urlAdd: process.env.NEXT_PUBLIC_API_URL + "menuhome",
            urlEdit: process.env.NEXT_PUBLIC_API_URL + "menuhome",
            urlDelete: process.env.NEXT_PUBLIC_API_URL + "menuhome",
            urlSearch: process.env.NEXT_PUBLIC_API_URL + "menuhome/by",
            urlPage: process.env.NEXT_PUBLIC_API_URL + "menuhome/next/" + this.state.page + "/page",
        })
        this.listDatas(1)
    }

    handleAddData = async(page, data1, data2, data3, data4) => {
        try {
            const data = new FormData();
            data.append('judulMenu', data1)
            data.append('gambarMenu', data2)
            data.append('statusMenu', data3)
            data.append('idMenu', data4)
            let res = await axios.post(this.state.urlAdd, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization' : 'Bearer '+this.props.auth.token
                },
                crossdomain: true
            })

            if (res.data.statusCode == '555' || res.data.statusCode == '666' || res.data.statusCode == '777' || res.data.statusCode == '888' || res.data.statusCode == '401' || res.data.statusCode == '601')
            {
                this.props.Logout();
            }
            if (res.data.statusCode == '000') {
                this.listDatas(page)
                Swal.fire({
                    icon: 'success',
                    title: 'Home',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Home',
                    text: res.data.message,
                })
            }
                
        } catch(error) {
            console.log(error);
        }
    }

    handleEditData = async(page, id, data1, data2, data3, data4) => {
        try {
            const data = new FormData();
            data.append('judulMenu', data1)
            data.append('gambarMenu', data2)
            data.append('statusMenu', data3)
            data.append('idMenu', data4)
            let res = await axios.post(this.state.urlEdit + '/' + id, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization' : 'Bearer '+this.props.auth.token
                },
                crossdomain: true
            })

            if (res.data.statusCode == '555' || res.data.statusCode == '666' || res.data.statusCode == '777' || res.data.statusCode == '888' || res.data.statusCode == '401' || res.data.statusCode == '601')
            {
                this.props.Logout();
            }
            if (res.data.statusCode == '000') {
                this.listDatas(page)
                Swal.fire({
                    icon: 'success',
                    title: 'Home',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Home',
                    text: res.data.message,
                })
            }   
        } catch(error) {
            console.log(error);
        }
    }

    handleDeleteData = async(page, id) => {
        try {
            let res = await axios.delete(this.state.urlDelete + '/' + id, {
                headers: {
                    'Authorization' : 'Bearer '+this.props.auth.token
                },
                crossdomain: true
            })

            if (res.data.statusCode == '555' || res.data.statusCode == '666' || res.data.statusCode == '777' || res.data.statusCode == '888' || res.data.statusCode == '401' || res.data.statusCode == '601')
            {
                this.props.Logout();
            }
            if (res.data.statusCode == '000') {
                this.listDatas(page)
                Swal.fire({
                    icon: 'success',
                    title: 'Home',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Home',
                    text: res.data.message,
                })
            }
        } catch(error) {
            console.log(error);
        }
    }

    handleSearchData = async(e) => {
        try {
            let params = {
                search: e
            }
            let res = await axios.post(this.state.urlSearch,params,{
                crossdomain: true
            })
            if (res.data.statusCode == '000') {
                if (res.data.data.length != 0) {
                    this.setState({ dataAll: [], totalData: res.data.data.length })
                    for (let i = 0; i < res.data.data.length; i++) {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id: res.data.data[i]._id,
                                judul: res.data.data[i].judulMenu,
                                gambar: res.data.data[i].gambarMenu,
                                status: res.data.data[i].statusMenu,
                                idMenu: res.data.data[i].idMenu
                            })
                            return dataAll;
                        })
                    }
                }
                else {
                    this.setState({ dataAll: this.state.dataTemp, totalData: this.state.totalDataTemp })
                }
            }
            else {
                alert(res.data.message)
            }     
        } catch(error) {
            console.log(error);
        }
    }

    handlePageData = async(e) => {
        try {
            let res = await axios.get(this.state.urlPage + '/' + e,{
                crossdomain: true,
            })
            if (res.data.statusCode == '000') {
                this.setState({ dataAll: [], nextPage: e })
                for (let i = 0; i < res.data.data.length; i++) {
                    this.setState(state => {
                        const dataAll = state.dataAll.push({
                            id: res.data.data[i]._id,
                            judul: res.data.data[i].judulMenu,
                            gambar: res.data.data[i].gambarMenu,
                            status: res.data.data[i].statusMenu,
                            idMenu: res.data.data[i].idMenu
                        })
                        return dataAll;
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

    listDatas = async(page) => {
        try {
            let urlDatas;
            if (valAct == 'products') {
                urlDatas = page == 1 ? process.env.NEXT_PUBLIC_API_URL + "menuhome/first/" + this.state.page : process.env.NEXT_PUBLIC_API_URL + "menuhome/next/" + this.state.page + "/page/" + page
            }
            let res = await axios.get(urlDatas,{
                crossdomain: true,
            })
            if (res.data.statusCode == '000') {
                this.setState({ dataAll: [], dataTemp: [], totalData: 0, totalDataTemp: 0 })
                for (let i = 0; i < res.data.data.length; i++) {
                    this.setState(state => {
                        const dataAll = state.dataAll.push({
                            id: res.data.data[i]._id,
                            judul: res.data.data[i].judulMenu, 
                            gambar: res.data.data[i].gambarMenu,
                            status: res.data.data[i].statusMenu,
                            idMenu: res.data.data[i].idMenu
                        })
                        return dataAll;
                    })
                    this.setState(state => {
                        const dataTemp = state.dataTemp.push({
                            id: res.data.data[i]._id,
                            judul: res.data.data[i].judulMenu,
                            gambar: res.data.data[i].gambarMenu,
                            status: res.data.data[i].statusMenu,
                            idMenu: res.data.data[i].idMenu
                        })
                        return dataTemp;
                    })
                }
                this.setState({ totalData: res.data.total, totalDataTemp: res.data.total, nextPage: page })
            }
            else {
                alert(res.data.message)
            }
        } catch(error) {
            console.log(error);
        }
    }

    tabKlikDefault(e) {
        let id = e.currentTarget.id;
        let el = document.getElementById(id);
        if (el.classList.contains('active')) {
            console.log('cek');
        } else {
            valAct = 'Product';
            this.setState({
                header: ['Judul', 'Gambar', 'Status'],
                valActiveDefault: true,
                valButton: 'Add Product',
                headerModalAdd: 'Add Product',
                headerModalEdit: 'Edit Product',
                urlAdd: process.env.NEXT_PUBLIC_API_URL + "menuhome",
                urlEdit: process.env.NEXT_PUBLIC_API_URL + "menuhome",
                urlDelete: process.env.NEXT_PUBLIC_API_URL + "menuhome",
                urlSearch: process.env.NEXT_PUBLIC_API_URL + "menuhome/by",
                urlPage: process.env.NEXT_PUBLIC_API_URL + "menuhome/next/" + this.state.page + "/page",
            })
            this.listDatas(1)
        }
    }

    render() {
        if (this.props.auth.status == 'NOT LOGIN') {
            router.push('/')
            Swal.fire({
                icon: 'info',
                title: 'Login',
                text: 'Anda belum login',
                showConfirmButton: false,
                timer: 1200
            })
        }
        else {
            return (
                <Layout>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">Layout</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActiveDefault != false ? "panel panel-primary active" : "panel panel-primary"} id="button1" onClick={this.tabKlikDefault.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Product</div>
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
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home)