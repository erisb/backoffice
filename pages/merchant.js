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
let status = '';
class Merchant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: '',
            valButton: '',
            valActiveDefault: false,
            dataAll: [],
            dataTemp: [],
            totalData: 0,
            totalDataTemp: 0,
            header: [],
            page: 5,
            nextPage: 1,
            urlApprove: '',
            urlSearch: '',
            urlFilter: '',
            urlPage: '',
        };
    }

    componentDidMount() {
        valAct = "merchant";
        this.setState({
            menu: "merchant",
            valButton: "Merchant",
            header: ["Nama", "Alamat", "Status"],
            valActiveDefault: true,
            urlApprove: process.env.NEXT_PUBLIC_API_BACKOFFICE + "masjid/approved",
            urlSearch: process.env.NEXT_PUBLIC_API_BACKOFFICE + "masjid/by",
            urlFilter: process.env.NEXT_PUBLIC_API_BACKOFFICE + "masjid",
            urlPage:process.env.NEXT_PUBLIC_API_BACKOFFICE+"masjid/next/"+this.state.page+"/page",
        });
        this.listDatas(1);
    }

    handleApproveMasjid = async (masjidId) => {
        try {
            let params = {
                uuid_masjid: masjidId
            }
            
            let res = await axios.post(process.env.NEXT_PUBLIC_API_BACKOFFICE + "masjid/approved", params, {
                crossdomain: true
            })

            if (res.data.statusCode == '555' || res.data.statusCode == '666' || res.data.statusCode == '777' || res.data.statusCode == '888' || res.data.statusCode == '401' || res.data.statusCode == '601')
            {
                this.props.Logout();
            }
            if (res.data.statusCode == '000') {
                // alert(res.data.message)
                router.reload()
                Swal.fire({
                    icon: 'success',
                    title: 'Merchant',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1300
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Merchant',
                    text: res.data.message,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    

    handleSearchData = async(e, status) => {
        try {
            let params = {
                search: e,
                status: status
            }
            if (e == "" && status == "") {
                this.setState({ dataAll: this.state.dataTemp, totalData: this.state.totalDataTemp })
            }else if(e== "" && status != ""){
                this.listDatas(1)
            }else{
                let res = await axios.post(this.state.urlSearch,params,{
                    crossdomain: true
                })
                if (res.data.statusCode == '000') {
                    console.log(res.data.data)
                    this.setState({ dataAll: [], totalData: res.data.data.length })
                    for (let i = 0; i < res.data.data.length; i++) {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id: res.data.data[i].uuid,
                                nama: res.data.data[i].namaMasjid,
                                alamat: res.data.data[i].alamatMasjid,
                                status: res.data.data[i].tahap_verifikasi,
                                namaPj: res.data.data[i].namaPJMasjid,
                                nikPj: res.data.data[i].nikPJMasjid,
                                urlKTP: res.data.data[i].urlKTPPJMasjid,
                                urlSurat: res.data.data[i].urlSuratMasjid,
                                urlFoto: res.data.data[i].urlFotoDepanMasjid,
                                latMasjid: res.data.data[i].latitudeMasjid,
                                longMasjid: res.data.data[i].longitudeMasjid,
                            })
                            return dataAll;
                        })
                    }   
                }
                else {
                    alert(res.data.message)
                }
            }
            
        } catch(error) {
            console.log(error);
        }
    }

    handleFilterData = async(e) => {
        status = e;
        this.listDatas(1);
    }

    handlePageData = async(e) => {
        try {
            let params = {
                status: status
            }
            let res = await axios.post(this.state.urlPage + '/' + e,params,{
                crossdomain: true,
            })
            if (res.data.statusCode == '000') {
                this.setState({ dataAll: [], nextPage: e })
                for (let i = 0; i < res.data.data.length; i++) {
                    this.setState(state => {
                        const dataAll = state.dataAll.push({
                            id: res.data.data[i].uuid,
                            nama: res.data.data[i].namaMasjid,
                            alamat: res.data.data[i].alamatMasjid,
                            status: res.data.data[i].tahap_verifikasi,
                            namaPj: res.data.data[i].namaPJMasjid,
                            nikPj: res.data.data[i].nikPJMasjid,
                            urlKTP: res.data.data[i].urlKTPPJMasjid,
                            urlSurat: res.data.data[i].urlSuratMasjid,
                            urlFoto: res.data.data[i].urlFotoDepanMasjid,
                            latMasjid: res.data.data[i].latitudeMasjid,
                            longMasjid: res.data.data[i].longitudeMasjid,
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
            let params = {
                status: status
            }
            if (valAct == 'merchant') {
                urlDatas = page == 1 ? process.env.NEXT_PUBLIC_API_BACKOFFICE+'masjid/first/'+this.state.page : process.env.NEXT_PUBLIC_API_BACKOFFICE+'masjid/next/'+this.state.page+"/page/"+page
            }
            let res = await axios.post(urlDatas,params,{
                crossdomain: true,
            })
            
            if (res.data.statusCode == '000') {
                this.setState({ dataAll: [], dataTemp: [], totalData: 0, totalDataTemp: 0 })
                if (res.data.data.length != 0) {
                    for (let i = 0; i < res.data.data.length; i++) {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id: res.data.data[i].uuid,
                                nama: res.data.data[i].namaMasjid,
                                alamat: res.data.data[i].alamatMasjid,
                                status: res.data.data[i].tahap_verifikasi,
                                namaPj: res.data.data[i].namaPJMasjid,
                                nikPj: res.data.data[i].nikPJMasjid,
                                urlKTP: res.data.data[i].urlKTPPJMasjid,
                                urlSurat: res.data.data[i].urlSuratMasjid,
                                urlFoto: res.data.data[i].urlFotoDepanMasjid,
                                latMasjid: res.data.data[i].latitudeMasjid,
                                longMasjid: res.data.data[i].longitudeMasjid,
                            })
                            return dataAll;
                        })
                        this.setState(state => {
                            const dataTemp = state.dataTemp.push({
                                id: res.data.data[i].uuid,
                                nama: res.data.data[i].namaMasjid,
                                alamat: res.data.data[i].alamatMasjid,
                                status: res.data.data[i].tahap_verifikasi,
                                namaPj: res.data.data[i].namaPJMasjid,
                                nikPj: res.data.data[i].nikPJMasjid,
                                urlKTP: res.data.data[i].urlKTPPJMasjid,
                                urlSurat: res.data.data[i].urlSuratMasjid,
                                urlFoto: res.data.data[i].urlFotoDepanMasjid,
                                latMasjid: res.data.data[i].latitudeMasjid,
                                longMasjid: res.data.data[i].longitudeMasjid,
                            })
                            return dataTemp;
                        })
                    }
                    this.setState({totalData:res.data.total,totalDataTemp:res.data.total,nextPage:page})
                }else{
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

    tabKlikDefault(e) {
        let id = e.currentTarget.id;
        let el = document.getElementById(id);
        if (el.classList.contains('active')) {
            console.log('cek');
        } else {
            valAct = 'Merchant';
            this.setState({
                menu: "merchant",
                valButton: 'Merchant',
                header: ["ID", "Nama", "Alamat", "Status"],
                valActiveDefault: true,
                dataAll: [],
                dataTemp: [],
                totalData: 0,
                totalDataTemp: 0,
                urlApprove: process.env.NEXT_PUBLIC_API_BACKOFFICE + "masjid/approved",
                urlSearch: process.env.NEXT_PUBLIC_API_BACKOFFICE + "masjid/by",
                urlFilter: process.env.NEXT_PUBLIC_API_BACKOFFICE + "masjid",
                urlPage:process.env.NEXT_PUBLIC_API_BACKOFFICE+"masjid/next/"+this.state.page+"/page",
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
                                <h1 className="page-header">Merchant</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActiveDefault != false ? "panel panel-primary active" : "panel panel-primary"} id="button1" onClick={this.tabKlikDefault.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Merchant</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <Tabel
                            tombol="no"
                            filter="on"
                            nama={this.state.valButton}
                            menu={this.state.menu}
                            header={this.state.header}
                            data={this.state.dataAll}
                            total={this.state.totalData}
                            page={this.state.page}
                            nextPage={this.state.nextPage}
                            actApproveMasjid={this.handleApproveMasjid}
                            actSearch={this.handleSearchData}
                            actFilter={this.handleFilterData}
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

export default connect(mapStateToProps, mapDispatchToProps)(Merchant)