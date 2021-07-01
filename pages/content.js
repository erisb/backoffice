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
class Content extends Component {
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
            dataCategories: [],
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
            valActive2: false,
            valActive3: false,
            valActive4: false,
            valActive5: false,
            valActive6: false,
            valActive7: false,
            valActive8: false,
        };
    }

    componentDidMount() {
        valAct = 'kategori'
        this.setState({
            menu: "kategori",
            header: ['Nama', 'Status'],
            valActiveDefault: true,
            valButton: 'Add Kategori',
            headerModalAdd: 'Add Kategori',
            headerModalEdit: 'Edit Kategori',
            urlAdd: process.env.NEXT_PUBLIC_API_URL + "category",
            urlEdit: process.env.NEXT_PUBLIC_API_URL + "category",
            urlDelete: process.env.NEXT_PUBLIC_API_URL + "category",
            urlSearch: process.env.NEXT_PUBLIC_API_URL + "categories/by",
            urlPage: process.env.NEXT_PUBLIC_API_URL + "categories/next/" + this.state.page + "/page",
        })
        this.listDatas(1)
        this.listCategories()
    }

    handleAddData = async (page, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14) => {
        try {
            const data = new FormData();
            let res,params;
            if (valAct == 'kategori') {
                params = {
                    categoryName: data1,
                    statusCategory: data2
                }

                res = await axios.post(this.state.urlAdd, params, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : 'Bearer '+this.props.auth.token
                    },
                    crossdomain: true
                })
            } else if (valAct == 'inspirasi') {
                data.append('categoryId', data5)
                data.append('contentInspiration', data1)
                data.append('sourceInspiration', data2)
                data.append('imageInspiration', data3)
                data.append('statusInspiration', data4)
                data.append('meaningInspiration', data6)

                res = await axios.post(this.state.urlAdd, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization' : 'Bearer '+this.props.auth.token
                    },
                    crossdomain: true
                })
            } else if (valAct == 'kebijakan') {
                params = {
                    isiPrivacy: data1
                }
                res = await axios.post(this.state.urlAdd, params, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : 'Bearer '+this.props.auth.token
                    },
                    crossdomain: true
                })
            } else if (valAct == 'syarat') {
                params = {
                    termContent: data1
                }
                res = await axios.post(this.state.urlAdd, params, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : 'Bearer '+this.props.auth.token
                    },
                    crossdomain: true
                })
            } else if (valAct == 'artikel') {
                data.append('categoryId', data5)
                data.append('articleTitle', data1)
                data.append('articleContent', data2)
                data.append('articleImage', data3)
                data.append('publish', data4)
                data.append('articleAdmin', data6)

                res = await axios.post(this.state.urlAdd, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization' : 'Bearer '+this.props.auth.token
                    },
                    crossdomain: true
                })
            } else if (valAct == 'doa') {
                params = {
                    prayerTitle: data1,
                    indonesianVersion: data2,
                    arabVersion: data3,
                    prayerSource: data4,
                    prayerStatus: data5
                }

                res = await axios.post(this.state.urlAdd, params, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : 'Bearer '+this.props.auth.token
                    },
                    crossdomain: true
                })
            } else {
                console.log(data11)
                data.append('lecturerName', data1)
                data.append('lecturerAddress', data2)
                data.append('lecturerDesc', data3)
                data.append('lecturerPhoto', data4)
                data.append('lecturerDateofBirth', data5)
                data.append('lecturerTelp', data6)
                data.append('lecturerEmail', data7)
                data.append('lecturerAlmamater', data8)
                data.append('lecturerSosmed', data9)
                data.append('lecturerStatus', data10)
                data.append('lecturerGallery1', data11)
                data.append('lecturerGallery2', data12)
                data.append('lecturerGallery3', data13)
                data.append('lecturerGallery4', data14)

                res = await axios.post(this.state.urlAdd, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization' : 'Bearer '+this.props.auth.token
                    },
                    crossdomain: true
                })
            }

            if (res.data.statusCode == '555' || res.data.statusCode == '666' || res.data.statusCode == '777' || res.data.statusCode == '888' || res.data.statusCode == '401' || res.data.statusCode == '601')
            {
                this.props.Logout();
            }
            if (res.data.statusCode == '000') {
                this.listDatas(page)
                Swal.fire({
                    icon: 'success',
                    title: 'Content',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Content',
                    text: res.data.message,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleEditData = async (page, id, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14) => {
        try {
            const data = new FormData();
            let res;
            if (valAct == 'kategori') {
                let params = {
                    categoryName: data1,
                    statusCategory: data2
                }
                res =
                    await axios.put(this.state.urlEdit + '/' + id, params, {
                        headers: {
                            'Authorization' : 'Bearer '+this.props.auth.token
                        },
                        crossdomain: true
                    })
            } else if (valAct == 'inspirasi') {
                data.append('categoryId', data5)
                data.append('contentInspiration', data1)
                data.append('sourceInspiration', data2)
                data.append('imageInspiration', data3)
                data.append('statusInspiration', data4)
                data.append('meaningInspiration', data6)
                res =
                    await axios.post(this.state.urlEdit + '/' + id, data, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization' : 'Bearer '+this.props.auth.token
                        },
                        crossdomain: true
                    })
            } else if (valAct == 'kebijakan') {
                let params = {
                    isiPrivacy: data1
                }
                res =
                    await axios.put(this.state.urlEdit + '/' + id, params, {
                        headers: {
                            'Authorization' : 'Bearer '+this.props.auth.token
                        },
                        crossdomain: true
                    })
            } else if (valAct == 'syarat') {
                let params = {
                    termContent: data1
                }
                res =
                    await axios.put(this.state.urlEdit + '/' + id, params, {
                        headers: {
                            'Authorization' : 'Bearer '+this.props.auth.token
                        },
                        crossdomain: true
                    })
            } else if (valAct == 'artikel') {
                data.append('categoryId', data5)
                data.append('articleTitle', data1)
                data.append('articleContent', data2)
                data.append('articleImage', data3)
                data.append('publish', data4)
                data.append('articleAdmin', data6)
                res =
                    await axios.post(this.state.urlEdit + '/' + id, data, {
                        headers: {
                            'Authorization' : 'Bearer '+this.props.auth.token
                        },
                        crossdomain: true
                    })
            } else if (valAct == 'doa') {
                let params = {
                    prayerTitle: data1,
                    indonesianVersion: data2,
                    arabVersion: data3,
                    prayerSource: data4,
                    prayerStatus: data5
                }
                res =
                    await axios.put(this.state.urlEdit + '/' + id, params, {
                        headers: {
                            'Authorization' : 'Bearer '+this.props.auth.token
                        },
                        crossdomain: true
                    })
            } else if (valAct == 'penceramah') {
                data.append('lecturerName', data1)
                data.append('lecturerAddress', data2)
                data.append('lecturerDesc', data3)
                data.append('lecturerPhoto', data4)
                data.append('lecturerDateofBirth', data5)
                data.append('lecturerTelp', data6)
                data.append('lecturerEmail', data7)
                data.append('lecturerAlmamater', data8)
                data.append('lecturerSosmed', data9)
                data.append('lecturerStatus', data10)
                data.append('lecturerGallery1', data11)
                data.append('lecturerGallery2', data12)
                data.append('lecturerGallery3', data13)
                data.append('lecturerGallery4', data14)
                res =
                    await axios.post(this.state.urlEdit + '/' + id, data, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization' : 'Bearer '+this.props.auth.token
                        },
                        crossdomain: true
                    })
            } else {
                let params = {
                    namaSurah: data1,
                    namaArab: data2,
                    artiIndo: data3,
                    artiEng: data4,
                    kategoriSurah: data5,
                    jmlhAyat: data6
                }
                res =
                    await axios.put(this.state.urlEdit + '/' + id, params, {
                        headers: {
                            'Authorization' : 'Bearer '+this.props.auth.token
                        },
                        crossdomain: true
                    })
            }
            res

            if (res.data.statusCode == '555' || res.data.statusCode == '666' || res.data.statusCode == '777' || res.data.statusCode == '888' || res.data.statusCode == '401' || res.data.statusCode == '601')
            {
                this.props.Logout();
            }
            if (res.data.statusCode == '000') {
                this.listDatas(page)
                Swal.fire({
                    icon: 'success',
                    title: 'Content',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Content',
                    text: res.data.message,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleEditDataAyat = async (page, id, data1, data2, data3, data4, data5, data6) => {
        try {
            let params = {
                noJuz: data1,
                noAyat: data2,
                ayatArab: data3,
                artiIndoAyat: data4,
                artiEngAyat: data5,
                audio: data6
            }
            let res = await axios.put(this.state.urlEditAyat + '/' + id, params, {
                headers: {
                    'Authorization' : 'Bearer '+this.props.auth.token
                },
                crossdomain: true
            })
            if (res.data.statusCode == '000') {
                this.listDatas(page)
                Swal.fire({
                    icon: 'success',
                    title: 'Content',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Content',
                    text: res.data.message,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    // handleUploadAyat=(page,id,data1)=>{
    //     const data = new FormData();
    //     data.append('file',data1)
    //     axios.post(this.state.urlUploadAyat+'/'+id,data,{
    //         header:{
    //             'Content-Type': 'multipart/form-data'
    //         },
    //         crossdomain: true,
    //     })
    //     .then(res=>{
    //         if (res.data.statusCode == '000')
    //         {
    //             this.listDatas(page)
    //             // router.reload()
    //         }
    //         else {
    //             alert(res.data.message)
    //         }
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     })
    // }

    handleDeleteData = async (page, id) => {
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
                    title: 'Content',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Content',
                    text: res.data.message,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleKirimNotifArtikel = async (page, data1) => {
        try {
            let params = {
                judul: data1
            }
            let res = await axios.post(this.state.urlKirimNotif, params, {
                headers: {
                    'Authorization' : 'Bearer '+this.props.auth.token
                },
                crossdomain: true
            })
            if (res.data.statusCode == '000') {
                this.listDatas(page)
                Swal.fire({
                    icon: 'success',
                    title: 'Content',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Content',
                    text: res.data.message,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleKirimNotifInspirasi = async (page) => {
        try {
            let res = await axios.post(this.state.urlKirimNotif, null, {
                headers: {
                    'Authorization' : 'Bearer '+this.props.auth.token
                },
                crossdomain: true
            })
            if (res.data.statusCode == '000') {
                this.listDatas(page)
                Swal.fire({
                    icon: 'success',
                    title: 'Content',
                    text: 'Berhasil',
                    showConfirmButton: false,
                    timer: 1200
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Content',
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
                search: e
            }
            let res = await axios.post(this.state.urlSearch, params, {
                crossdomain: true
            })
            if (res.data.statusCode == '000') {
                if (res.data.data.length != 0) {
                    this.setState({ dataAll: [], totalData: res.data.data.length })
                    for (let i = 0; i < res.data.data.length; i++) {
                        if (valAct == 'kategori') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    nama: res.data.data[i].categoryName,
                                    status: res.data.data[i].statusCategory
                                })
                                return dataAll;
                            })
                        } else if (valAct == 'inspirasi') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    idKategori: res.data.data[i].categoryId._id,
                                    namaKategori: res.data.data[i].categoryId.categoryName,
                                    isi: res.data.data[i].contentInspiration,
                                    sumber: res.data.data[i].sourceInspiration,
                                    gambar: res.data.data[i].imageInspiration,
                                    status: res.data.data[i].statusInspiration,
                                    arti: res.data.data[i].meaningInspiration,
                                })
                                return dataAll;
                            })
                        } else if (valAct == 'kebijakan') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    isi: res.data.data[i].isiPrivacy,
                                })
                                return dataAll;
                            })
                        } else if (valAct == 'syarat') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    isi: res.data.data[i].termContent,
                                })
                                return dataAll;
                            })
                        } else if (valAct == 'artikel') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    idKategori: res.data.data[i].categoryId._id,
                                    namaKategori: res.data.data[i].categoryId.categoryName,
                                    judul: res.data.data[i].articleTitle,
                                    isi: res.data.data[i].articleContent,
                                    gambar: res.data.data[i].articleImage,
                                    status: res.data.data[i].publish,
                                    admin: res.data.data[i].articleAdmin,
                                })
                                return dataAll;
                            })
                        } else if (valAct == 'doa') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    judul: res.data.data[i].prayerTitle,
                                    versiIndo: res.data.data[i].indonesianVersion,
                                    versiArab: res.data.data[i].arabVersion,
                                    sumber: res.data.data[i].prayerSource,
                                    status: res.data.data[i].prayerStatus,
                                })
                                return dataAll;
                            })
                        } else if (valAct == 'penceramah') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    nama: res.data.data[i].lecturerName,
                                    alamat: res.data.data[i].lecturerAddress,
                                    deskripsi: res.data.data[i].lecturerDesc,
                                    foto: res.data.data[i].lecturerPhoto,
                                    galeri1: res.data.data[i].lecturerGallery1,
                                    galeri2: res.data.data[i].lecturerGallery2,
                                    galeri3: res.data.data[i].lecturerGallery3,
                                    galeri4: res.data.data[i].lecturerGallery4,
                                    tglLahir: res.data.data[i].lecturerDateofBirth,
                                    telp: res.data.data[i].lecturerTelp,
                                    email: res.data.data[i].lecturerEmail,
                                    almamater: res.data.data[i].lecturerAlmamater,
                                    sosmed: res.data.data[i].lecturerSosmed,
                                    status: res.data.data[i].lecturerStatus,
                                })
                                return dataAll;
                            })
                        } else {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    surah: res.data.data[i].namaSurah,
                                    arab: res.data.data[i].namaArab,
                                    artiIndo: res.data.data[i].artiIndo,
                                    artiEng: res.data.data[i].artiEng,
                                    kategoriSurah: res.data.data[i].kategoriSurah,
                                    jmlhAyat: res.data.data[i].jmlhAyat,
                                    dataAyat: res.data.data[i].dataAyat,
                                })
                                return dataAll;
                            })
                        }
                    }
                }
                else {
                    this.setState({ dataAll: this.state.dataTemp, totalData: this.state.totalDataTemp })
                }
            }
            else {
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }

    handlePageData = async (e) => {
        try {
            let res = await axios.get(this.state.urlPage + '/' + e, {
                crossdomain: true,
            })
            if (res.data.statusCode == '000') {
                this.setState({ dataAll: [], nextPage: e })
                for (let i = 0; i < res.data.data.length; i++) {
                    if (valAct == 'kategori') {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id: res.data.data[i]._id,
                                nama: res.data.data[i].categoryName,
                                status: res.data.data[i].statusCategory
                            })
                            return dataAll;
                        })
                    } else if (valAct == 'inspirasi') {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id: res.data.data[i]._id,
                                idKategori: res.data.data[i].categoryId._id,
                                namaKategori: res.data.data[i].categoryId.categoryName,
                                isi: res.data.data[i].contentInspiration,
                                sumber: res.data.data[i].sourceInspiration,
                                gambar: res.data.data[i].imageInspiration,
                                status: res.data.data[i].statusInspiration,
                                arti: res.data.data[i].meaningInspiration,
                            })
                            return dataAll;
                        })
                    } else if (valAct == 'kebijakan') {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id: res.data.data[i]._id,
                                isi: res.data.data[i].isiPrivacy,
                            })
                            return dataAll;
                        })
                    } else if (valAct == 'kebijakan') {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id: res.data.data[i]._id,
                                isi: res.data.data[i].termContent,
                            })
                            return dataAll;
                        })
                    } else if (valAct == 'artikel') {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id: res.data.data[i]._id,
                                idKategori: res.data.data[i].categoryId._id,
                                namaKategori: res.data.data[i].categoryId.categoryName,
                                judul: res.data.data[i].articleTitle,
                                isi: res.data.data[i].articleContent,
                                gambar: res.data.data[i].articleImage,
                                status: res.data.data[i].publish,
                                admin: res.data.data[i].articleAdmin,
                            })
                            return dataAll;
                        })
                    } else if (valAct == 'doa') {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id: res.data.data[i]._id,
                                judul: res.data.data[i].prayerTitle,
                                versiIndo: res.data.data[i].indonesianVersion,
                                versiArab: res.data.data[i].arabVersion,
                                sumber: res.data.data[i].prayerSource,
                                status: res.data.data[i].prayerStatus,
                            })
                            return dataAll;
                        })
                    } else if (valAct == 'penceramah') {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id: res.data.data[i]._id,
                                nama: res.data.data[i].lecturerName,
                                alamat: res.data.data[i].lecturerAddress,
                                deskripsi: res.data.data[i].lecturerDesc,
                                foto: res.data.data[i].lecturerPhoto,
                                galeri1: res.data.data[i].lecturerGallery1,
                                galeri2: res.data.data[i].lecturerGallery2,
                                galeri3: res.data.data[i].lecturerGallery3,
                                galeri4: res.data.data[i].lecturerGallery4,
                                tglLahir: res.data.data[i].lecturerDateofBirth,
                                telp: res.data.data[i].lecturerTelp,
                                email: res.data.data[i].lecturerEmail,
                                almamater: res.data.data[i].lecturerAlmamater,
                                sosmed: res.data.data[i].lecturerSosmed,
                                status: res.data.data[i].lecturerStatus,
                            })
                            return dataAll;
                        })
                    } else {
                        this.setState(state => {
                            const dataAll = state.dataAll.push({
                                id: res.data.data[i]._id,
                                surah: res.data.data[i].namaSurah,
                                arab: res.data.data[i].namaArab,
                                artiIndo: res.data.data[i].artiIndo,
                                artiEng: res.data.data[i].artiEng,
                                kategoriSurah: res.data.data[i].kategoriSurah,
                                jmlhAyat: res.data.data[i].jmlhAyat,
                                dataAyat: res.data.data[i].dataAyat,
                            })
                            return dataAll;
                        })
                    }
                }
            }
            else {
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }

    listDatas = async (page) => {
        try {
            let urlDatas;
            if (valAct == 'kategori') {
                urlDatas = page == 1 ? process.env.NEXT_PUBLIC_API_URL + "categories/first/" + this.state.page : process.env.NEXT_PUBLIC_API_URL + "categories/next/" + this.state.page + "/page/" + page
            } else if (valAct == 'inspirasi') {
                urlDatas = page == 1 ? process.env.NEXT_PUBLIC_API_URL + "inspiration/first/" + this.state.page : process.env.NEXT_PUBLIC_API_URL + "inspiration/next/" + this.state.page + "/page/" + page
            } else if (valAct == 'artikel') {
                urlDatas = page == 1 ? process.env.NEXT_PUBLIC_API_URL + "articles/first/" + this.state.page : process.env.NEXT_PUBLIC_API_URL + "articles/next/" + this.state.page + "/page/" + page
            } else if (valAct == 'doa') {
                urlDatas = page == 1 ? process.env.NEXT_PUBLIC_API_URL + "doa/first/" + this.state.page : process.env.NEXT_PUBLIC_API_URL + "doa/next/" + this.state.page + "/page/" + page
            } else if (valAct == 'penceramah') {
                urlDatas = page == 1 ? process.env.NEXT_PUBLIC_API_URL + "lecturer/first/" + this.state.page : process.env.NEXT_PUBLIC_API_URL + "lecturer/next/" + this.state.page + "/page/" + page
            } else if (valAct == 'kebijakan') {
                urlDatas = page == 1 ? process.env.NEXT_PUBLIC_API_URL + "privacyPolicies/first/" + this.state.page : process.env.NEXT_PUBLIC_API_URL + "privacyPolicies/next/" + this.state.page + "/page/" + page
            } else if (valAct == 'syarat') {
                urlDatas = page == 1 ? process.env.NEXT_PUBLIC_API_URL + "termconditions/first/" + this.state.page : process.env.NEXT_PUBLIC_API_URL + "termconditions/next/" + this.state.page + "/page/" + page
            } else {
                urlDatas = page == 1 ? process.env.NEXT_PUBLIC_API_URL + "quran/first/" + this.state.page : process.env.NEXT_PUBLIC_API_URL + "quran/next/" + this.state.page + "/page/" + page
            }

            let res = await axios.get(urlDatas, {
                crossdomain: true,
            })
            if (res.data.statusCode == '000') {
                this.setState({ dataAll: [], dataTemp: [], totalData: 0, totalDataTemp: 0 })
                if (res.data.data.length != 0) {
                    for (let i = 0; i < res.data.data.length; i++) {
                        if (valAct == 'kategori') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    nama: res.data.data[i].categoryName,
                                    status: res.data.data[i].statusCategory
                                })
                                return dataAll;
                            })
                            this.setState(state => {
                                const dataTemp = state.dataTemp.push({
                                    id: res.data.data[i]._id,
                                    nama: res.data.data[i].categoryName,
                                    status: res.data.data[i].statusCategory
                                })
                                return dataTemp;
                            })
                        } else if (valAct == 'inspirasi') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    idKategori: res.data.data[i].categoryId._id,
                                    namaKategori: res.data.data[i].categoryId.categoryName,
                                    isi: res.data.data[i].contentInspiration,
                                    sumber: res.data.data[i].sourceInspiration,
                                    gambar: res.data.data[i].imageInspiration,
                                    status: res.data.data[i].statusInspiration,
                                    arti: res.data.data[i].meaningInspiration,
                                })
                                return dataAll;
                            })
                            this.setState(state => {
                                const dataTemp = state.dataTemp.push({
                                    id: res.data.data[i]._id,
                                    idKategori: res.data.data[i].categoryId._id,
                                    namaKategori: res.data.data[i].categoryId.categoryName,
                                    isi: res.data.data[i].contentInspiration,
                                    sumber: res.data.data[i].sourceInspiration,
                                    gambar: res.data.data[i].imageInspiration,
                                    status: res.data.data[i].statusInspiration,
                                    arti: res.data.data[i].meaningInspiration,
                                })
                                return dataTemp;
                            })
                        } else if (valAct == 'kebijakan') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    isi: res.data.data[i].isiPrivacy,
                                })
                                return dataAll;
                            })
                            this.setState(state => {
                                const dataTemp = state.dataTemp.push({
                                    id: res.data.data[i]._id,
                                    isi: res.data.data[i].isiPrivacy,
                                })
                                return dataTemp;
                            })
                        } else if (valAct == 'syarat') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    isi: res.data.data[i].termContent,
                                })
                                return dataAll;
                            })
                            this.setState(state => {
                                const dataTemp = state.dataTemp.push({
                                    id: res.data.data[i]._id,
                                    isi: res.data.data[i].termContent,
                                })
                                return dataTemp;
                            })
                        } else if (valAct == 'artikel') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    idKategori: res.data.data[i].categoryId._id,
                                    namaKategori: res.data.data[i].categoryId.categoryName,
                                    judul: res.data.data[i].articleTitle,
                                    isi: res.data.data[i].articleContent,
                                    gambar: res.data.data[i].articleImage,
                                    status: res.data.data[i].publish,
                                    admin: res.data.data[i].articleAdmin,
                                })
                                return dataAll;
                            })
                            this.setState(state => {
                                const dataTemp = state.dataTemp.push({
                                    id: res.data.data[i]._id,
                                    idKategori: res.data.data[i].categoryId._id,
                                    namaKategori: res.data.data[i].categoryId.categoryName,
                                    judul: res.data.data[i].articleTitle,
                                    isi: res.data.data[i].articleContent,
                                    gambar: res.data.data[i].articleImage,
                                    status: res.data.data[i].publish,
                                    admin: res.data.data[i].articleAdmin,
                                })
                                return dataTemp;
                            })
                        } else if (valAct == 'doa') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    judul: res.data.data[i].prayerTitle,
                                    versiIndo: res.data.data[i].indonesianVersion,
                                    versiArab: res.data.data[i].arabVersion,
                                    sumber: res.data.data[i].prayerSource,
                                    status: res.data.data[i].prayerStatus,
                                })
                                return dataAll;
                            })
                            this.setState(state => {
                                const dataTemp = state.dataTemp.push({
                                    id: res.data.data[i]._id,
                                    judul: res.data.data[i].prayerTitle,
                                    versiIndo: res.data.data[i].indonesianVersion,
                                    versiArab: res.data.data[i].arabVersion,
                                    sumber: res.data.data[i].prayerSource,
                                    status: res.data.data[i].prayerStatus,
                                })
                                return dataTemp;
                            })
                        } else if (valAct == 'penceramah') {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    nama: res.data.data[i].lecturerName,
                                    alamat: res.data.data[i].lecturerAddress,
                                    deskripsi: res.data.data[i].lecturerDesc,
                                    foto: res.data.data[i].lecturerPhoto,
                                    galeri1: res.data.data[i].lecturerGallery1,
                                    galeri2: res.data.data[i].lecturerGallery2,
                                    galeri3: res.data.data[i].lecturerGallery3,
                                    galeri4: res.data.data[i].lecturerGallery4,
                                    tglLahir: res.data.data[i].lecturerDateofBirth,
                                    telp: res.data.data[i].lecturerTelp,
                                    email: res.data.data[i].lecturerEmail,
                                    almamater: res.data.data[i].lecturerAlmamater,
                                    sosmed: res.data.data[i].lecturerSosmed,
                                    status: res.data.data[i].lecturerStatus,
                                })
                                return dataAll;
                            })
                            this.setState(state => {
                                const dataTemp = state.dataTemp.push({
                                    id: res.data.data[i]._id,
                                    nama: res.data.data[i].lecturerName,
                                    alamat: res.data.data[i].lecturerAddress,
                                    deskripsi: res.data.data[i].lecturerDesc,
                                    foto: res.data.data[i].lecturerPhoto,
                                    galeri1: res.data.data[i].lecturerGallery1,
                                    galeri2: res.data.data[i].lecturerGallery2,
                                    galeri3: res.data.data[i].lecturerGallery3,
                                    galeri4: res.data.data[i].lecturerGallery4,
                                    tglLahir: res.data.data[i].lecturerDateofBirth,
                                    telp: res.data.data[i].lecturerTelp,
                                    email: res.data.data[i].lecturerEmail,
                                    almamater: res.data.data[i].lecturerAlmamater,
                                    sosmed: res.data.data[i].lecturerSosmed,
                                    status: res.data.data[i].lecturerStatus,
                                })
                                return dataTemp;
                            })
                        } else {
                            this.setState(state => {
                                const dataAll = state.dataAll.push({
                                    id: res.data.data[i]._id,
                                    surah: res.data.data[i].namaSurah,
                                    arab: res.data.data[i].namaArab,
                                    artiIndo: res.data.data[i].artiIndo,
                                    artiEng: res.data.data[i].artiEng,
                                    kategoriSurah: res.data.data[i].kategoriSurah,
                                    jmlhAyat: res.data.data[i].jmlhAyat,
                                    dataAyat: res.data.data[i].dataAyat,
                                })
                                return dataAll;
                            })
                            this.setState(state => {
                                const dataTemp = state.dataTemp.push({
                                    id: res.data.data[i]._id,
                                    surah: res.data.data[i].namaSurah,
                                    arab: res.data.data[i].namaArab,
                                    artiIndo: res.data.data[i].artiIndo,
                                    artiEng: res.data.data[i].artiEng,
                                    kategoriSurah: res.data.data[i].kategoriSurah,
                                    jmlhAyat: res.data.data[i].jmlhAyat,
                                    dataAyat: res.data.data[i].dataAyat,
                                })
                                return dataTemp;
                            })
                        }

                    }
                    this.setState({ totalData: res.data.total, totalDataTemp: res.data.total, nextPage: page })
                } else {
                    this.setState({ totalData: [], totalDataTemp: [], nextPage: page })
                }
            }
            else {
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }

    listCategories = async () => {
        try {
            let res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "categories/all", {
                crossdomain: true,
            })
            if (res.data.statusCode == '000') {
                for (let i = 0; i < res.data.data.length; i++) {

                    this.setState(state => {
                        const dataCategories = state.dataCategories.push({
                            id: res.data.data[i]._id,
                            nama: res.data.data[i].categoryName,
                        })
                        return dataCategories;
                    })
                }
            }
            else {
                alert(res.data.message)
            }
        } catch (error) {
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
                valAct = 'inspirasi'
                this.setState({
                    menu: "inspirasi",
                    header: ['Kategori', 'Inspirasi', 'Sumber', 'Gambar', 'Status'],
                    valActiveDefault: false,
                    headerModalAdd: 'Add Inspirasi',
                    headerModalEdit: 'Edit Inspirasi',
                    dataAll: [],
                    dataTemp: [],
                    totalData: 0,
                    totalDataTemp: 0,
                    urlAdd: process.env.NEXT_PUBLIC_API_URL + "inspiration",
                    urlEdit: process.env.NEXT_PUBLIC_API_URL + "inspiration",
                    urlDelete: process.env.NEXT_PUBLIC_API_URL + "inspiration",
                    urlSearch: process.env.NEXT_PUBLIC_API_URL + "inspiration/by",
                    urlPage: process.env.NEXT_PUBLIC_API_URL + "inspiration/next/" + this.state.page + "/page",
                    urlKirimNotif: process.env.NEXT_PUBLIC_API_URL + "apieksternal/fcm/message/inspirasi",
                    valActive2: true,
                    valActive3: false,
                    valActive4: false,
                    valActive5: false,
                    valActive6: false,
                    valButton: 'Add Inspirasi'
                })
            } else if (id == 'button3') {
                valAct = 'artikel'
                this.setState({
                    menu: "artikel",
                    header: ['Kategori', 'Judul', 'Gambar', 'Status'],
                    valActiveDefault: false,
                    headerModalAdd: 'Add Artikel',
                    headerModalEdit: 'Edit Artikel',
                    urlAdd: process.env.NEXT_PUBLIC_API_URL + "article",
                    urlEdit: process.env.NEXT_PUBLIC_API_URL + "article",
                    urlDelete: process.env.NEXT_PUBLIC_API_URL + "article",
                    urlSearch: process.env.NEXT_PUBLIC_API_URL + "articles/by",
                    urlPage: process.env.NEXT_PUBLIC_API_URL + "articles/next/" + this.state.page + "/page",
                    urlKirimNotif: process.env.NEXT_PUBLIC_API_URL + "apieksternal/fcm/message/artikel",
                    valActive2: false,
                    valActive3: true,
                    valActive4: false,
                    valActive5: false,
                    valActive6: false,
                    valButton: 'Add Artikel'
                })
            } else if (id == 'button4') {
                valAct = 'doa'
                this.setState({
                    menu: "doa",
                    header: ['Judul', 'Arab', 'Indonesia', 'Sumber', 'Status'],
                    valActiveDefault: false,
                    headerModalAdd: 'Add Doa',
                    headerModalEdit: 'Edit Doa',
                    urlAdd: process.env.NEXT_PUBLIC_API_URL + "doa",
                    urlEdit: process.env.NEXT_PUBLIC_API_URL + "doa",
                    urlDelete: process.env.NEXT_PUBLIC_API_URL + "doa",
                    urlSearch: process.env.NEXT_PUBLIC_API_URL + "doa/by",
                    urlPage: process.env.NEXT_PUBLIC_API_URL + "doa/next/" + this.state.page + "/page",
                    valActive2: false,
                    valActive3: false,
                    valActive4: true,
                    valActive5: false,
                    valActive6: false,
                    valButton: 'Add Doa'
                })
            } else if (id == 'button5') {
                valAct = 'penceramah'
                this.setState({
                    menu: "penceramah",
                    header: ['Nama', 'Alamat', 'No Telp', 'Email', 'Status'],
                    valActiveDefault: false,
                    headerModalAdd: 'Add Penceramah',
                    headerModalEdit: 'Edit Penceramah',
                    urlAdd: process.env.NEXT_PUBLIC_API_URL + "lecturer",
                    urlEdit: process.env.NEXT_PUBLIC_API_URL + "lecturer",
                    urlDelete: process.env.NEXT_PUBLIC_API_URL + "lecturer",
                    urlSearch: process.env.NEXT_PUBLIC_API_URL + "lecturer/by",
                    urlPage: process.env.NEXT_PUBLIC_API_URL + "lecturer/next/" + this.state.page + "/page",
                    valActive2: false,
                    valActive3: false,
                    valActive4: false,
                    valActive5: true,
                    valActive6: false,
                    valActive7: false,
                    valButton: 'Add Penceramah'
                })
            } else if (id == 'button7') {
                valAct = 'kebijakan'
                this.setState({
                    menu: "kebijakan",
                    header: ['Content'],
                    valActiveDefault: false,
                    headerModalAdd: 'Add Kebijakan',
                    headerModalEdit: 'Edit Kebijakan',
                    urlAdd: process.env.NEXT_PUBLIC_API_URL + "privacyPolicies",
                    urlEdit: process.env.NEXT_PUBLIC_API_URL + "privacyPolicies",
                    urlDelete: process.env.NEXT_PUBLIC_API_URL + "privacyPolicies",
                    urlSearch: process.env.NEXT_PUBLIC_API_URL + "privacyPolicies/by",
                    urlPage: process.env.NEXT_PUBLIC_API_URL + "privacyPolicies/next/" + this.state.page + "/page",
                    valActive2: false,
                    valActive3: false,
                    valActive4: false,
                    valActive5: false,
                    valActive6: false,
                    valActive7: true,
                    valActive8: false,
                    valButton: 'Add Kebijakan'
                })
            } else if (id == 'button8') {
                valAct = 'syarat'
                this.setState({
                    menu: "syarat",
                    header: ['Content'],
                    valActiveDefault: false,
                    headerModalAdd: 'Add Syarat',
                    headerModalEdit: 'Edit Syarat',
                    urlAdd: process.env.NEXT_PUBLIC_API_URL + "termconditions",
                    urlEdit: process.env.NEXT_PUBLIC_API_URL + "termconditions",
                    urlDelete: process.env.NEXT_PUBLIC_API_URL + "termconditions",
                    urlSearch: process.env.NEXT_PUBLIC_API_URL + "termconditions/by",
                    urlPage: process.env.NEXT_PUBLIC_API_URL + "termconditions/next/" + this.state.page + "/page",
                    valActive2: false,
                    valActive3: false,
                    valActive4: false,
                    valActive5: false,
                    valActive6: false,
                    valActive7: false,
                    valActive8: true,
                    valButton: 'Add Syarat'
                })
            } else {
                valAct = 'quran'
                this.setState({
                    menu: "quran",
                    header: ['Surah', 'Arab', 'Arti Indo', 'Arti Eng', 'Kategori Surah', 'Jumlah Ayat'],
                    valActiveDefault: false,
                    headerModalAdd: 'Add Quran',
                    headerModalEdit: 'Edit Quran',
                    urlEdit: process.env.NEXT_PUBLIC_API_URL + "quran",
                    urlEditAyat: process.env.NEXT_PUBLIC_API_URL + "quran/ayat",
                    // urlUploadAyat:process.env.NEXT_PUBLIC_API_URL+"quran/file",
                    urlSearch: process.env.NEXT_PUBLIC_API_URL + "quran/by",
                    urlPage: process.env.NEXT_PUBLIC_API_URL + "quran/next/" + this.state.page + "/page",
                    valActive2: false,
                    valActive3: false,
                    valActive4: false,
                    valActive5: false,
                    valActive6: true,
                    valActive7: false,
                    valActive8: false,
                    valButton: 'Add Quran'
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
            valAct = 'kategori'
            this.setState({
                menu: "kategori",
                header: ['Nama', 'Status'],
                valActiveDefault: true,
                headerModalAdd: 'Add Kategori',
                headerModalEdit: 'Edit Kategori',
                dataAll: [],
                dataTemp: [],
                totalData: 0,
                totalDataTemp: 0,
                urlAdd: process.env.NEXT_PUBLIC_API_URL + "category",
                urlEdit: process.env.NEXT_PUBLIC_API_URL + "category",
                urlDelete: process.env.NEXT_PUBLIC_API_URL + "category",
                urlSearch: process.env.NEXT_PUBLIC_API_URL + "categories/by",
                urlPage: process.env.NEXT_PUBLIC_API_URL + "categories/next/" + this.state.page + "/page",
                valActive2: false,
                valActive3: false,
                valActive4: false,
                valActive5: false,
                valActive6: false,
                valButton: 'Add Kategori'
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
                                <h1 className="page-header">Content</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActiveDefault != false ? "panel panel-primary active" : "panel panel-primary"} id="button1" onClick={this.tabKlikDefault.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Kategori</div>
                                    </div>
                                </button>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActive2 != false ? "panel panel-primary active" : "panel panel-primary"} id="button2" onClick={this.tabKlik.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Inspirasi Harian</div>
                                    </div>
                                </button>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActive3 != false ? "panel panel-primary active" : "panel panel-primary"} id="button3" onClick={this.tabKlik.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Artikel</div>
                                    </div>
                                </button>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActive4 != false ? "panel panel-primary active" : "panel panel-primary"} id="button4" onClick={this.tabKlik.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Doa</div>
                                    </div>
                                </button>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActive5 != false ? "panel panel-primary active" : "panel panel-primary"} id="button5" onClick={this.tabKlik.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Penceramah</div>
                                    </div>
                                </button>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActive7 != false ? "panel panel-primary active" : "panel panel-primary"} id="button7" onClick={this.tabKlik.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Kebijakan Privasi</div>
                                    </div>
                                </button>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActive8 != false ? "panel panel-primary active" : "panel panel-primary"} id="button8" onClick={this.tabKlik.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Syarat Ketentuan</div>
                                    </div>
                                </button>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <button className={this.state.valActive6 != false ? "panel panel-primary active" : "panel panel-primary"} id="button6" onClick={this.tabKlik.bind(this)}>
                                    <div className="col-xs-9 text-left">
                                        <div className="huge">Al-Quran</div>
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
                            dataCategories={this.state.dataCategories}
                            total={this.state.totalData}
                            page={this.state.page}
                            nextPage={this.state.nextPage}
                            actAdd={this.handleAddData}
                            actEdit={this.handleEditData}
                            actEditAyat={this.handleEditDataAyat}
                            // actUploadAyat={this.handleUploadAyat}
                            actDelete={this.handleDeleteData}
                            actSearch={this.handleSearchData}
                            actPage={this.handlePageData}
                            actKirimNotifArtikel={this.handleKirimNotifArtikel}
                            actKirimNotifInspirasi={this.handleKirimNotifInspirasi}
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

export default connect(mapStateToProps, mapDispatchToProps)(Content)