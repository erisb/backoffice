import React, { Component } from "react";
import axios from "axios";
import router from "next/router";
import Swal from 'sweetalert2'
import Layout from "../components/layout";
import Tabel from "../components/tabel";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Logout } from '../redux/actions/authActions';

let valAct;
class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: "",
            valButton: "",
            valActiveDefault: false,
            dataAll: [],
            dataTemp: [],
            totalData: 0,
            totalDataTemp: 0,
            header: [],
            page: 5,
            nextPage: 1,
            urlAdd: "",
            urlDwnld: "",
            urlApprove: "",
            urlReject: "",
            urlAdjust: "",
            urlCancel: "",
            urlSearch: "",
            urlPage: "",
            valActive2: false,
        };
    }

    componentDidMount() {
        valAct = "payment";
        this.setState({
            menu: "payment",
            valButton: "Payment",
            header: ["Nama", "Kode Booking", "Total", "Status"],
            valActiveDefault: true,
            urlApprove: process.env.NEXT_PUBLIC_API_URL + "approvedPayment",
            urlReject: process.env.NEXT_PUBLIC_API_URL + "rejectedPayment",
            urlAdjust: process.env.NEXT_PUBLIC_API_URL + "adjustments",
            urlCancel: process.env.NEXT_PUBLIC_API_URL + "apieksternal/pergiumroh/umrohRelease",
            urlSearch: process.env.NEXT_PUBLIC_API_URL + "payment/by",
            urlPage: process.env.NEXT_PUBLIC_API_URL + "payment/next/" + this.state.page + "/page",
        });
        this.listDatas(1);
    }

    handleEditDataPayment = async (id, paymentId, data1) => {
        try {
            let params = {
                paymentId: paymentId,
                bayar: data1,
                orderId: id,
                token: this.props.auth.token
            }
            let res = await axios.put(this.state.urlAdjust, params, {
                crossdomain: true
            })

            if (res.data.statusCode == '555' || res.data.statusCode == '666' || res.data.statusCode == '777' || res.data.statusCode == '888' || res.data.statusCode == '401' || res.data.statusCode == '601')
            {
                this.props.Logout();
            }
            if (res.data.statusCode == '000') {
                router.reload()
                Swal.fire({
                    icon: 'success',
                    title: 'Payment',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Payment',
                    text: res.data.message,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleDwnldData = async (fromDt, toDt) => {
        try {
            let params = {
                fromDt: fromDt,
                toDt: toDt
            }
            let res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "excel/umroh", {
                crossdomain: true,
                params: params,
                responseType: 'blob',
                headers: { "Content-Type": "application/vnd.ms-excel" }
            })
            if (res) {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                let date_ob = new Date();
                let date = ("0" + date_ob.getDate()).slice(-2);
                let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
                let year = date_ob.getFullYear();
                link.href = url;
                link.setAttribute('download', 'reconsile'+date+'-'+month+'-'+year+'.xls'); //or any other extension
                document.body.appendChild(link);
                link.click();
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Download',
                    text: res.data.message,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleApproveData = async (paymentId, orderId) => {
        try {
            let params = {
                paymentId: paymentId,
                orderId: orderId
            }
            let res = await axios.put(process.env.NEXT_PUBLIC_API_URL + "approvedPayment", params, {
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
            if (res.data.statusCode == '000') {
                // alert(res.data.message)
                router.reload()
                Swal.fire({
                    icon: 'success',
                    title: 'Payment',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1300
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Payment',
                    text: res.data.message,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleRejectData = async (paymentId, orderId) => {
        try {
            let params = {
                paymentId: paymentId,
                orderId: orderId
            }
            let res = await axios.put(process.env.NEXT_PUBLIC_API_URL + "rejectedPayment", params, {
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
            if (res.data.statusCode == '000') {
                router.reload()
                Swal.fire({
                    icon: 'success',
                    title: 'Payment',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1300
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Payment',
                    text: res.data.message,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleCancelData = async (bookingCode) => {
        try {
            let params = {
                booking_code: bookingCode,
                token: this.props.auth.token
            }
            let res = await axios.post(process.env.NEXT_PUBLIC_API_URL + "apieksternal/pergiumroh/umrohRelease", params, {
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
            if (res.data.statusCode == '000') {
                router.reload()
                Swal.fire({
                    icon: 'success',
                    title: 'Payment',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1300
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Payment',
                    text: res.data.message,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleSearchData = async (e) => {
        try {
            let params = {
                search: e,
            }
            let res = await axios.post(this.state.urlSearch, params, {
                crossdomain: true
            })
            if (res.data.statusCode == "000") {
                if (res.data.data.length != 0) {
                    this.setState({ dataAll: [], totalData: res.data.data.length });
                    for (let i = 0; i < res.data.data.length; i++) {
                        this.setState((state) => {
                            const dataAll = state.dataAll.push({
                                id: res.data.data[i]._id,
                                nama: res.data.data[i].nama,
                                userId: res.data.data[i].idUserMobile,
                                codeBooking: res.data.data[i].codeBooking,
                                tanggal: res.data.data[i].departureDate,
                                harga: res.data.data[i].totalAmount,
                                listPayment: res.data.data[i].listPayment,
                                paymentDate: res.data.data[i].paymentDate,
                                status: res.data.data[i].status,
                                isCancel: res.data.data[i].isCancel,
                            });
                            return dataAll;
                        });
                    }
                } else {
                    this.setState({
                        dataAll: this.state.dataTemp,
                        totalData: this.state.totalDataTemp,
                    });
                }
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    handlePageData = async (e) => {
        try {
            let res = await axios.get(this.state.urlPage + "/" + e, {
                crossdomain: true
            })
            if (res.data.statusCode == "000") {
                this.setState({ dataAll: [], nextPage: e });
                for (let i = 0; i < res.data.data.length; i++) {
                    this.setState((state) => {
                        const dataAll = state.dataAll.push({
                            id: res.data.data[i]._id,
                            nama: res.data.data[i].nama,
                            userId: res.data.data[i].idUserMobile,
                            codeBooking: res.data.data[i].codeBooking,
                            tanggal: res.data.data[i].departureDate,
                            harga: res.data.data[i].totalAmount,
                            listPayment: res.data.data[i].listPayment,
                            paymentDate: res.data.data[i].paymentDate,
                            status: res.data.data[i].status,
                            isCancel: res.data.data[i].isCancel,
                        });
                        return dataAll;
                    });
                }
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    listDatas = async (page) => {
        try {
            let urlDatas;
            if (valAct == 'generate') {
                this.setState({
                    dataAll: [],
                    dataTemp: [],
                    totalData: 0,
                    totalDataTemp: 0,
                    totalData: 0,
                    totalDataTemp: 0,
                    nextPage: page,
                });

            } else {
                if (valAct == "payment") {
                    urlDatas =
                        page == 1
                            ? process.env.NEXT_PUBLIC_API_URL +
                            "payment/first/" +
                            this.state.page
                            : process.env.NEXT_PUBLIC_API_URL +
                            "payment/next/" +
                            this.state.page +
                            "/page/" +
                            page;
                }
                let res = await axios.get(urlDatas, {
                    crossdomain: true,
                })
                if (res.data.statusCode == "000") {
                    console.log(res.data.data);
                    this.setState({
                        dataAll: [],
                        dataTemp: [],
                        totalData: 0,
                        totalDataTemp: 0,
                    });
                    for (let i = 0; i < res.data.data.length; i++) {
                        if (valAct == 'payment') {
                            this.setState((state) => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    nama: res.data.data[i].nama,
                                    userId: res.data.data[i].idUserMobile,
                                    codeBooking: res.data.data[i].codeBooking,
                                    tanggal: res.data.data[i].departureDate,
                                    harga: res.data.data[i].totalAmount,
                                    status: res.data.data[i].status,
                                    isCancel: res.data.data[i].isCancel,
                                    listPayment: res.data.data[i].listPayment,
                                    paymentDate: res.data.data[i].paymentDate,
                                });
                                return dataAll;
                            });
                            this.setState((state) => {
                                const dataTemp = state.dataTemp.push({
                                    id: res.data.data[i]._id,
                                    nama: res.data.data[i].nama,
                                    userId: res.data.data[i].idUserMobile,
                                    codeBooking: res.data.data[i].codeBooking,
                                    tanggal: res.data.data[i].departureDate,
                                    harga: res.data.data[i].totalAmount,
                                    status: res.data.data[i].status,
                                    isCancel: res.data.data[i].isCancel,
                                    listPayment: res.data.data[i].listPayment,
                                    paymentDate: res.data.data[i].paymentDate,
                                });
                                return dataTemp;
                            });
                        }
                    }
                    this.setState({
                        totalData: res.data.total,
                        totalDataTemp: res.data.total,
                        nextPage: page,
                    });
                } else {
                    alert(res.data.message);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    tabKlikDefault(e) {
        let id = e.currentTarget.id;
        let el = document.getElementById(id);
        if (el.classList.contains('active')) {
            console.log('cek');
        } else {
            valAct = 'payment'
            this.setState({
                menu: "payment",
                valButton: "Payment",
                header: ["Nama", "Kode Booking", "Total", "Status"],
                valActiveDefault: true,
                dataAll: [],
                dataTemp: [],
                totalData: 0,
                totalDataTemp: 0,
                urlApprove: process.env.NEXT_PUBLIC_API_URL + "approvedPayment",
                urlReject: process.env.NEXT_PUBLIC_API_URL + "rejectedPayment",
                urlAdjust: process.env.NEXT_PUBLIC_API_URL + "adjustments",
                urlCancel: process.env.NEXT_PUBLIC_API_URL + "apieksternal/pergiumroh/umrohRelease",
                urlSearch: process.env.NEXT_PUBLIC_API_URL + "payment/by",
                urlPage: process.env.NEXT_PUBLIC_API_URL + "payment/next/" + this.state.page + "/page",
                valActive2: false,
            })
            this.listDatas(1)
        }
    }

    tabKlik(e) {
        let id = e.currentTarget.id;
        let el = document.getElementById(id);
        if (el.classList.contains('active')) {
            console.log('cek');
        } else {
            if (id == 'button2') {
                valAct = 'generate'
                this.setState({
                    menu: "generate",
                    valButton: "Generate",
                    header: ['Dari Tanggal', 'Tanggal Akhir'],
                    valActiveDefault: false,
                    urlDwnld: process.env.NEXT_PUBLIC_API_URL + "excel/umroh",
                    valActive2: true,
                })
            }
            this.listDatas(1)
        }
    }

    render() {
        if (this.props.auth.status == "NOT LOGIN") {
            router.push("/")
            Swal.fire({
                icon: 'info',
                title: 'Login',
                text: 'Anda belum login',
                showConfirmButton: false,
                timer: 1200
            })
        } else {
            return (
                <Layout>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">Payment Confirmation</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActiveDefault != false ? "panel panel-primary active" : "panel panel-primary"} id="button1" onClick={this.tabKlikDefault.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Payment</div>
                                    </div>
                                </button>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActive2 != false ? "panel panel-primary active" : "panel panel-primary"} id="button2" onClick={this.tabKlik.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Generate File</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <Tabel
                            tombol="no"
                            nama={this.state.valButton}
                            menu={this.state.menu}
                            header={this.state.header}
                            data={this.state.dataAll}
                            total={this.state.totalData}
                            page={this.state.page}
                            nextPage={this.state.nextPage}
                            actApprove={this.handleApproveData}
                            actReject={this.handleRejectData}
                            actDwnld={this.handleDwnldData}
                            actAdjust={this.handleEditDataPayment}
                            actCancel={this.handleCancelData}
                            actSearch={this.handleSearchData}
                            actPage={this.handlePageData}
                        />
                    </div>
                </Layout>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { auth } = state;
    return { auth };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        Logout,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
