import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import ReactModal from "react-modal";
import { Editor } from "@tinymce/tinymce-react";
import parse from "html-react-parser";
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2'

ReactModal.setAppElement("#__next");
let page = 1;
let valFilterMasjid = '';
export default class Tabel extends Component {
    constructor(props) {
        super(props);
        this.photoInput1 = React.createRef(),
            this.photoInput2 = React.createRef(),
            this.photoInput3 = React.createRef(),
            this.photoInput4 = React.createRef(),
            this.fileInput = React.createRef(),
            this.state = {
                modalOpen: false,
                modalOpen2: false,
                modalOpen3: false,
                modalOpen4: false,
                modalOpen6: false,
                modalOpen7: false,
                headerModal: "",
                valAct: "",
                valEdit_0: "",
                valEdit_1: "",
                valEdit_2: "",
                valEdit_3: "",
                valEdit_4: "",
                valEdit_5: "",
                valEdit_6: "",
                valEdit_7: "",
                valEdit_8: "",
                valEdit_9: "",
                valEdit_10: "",
                valEdit_11: "",
                valFile1: null,
                valFileGalery1: null,
                valFileGalery2: null,
                valFileGalery3: null,
                valFileGalery4: null,
                valEditGalery1: '',
                valEditGalery2: '',
                valEditGalery3: '',
                valEditGalery4: '',
                valPay: [],
                valPayId: "",
                valUrl: '',
                valBayar: '',
                valFromDt: '',
                valToDt: '',
                valOrderId: '',
                valMasjid: [],
                valAyat: [],
                valSurahId: '',
                valNoJuz: '',
                valNoAyat: '',
                valArab: '',
                valArtiIndo: '',
                valArtiEng: '',
                valAudio: '',
                valAktifButton: false,
                valMenus: [],
                valRole: '',
                dataMenus: [],
                valIdRole: '',
                valNamaPj: '',
                valNikPj: '',
                valUrlKtpPj: '',
                valUrlSuratMasjid: '',
                valUrlFotoDepan: '',
                valLatMasjid: '',
                valLongMasjid: ''
            };
    }
    handleOpenModalAdd = () => {
        this.setState({
            modalOpen: true,
            headerModal: this.props.headerModalAdd,
            valAct: "Add",
            valMenus: [],
            valEdit_0: "",
            valEdit_1: "",
            valEdit_2: "",
            valEdit_3: "",
            valEdit_4: "",
            valEdit_5: "",
            valEdit_6: "",
            valEdit_7: "",
            valEdit_8: "",
            valEdit_9: "",
            valEdit_10: "",
            valEdit_11: "",
            valFile1: null,
            valFileGalery1: null,
            valFileGalery2: null,
            valFileGalery3: null,
            valFileGalery4: null,
            valEditGalery1: '',
            valEditGalery2: '',
            valEditGalery3: '',
            valEditGalery4: '',
            valPay: [],
            valPayId: "",
            valUrl: '',
            valBayar: '',
            valFromDt: '',
            valToDt: '',
            valOrderId: '',
            valMasjid: [],
            valAyat: [],
            valSurahId: '',
            valNoJuz: '',
            valNoAyat: '',
            valArab: '',
            valArtiIndo: '',
            valArtiEng: '',
            valAudio: '',
            valRole: '',
            dataMenus: [],
            valIdRole: '',
        });
    };

    handleAddData = () => {
        if (this.props.menu == "products") {
            let data1 = this.state.valEdit_1;
            let data2 = this.state.valFile1;
            let data3 = this.state.valEdit_2;
            let data4 = this.state.valEdit_5;
            this.props.actAdd(page, data1, data2, data3, data4);
        } else if (this.props.menu == "kategori") {
            let data1 = this.state.valEdit_1;
            let data2 = this.state.valEdit_2;
            this.props.actAdd(
                page,
                data1,
                data2,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            );
        } else if (this.props.menu == "users") {
            let data1 = this.state.valEdit_1;
            let data2 = this.state.valEdit_2;
            let data3 = this.state.valEdit_3;
            let data4 = this.state.valEdit_4;
            this.props.actAdd(page, data1, data2, data3, data4);
        } else if (this.props.menu == "inspirasi") {
            let data1 = this.state.valEdit_1;
            let data2 = this.state.valEdit_2;
            let data3 = this.state.valFile1;
            let data4 = this.state.valEdit_3;
            let data5 = this.state.valEdit_5;
            let data6 = this.state.valEdit_6;
            this.props.actAdd(
                page,
                data1,
                data2,
                data3,
                data4,
                data5,
                data6,
                null,
                null,
                null,
                null
            );
        } else if (this.props.menu == "artikel") {
            let data1 = this.state.valEdit_1;
            let data2 = this.state.valEdit_2;
            let data3 = this.state.valFile1;
            let data4 = this.state.valEdit_3;
            let data5 = this.state.valEdit_5;
            this.props.actAdd(
                page,
                data1,
                data2,
                data3,
                data4,
                data5,
                "admin hijrah",
                null,
                null,
                null,
                null
            );
        } else if (this.props.menu == "doa") {
            let data1 = this.state.valEdit_1;
            let data2 = this.state.valEdit_2;
            let data3 = this.state.valEdit_3;
            let data4 = this.state.valEdit_4;
            let data5 = this.state.valEdit_5;
            this.props.actAdd(
                page,
                data1,
                data2,
                data3,
                data4,
                data5,
                null,
                null,
                null,
                null,
                null
            );
        } else if (this.props.menu == "penceramah") {
            let data1 = this.state.valEdit_1;
            let data2 = this.state.valEdit_2;
            let data3 = this.state.valEdit_3;
            let data4 = this.state.valFile1;
            let data5 = this.state.valEdit_5;
            let data6 = this.state.valEdit_6;
            let data7 = this.state.valEdit_7;
            let data8 = this.state.valEdit_8;
            let data9 = this.state.valEdit_9;
            let data10 = this.state.valEdit_10;
            let data11 = this.state.valFileGalery1;
            let data12 = this.state.valFileGalery2;
            let data13 = this.state.valFileGalery3;
            let data14 = this.state.valFileGalery4;
            this.props.actAdd(
                page,
                data1,
                data2,
                data3,
                data4,
                data5,
                data6,
                data7,
                data8,
                data9,
                data10,
                data11,
                data12,
                data13,
                data14
            );
        } else if (this.props.menu == "kebijakan") {
            let data1 = this.state.valEdit_1;
            this.props.actAdd(
                page,
                data1,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            );
        } else if (this.props.menu == "syarat") {
            let data1 = this.state.valEdit_1;
            this.props.actAdd(
                page,
                data1,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            );
        } else if (this.props.menu == "role") {
            let namaRole = this.state.valRole;
            let listMenu = this.state.valMenus;
            this.props.actAdd(
                page,
                namaRole,
                listMenu,
                null,
                null
            );
        }
        this.setState({ modalOpen: false });
    };

    handleOpenModalEdit = (el) => {
        this.setState({
            modalOpen: true,
            headerModal: this.props.headerModalEdit,
            valAct: "Edit",
            valEdit_0: "",
            valEdit_1: "",
            valEdit_2: "",
            valEdit_3: "",
            valEdit_4: "",
            valEdit_5: "",
            valEdit_6: "",
            valEdit_7: "",
            valEdit_8: "",
            valEdit_9: "",
            valEdit_10: "",
            valEdit_11: "",
            valFile1: null,
            valFileGalery1: null,
            valFileGalery2: null,
            valFileGalery3: null,
            valFileGalery4: null,
            valEditGalery1: '',
            valEditGalery2: '',
            valEditGalery3: '',
            valEditGalery4: '',
            valPay: [],
            valPayId: "",
            valUrl: '',
            valBayar: '',
            valFromDt: '',
            valToDt: '',
            valOrderId: '',
            valMasjid: [],
            valAyat: [],
            valSurahId: '',
            valNoJuz: '',
            valNoAyat: '',
            valArab: '',
            valArtiIndo: '',
            valArtiEng: '',
            valAudio: '',
        });
        let id = el.target.id;
        if (this.props.menu == "products") {
            this.setState({
                valEdit_0: document.getElementById(id).dataset.id,
                valEdit_1: document.getElementById(id).dataset.judul,
                valEdit_2: document.getElementById(id).dataset.status,
                valEdit_3: document.getElementById(id).dataset.gambar,
                valEdit_5: document.getElementById(id).dataset.idmenu,
            });
        } else if (this.props.menu == "kategori") {
            this.setState({
                valEdit_0: document.getElementById(id).dataset.id,
                valEdit_1: document.getElementById(id).dataset.nama,
                valEdit_2: document.getElementById(id).dataset.status,
            });
        } else if (this.props.menu == "users") {
            this.setState({
                valEdit_0: document.getElementById(id).dataset.id,
                valEdit_1: document.getElementById(id).dataset.nama,
                valEdit_2: document.getElementById(id).dataset.email,
                valEdit_4: document.getElementById(id).dataset.role,
            });
        } else if (this.props.menu == "inspirasi") {
            this.setState({
                valEdit_0: document.getElementById(id).dataset.id,
                valEdit_1: document.getElementById(id).dataset.isi,
                valEdit_2: document.getElementById(id).dataset.sumber,
                valEdit_3: document.getElementById(id).dataset.status,
                valEdit_4: document.getElementById(id).dataset.gambar,
                valEdit_5: document.getElementById(id).dataset.kategori,
                valEdit_6: document.getElementById(id).dataset.arti,
            });
        } else if (this.props.menu == "artikel") {
            this.setState({
                valEdit_0: document.getElementById(id).dataset.id,
                valEdit_1: document.getElementById(id).dataset.judul,
                valEdit_2: document.getElementById(id).dataset.isi,
                valEdit_3: document.getElementById(id).dataset.status,
                valEdit_4: document.getElementById(id).dataset.gambar,
                valEdit_5: document.getElementById(id).dataset.kategori,
            });
        } else if (this.props.menu == "doa") {
            this.setState({
                valEdit_0: document.getElementById(id).dataset.id,
                valEdit_1: document.getElementById(id).dataset.judul,
                valEdit_2: document.getElementById(id).dataset.indo,
                valEdit_3: document.getElementById(id).dataset.arab,
                valEdit_4: document.getElementById(id).dataset.sumber,
                valEdit_5: document.getElementById(id).dataset.status,
            });
        } else if (this.props.menu == "penceramah") {
            this.setState({
                valEdit_0: document.getElementById(id).dataset.id,
                valEdit_1: document.getElementById(id).dataset.nama,
                valEdit_2: document.getElementById(id).dataset.alamat,
                valEdit_3: document.getElementById(id).dataset.deskripsi,
                valEdit_4: document.getElementById(id).dataset.foto,
                valEdit_5: document.getElementById(id).dataset.tgllahir,
                valEdit_6: document.getElementById(id).dataset.telp,
                valEdit_7: document.getElementById(id).dataset.email,
                valEdit_8: document.getElementById(id).dataset.almamater,
                valEdit_9: document.getElementById(id).dataset.sosmed,
                valEdit_10: document.getElementById(id).dataset.status,
                valEditGalery1: document.getElementById(id).dataset.galeri1,
                valEditGalery2: document.getElementById(id).dataset.galeri2,
                valEditGalery3: document.getElementById(id).dataset.galeri3,
                valEditGalery4: document.getElementById(id).dataset.galeri4,
            });
        } else if (this.props.menu == "kebijakan") {
            this.setState({
                valEdit_0: document.getElementById(id).dataset.id,
                valEdit_1: document.getElementById(id).dataset.content,
            });
        } else if (this.props.menu == "syarat") {
            this.setState({
                valEdit_0: document.getElementById(id).dataset.id,
                valEdit_1: document.getElementById(id).dataset.content,
            });
        }else if (this.props.menu == "merchant") {
            this.setState({
                valEdit_0: document.getElementById(id).dataset.namaPj,
                valEdit_1: document.getElementById(id).dataset.content,
            });
        } else {
            this.setState({
                valEdit_0: document.getElementById(id).dataset.id,
                valEdit_1: document.getElementById(id).dataset.surah,
                valEdit_2: document.getElementById(id).dataset.arab,
                valEdit_3: document.getElementById(id).dataset.artiindo,
                valEdit_4: document.getElementById(id).dataset.artieng,
                valEdit_5: document.getElementById(id).dataset.kategorisurah,
                valEdit_6: document.getElementById(id).dataset.jmlhayat,
            });
        }
    };

    handleApproveMasjid = () => {
        if (this.props.menu == "merchant") {
            this.props.actApproveMasjid(
                page,
                this.state.valApprove,
            );
        }
        this.setState({ modalOpen: false });
    };

    handleApproveData = () => {
        if (this.props.menu == "payment") {
            this.props.actApprove(
                page,
                this.state.valApprove,
            );
        }
        this.setState({ modalOpen: false });
    };

    handleRejectData = () => {
        if (this.props.menu == "payment") {
            this.props.actReject(
                page,
                this.state.valReject,
            );
        }
        this.setState({ modalOpen: false });
    };

    handleAdjustData = () => {
        if (this.props.menu == "payment") {
            this.props.actAdjust(
                page,
                this.state.valAdjust,
            );
        }
        this.setState({ modalOpen: false });
    };

    handleCancelData = () => {
        if (this.props.menu == "payment") {
            this.props.actCancel(
                page,
                this.state.valCancel,
            );
        }
        this.setState({ modalOpen: false });
    };

    handleEditData = () => {
        if (this.props.menu == "products") {
            this.props.actEdit(
                page,
                this.state.valEdit_0,
                this.state.valEdit_1,
                this.state.valFile1,
                this.state.valEdit_2,
                this.state.valEdit_5
            );
        } else if (this.props.menu == "kategori") {
            this.props.actEdit(
                page,
                this.state.valEdit_0,
                this.state.valEdit_1,
                this.state.valEdit_2,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            );
        } else if (this.props.menu == "users") {
            this.props.actEdit(
                page,
                this.state.valEdit_0,
                this.state.valEdit_1,
                this.state.valEdit_2,
                this.state.valEdit_3,
                this.state.valEdit_4,
            );
        } else if (this.props.menu == "inspirasi") {
            this.props.actEdit(
                page,
                this.state.valEdit_0,
                this.state.valEdit_1,
                this.state.valEdit_2,
                this.state.valFile1,
                this.state.valEdit_3,
                this.state.valEdit_5,
                this.state.valEdit_6,
                null,
                null,
                null,
                null,
                null
            );
        } else if (this.props.menu == "artikel") {
            this.props.actEdit(
                page,
                this.state.valEdit_0,
                this.state.valEdit_1,
                this.state.valEdit_2,
                this.state.valFile1,
                this.state.valEdit_3,
                this.state.valEdit_5,
                "admin hijrah",
                null,
                null,
                null,
                null
            );
        } else if (this.props.menu == "doa") {
            this.props.actEdit(
                page,
                this.state.valEdit_0,
                this.state.valEdit_1,
                this.state.valEdit_2,
                this.state.valEdit_3,
                this.state.valEdit_4,
                this.state.valEdit_5,
                null,
                null,
                null,
                null,
                null
            );
        } else if (this.props.menu == "penceramah") {
            this.props.actEdit(
                page,
                this.state.valEdit_0,
                this.state.valEdit_1,
                this.state.valEdit_2,
                this.state.valEdit_3,
                this.state.valFile1,
                this.state.valEdit_5,
                this.state.valEdit_6,
                this.state.valEdit_7,
                this.state.valEdit_8,
                this.state.valEdit_9,
                this.state.valEdit_10,
                this.state.valFileGalery1,
                this.state.valFileGalery2,
                this.state.valFileGalery3,
                this.state.valFileGalery4
            );
        } else if (this.props.menu == "kebijakan") {
            this.props.actEdit(
                page,
                this.state.valEdit_0,
                this.state.valEdit_1,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
            );
        } else if (this.props.menu == "syarat") {
            this.props.actEdit(
                page,
                this.state.valEdit_0,
                this.state.valEdit_1,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
            );
        } else if (this.props.menu == "quran") {
            this.props.actEdit(
                page,
                this.state.valEdit_0,
                this.state.valEdit_1,
                this.state.valEdit_2,
                this.state.valEdit_3,
                this.state.valEdit_4,
                this.state.valEdit_5,
                this.state.valEdit_6,
                null,
                null,
                null,
                null
            );
        } else if (this.props.menu == "role") {
            this.props.actEdit(
                page,
                this.state.valIdRole,
                this.state.valRole,
                this.state.valMenus,
                null,
                null
            );
        }
        this.setState({ modalOpen: false });
    };

    handleEditDataAyat = () => {
        this.props.actEditAyat(
            page,
            this.state.valSurahId,
            this.state.valNoJuz,
            this.state.valNoAyat,
            this.state.valArab,
            this.state.valArtiIndo,
            this.state.valArtiEng,
            this.state.valAudio,
        );
        this.setState({ modalOpen4: false });
    }

    // handleUploadAyat = () =>{
    //     this.props.actUploadAyat(
    //         page,
    //         this.state.valSurahId,
    //         this.state.valFileAyat,
    //     );
    //     this.setState({ modalOpen3: false });
    // }

    handleCloseModal = () => {
        this.setState({ modalOpen: false, dataMenus: [] });
    };

    showPassword = (e) => {
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    };

    confirmDelete = (el) => {
        let id = el.target.id;
        let idUser = document.getElementById(id).dataset.id;
        Swal.fire({
            title: 'Hapus',
            text: "Yakin Mau DiHapus?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Hapus',
            cancelButtonText: 'Tidak'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    this.props.actDelete(page, idUser);
                }
            })
    };

    confirmReject = (el) => {
        let id = el.target.id;
        let orderId = document.getElementById(id).dataset.id;
        let paymentId = document.getElementById(id).dataset.pay;
        Swal.fire({
            title: 'Reject',
            text: "Yakin Mau DiReject?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Reject',
            cancelButtonText: 'Tidak'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    this.props.actReject(paymentId, orderId)
                }
            })
    };

    confirmMasjidApprove = (el) => {
        let id = el.target.id;
        let masjidId = document.getElementById(id).dataset.id;
        Swal.fire({
            title: 'Approve',
            text: "Yakin Mau DiApprove?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Approve',
            cancelButtonText: 'Tidak'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    this.props.actApproveMasjid(masjidId)
                }
            })
    };

    confirmApprove = (el) => {
        let id = el.target.id;
        let orderId = document.getElementById(id).dataset.id;
        let paymentId = document.getElementById(id).dataset.pay;
        Swal.fire({
            title: 'Approve',
            text: "Yakin Mau DiApprove?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Approve',
            cancelButtonText: 'Tidak'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    this.props.actApprove(paymentId, orderId)
                }
            })
    };

    confirmDwnld = () => {
        let fromDt = this.state.valFromDt;
        let toDt = this.state.valToDt;
        Swal.fire({
            title: 'Download',
            text: "Yakin Mau DiDownload?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    this.props.actDwnld(fromDt, toDt)
                }
            })
    };

    confirmAdjust = () => {
        let bayar = this.state.valBayar.replace(/[Rp\.\s]/g, "");
        Swal.fire({
            title: 'Ubah',
            text: "Yakin Mau DiUbah?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Ubah',
            cancelButtonText: 'Tidak'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    this.props.actAdjust(
                        this.state.valOrderId, this.state.valPayId, bayar
                    );
                }
            })
    };

    confirmCancel = (el) => {
        let id = el.target.id;
        let codeBooking = document.getElementById(id).dataset.booking;
        Swal.fire({
            title: 'Cancel',
            text: "Yakin Mau DiCancel?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Cancel',
            cancelButtonText: 'Tidak'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    this.props.actCancel(codeBooking)
                }
            })
    };

    handleSearch = (e) => {
        this.props.actSearch(e);
    };

    handleSearchMasjid = (e, status) => {	
        this.props.actSearch(e, status);	
    };	
    handleFilterMasjid(e){	
        valFilterMasjid = e;	
        console.log(valFilterMasjid)	
        this.props.actFilter(valFilterMasjid);	
    };

    handlePageClick = (data) => {
        page = data.selected == 0 ? 1 : data.selected + 1;
        this.props.actPage(page);
    };

    handleFile = () => {
        let elInput = document.getElementById("input_file");
        if (this.fileInput.current != undefined && this.fileInput.current.click != undefined) {
            this.fileInput.current.click();
            if (this.fileInput.current.files[0]) {
                this.setState({ valFile1: this.fileInput.current.files[0] });
                elInput.value = this.fileInput.current.files[0].name;
                document.getElementById("image-preview").style.display = "block";
                let oFReader = new FileReader();
                oFReader.readAsDataURL(this.fileInput.current.files[0]);
                oFReader.onload = function (oFREvent) {
                    document.getElementById("image-preview").src = oFREvent.target.result;
                };
            }
        }
    };

    handleFileGalery1 = () => {
        let elInput = document.getElementById("input_files_1");
        if (this.photoInput1.current != undefined && this.photoInput1.current.click != undefined) {
            this.photoInput1.current.click();
            if (this.photoInput1.current.files[0]) {
                this.setState({ valFileGalery1: this.photoInput1.current.files[0] });
                elInput.value = this.photoInput1.current.files[0].name;
                document.getElementById("image-preview-1").style.display = "block";
                let oFReader = new FileReader();
                oFReader.readAsDataURL(this.photoInput1.current.files[0]);
                oFReader.onload = function (oFREvent) {
                    document.getElementById("image-preview-1").src = oFREvent.target.result;
                }
            }
        }
    };

    handleFileGalery2 = () => {
        let elInput = document.getElementById("input_files_2");
        if (this.photoInput2.current != undefined && this.photoInput2.current.click != undefined) {
            this.photoInput2.current.click();
            if (this.photoInput2.current.files[0]) {
                this.setState({ valFileGalery2: this.photoInput2.current.files[0] });
                elInput.value = this.photoInput2.current.files[0].name;
                document.getElementById("image-preview-2").style.display = "block";
                let oFReader = new FileReader();
                oFReader.readAsDataURL(this.photoInput2.current.files[0]);
                oFReader.onload = function (oFREvent) {
                    document.getElementById("image-preview-2").src = oFREvent.target.result;
                }
            }
        }
    };

    handleFileGalery3 = () => {
        let elInput = document.getElementById("input_files_3");
        if (this.photoInput3.current != undefined && this.photoInput3.current.click != undefined) {
            this.photoInput3.current.click();
            if (this.photoInput3.current.files[0]) {
                this.setState({ valFileGalery3: this.photoInput3.current.files[0] });
                elInput.value = this.photoInput3.current.files[0].name;
                document.getElementById("image-preview-3").style.display = "block";
                let oFReader = new FileReader();
                oFReader.readAsDataURL(this.photoInput3.current.files[0]);
                oFReader.onload = function (oFREvent) {
                    document.getElementById("image-preview-3").src = oFREvent.target.result;
                }
            }
        }
    };

    handleFileGalery4 = () => {
        let elInput = document.getElementById("input_files_4");
        if (this.photoInput4.current != undefined && this.photoInput4.current.click != undefined) {
            this.photoInput4.current.click();
            if (this.photoInput4.current.files[0]) {
                this.setState({ valFileGalery4: this.photoInput4.current.files[0] });
                elInput.value = this.photoInput4.current.files[0].name;
                document.getElementById("image-preview-4").style.display = "block";
                let oFReader = new FileReader();
                oFReader.readAsDataURL(this.photoInput4.current.files[0]);
                oFReader.onload = function (oFREvent) {
                    document.getElementById("image-preview-4").src = oFREvent.target.result;
                }
            }
        }
    };

    // handleFileAyat = () => {
    //     if (this.fileInput.current != undefined && this.fileInput.current.click != undefined) {
    //         this.fileInput.current.click();
    //         if (this.fileInput.current.files[0]) {
    //             this.setState({ valFileAyat: this.fileInput.current.files[0] });
    //         }
    //     }
    // };

    handleIsiInspirasi = (content, editor) => {
        this.setState({ valEdit_1: content });
    };

    handleArtiInspirasi = (content, editor) => {
        this.setState({ valEdit_6: content });
    };

    handleIsiArtikel = (content, editor) => {
        this.setState({ valEdit_2: content });
    };

    handleIsiIndo = (content, editor) => {
        this.setState({ valEdit_2: content });
    };

    handleIsiArab = (content, editor) => {
        this.setState({ valEdit_3: content });
    };

    handleIsiDeskripsi = (content, editor) => {
        this.setState({ valEdit_3: content });
    };

    handleIsiTerm = (content, editor) => {
        this.setState({ valEdit_1: content });
    };

    handleIsiPrivacy = (content, editor) => {
        this.setState({ valEdit_1: content });
    };

    handleNamaArab = (content, editor) => {
        this.setState({ valEdit_2: content });
    };

    handleArtiEnglish = (content, editor) => {
        this.setState({ valEdit_4: content });
    };

    handleAyatArab = (content, editor) => {
        this.setState({ valArab: content });
    };

    handleArtiIndoAyat = (content, editor) => {
        this.setState({ valArtiIndo: content });
    };

    handleArtiEngAyat = (content, editor) => {
        this.setState({ valArtiEng: content });
    };

    handleCovertTgl = (tgl) => {
        let newTgl = new Date(tgl).toISOString().split("T")[0];
        this.setState({ valEdit_5: newTgl });
    };

    handleCovertTglFrom = (tgl) => {
        let newTgl = new Date(tgl).toISOString().split("T")[0];
        this.setState({ valFromDt: newTgl });
    };

    handleCovertTglTo = (tgl) => {
        let newTgl = new Date(tgl).toISOString().split("T")[0];
        this.setState({ valToDt: newTgl });
    };

    handleOpenModalPayment = (el) => {
        let id = el.target.id;
        let dataPayment = JSON.parse(decodeURIComponent(document.getElementById(id).dataset.payment)) != null ? JSON.parse(decodeURIComponent(document.getElementById(id).dataset.payment)) : [];
        this.setState({
            modalOpen: true,
            valPay: dataPayment,
            valOrderId: document.getElementById(id).dataset.id
        });
    };

    handleOpenModalMerchant = (el) => {
        let id = el.target.id;
        let nama = document.getElementById(id).dataset.nama;
        this.setState({
            modalOpen2: true,
            valMasjid: nama,
            valNamaPj: document.getElementById(id).dataset.namapj,
            valNikPj: document.getElementById(id).dataset.nikpj,
            valUrlKtpPj: document.getElementById(id).dataset.urlktp,
            valUrlSurat: document.getElementById(id).dataset.urlsurat,
            valUrlFoto: document.getElementById(id).dataset.urlfoto,
            valLatMasjid: document.getElementById(id).dataset.latmasjid,
            valLongMasjid: document.getElementById(id).dataset.longmasjid,
        });
    };

    handleOpenModalEditPayment = (el) => {
        let id = el.currentTarget.id;
        let indexId = id.split('-')[1];
        let inputId = 'input-' + indexId;
        let closeId = 'closeAdjust-' + indexId;
        let saveId = 'saveAdjust-' + indexId;
        document.getElementById(inputId).removeAttribute('readOnly');
        document.getElementById(inputId).setAttribute('style', 'border:1px solid;width:120px;background:transparent');
        document.getElementById(closeId).setAttribute('style', 'color:#20b2aa;cursor:pointer;marginLeft:5px');
        document.getElementById(saveId).setAttribute('style', 'color:#20b2aa;cursor:pointer;marginLeft:5px');
        document.getElementById(id).setAttribute('style', 'display:none;color:#20b2aa;cursor:pointer');
        this.setState({
            valPayId: document.getElementById(id).dataset.pay,
            valAktifButton: true
        });
    };

    handleOpenModalAyat = (el) => {
        let id = el.target.id;
        let dataAyat = JSON.parse(decodeURIComponent(document.getElementById(id).dataset.ayat)) != null ? JSON.parse(decodeURIComponent(document.getElementById(id).dataset.ayat)) : [];
        this.setState({
            modalOpen3: true,
            valAyat: dataAyat,
            valSurahId: document.getElementById(id).dataset.id
        });
    };

    handleOpenModalEditAyat = (el) => {
        let id = el.target.id;
        this.setState({
            modalOpen4: true,
            valNoJuz: document.getElementById(id).dataset.juz,
            valNoAyat: document.getElementById(id).dataset.ayat,
            valArab: document.getElementById(id).dataset.ayatarab,
            valArtiIndo: document.getElementById(id).dataset.artiindo,
            valArtiEng: document.getElementById(id).dataset.artieng,
            valAudio: document.getElementById(id).dataset.audio,
        });
    };

    handleOpenModalRole = (el) => {
        let id = el.target.id;
        let dataMenus = JSON.parse(decodeURIComponent(document.getElementById(id).dataset.menu)) != null ? JSON.parse(decodeURIComponent(document.getElementById(id).dataset.menu)) : [];
        dataMenus.map((value, index) => {
            this.state.dataMenus.push(Number(value.noMenu));
        })
        this.setState({
            modalOpen: true,
            valMenus: dataMenus,
            valIdRole: document.getElementById(id).dataset.id,
            valRole: document.getElementById(id).dataset.nama,
            valAct: "Edit",
            headerModal: this.props.headerModalEdit
        });
    };

    currencyFormat(num) {
        let newNum = num.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return (
            "Rp " + newNum
        )
    }

    formatDate(tgl) {
        let newTgl = new Date(tgl);
        let day = newTgl.getDate().toString().length == 1 ? "0" + newTgl.getDate() : newTgl.getDate();
        let month = newTgl.getMonth() + 1;
        let year = newTgl.getFullYear();
        return (
            day + "-" + month + "-" + year
        )
    }

    handleCloseModalMerchant = () => {
        this.setState({ modalOpen2: false });
    };

    handleCloseModalAyat = () => {
        this.setState({ modalOpen3: false });
    };

    handleCloseModalEditAyat = () => {
        this.setState({ modalOpen4: false });
    };

    handleCloseModalEditPayment = (el) => {
        let id = el.currentTarget.id;
        let indexId = id.split('-')[1];
        let inputId = 'input-' + indexId;
        let editId = 'adjust-' + indexId;
        let saveId = 'saveAdjust-' + indexId;
        document.getElementById(inputId).setAttribute('readOnly', 'readOnly');
        document.getElementById(inputId).setAttribute('style', 'border:0px;width:120px;background:transparent');
        document.getElementById(editId).setAttribute('style', 'color:#20b2aa;cursor:pointer;marginLeft:5px');
        document.getElementById(saveId).setAttribute('style', 'display:none;color:#20b2aa;cursor:pointer;marginLeft:5px');
        document.getElementById(id).setAttribute('style', 'display:none;color:#20b2aa;cursor:pointer');
        this.setState({ valAktifButton: false });
    };

    handleCheckBoxRole = (e) => {
        let id = e.target.id;
        let index = id.split('-')[1]
        if (document.getElementById(id).checked == true) {
            this.state.valMenus.push({ noMenu: document.getElementById('no_menu-' + index).value, namaMenu: document.getElementById(id).value, urlMenu: document.getElementById('url_menu-' + index).value, iconMenu: document.getElementById('icon_menu-' + index).value })
            this.setState({ dataMenus: [] })
        } else {
            this.state.valMenus.some(menu => { if (menu.namaMenu === document.getElementById(id).value) this.state.valMenus.splice(this.state.valMenus.indexOf(menu), 1) });
            this.setState({ dataMenus: [] })
        }
    }

    notifArtikel = (e) => {
        let id = e.target.id;
        let judul = document.getElementById(id).dataset.judul;
        console.log(judul);
        this.props.actKirimNotifArtikel(page, judul);
    }

    notifInspirasi = (e) => {
        this.props.actKirimNotifInspirasi(page);
    }

    render() {
        let row, form, kategori, form2, form3, menu, preview, role;
        if (this.props.menu == "users") {
            role = this.props.dataRoles.map((value) => {
                return (
                    <option key={value.id} value={value.id}>
                        {value.namaRole}
                    </option>
                );
            });
            row = this.props.data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td key={index + 1} style={{ display: "none" }}>
                            {value.id}
                        </td>
                        <td key={index + 2}>{value.nama}</td>
                        <td key={index + 3}>{value.email}</td>
                        <td key={index + 4}>
                            <a
                                className="table-a"
                                id={`edit-${index}`}
                                data-id={value.id}
                                data-nama={value.nama}
                                data-email={value.email}
                                data-role={value.role}
                                onClick={this.handleOpenModalEdit}
                            >
                                Edit
                    </a>{" "}
                    |{" "}
                            <a
                                className="table-a"
                                id={`delete-${index}`}
                                data-id={value.id}
                                onClick={this.confirmDelete}
                            >
                                Delete
                    </a>
                        </td>
                    </tr>
                );
            });
            form = (
                <div className="Modal-body">
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Nama User"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_1}
                            onChange={(event) => this.setState({ valEdit_1: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Email User"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_2}
                            onChange={(event) => this.setState({ valEdit_2: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="modal-input"
                            id="password"
                            aria-describedby="emailHelp"
                            placeholder="Password"
                            onChange={(event) => this.setState({ valEdit_3: event.target.value })}
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
                        <select
                            className="modal-input"
                            name="role"
                            id="role"
                            defaultValue={this.state.valEdit_4}
                            onChange={(event) => this.setState({ valEdit_4: event.target.value })}
                        >
                            <option value="0">--Pilih Role--</option>
                            {role}
                        </select>
                    </div>
                </div>
            );
        } else if (this.props.menu == "role") {
            row = this.props.data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td key={index + 1} style={{ display: "none" }}>
                            {value.id}
                        </td>
                        <td key={index + 2}>{value.namaRole}</td>
                        <td key={index + 3}>
                            <a
                                className="table-a"
                                id={`edit-${index}`}
                                data-id={value.id}
                                data-nama={value.namaRole}
                                data-menu={encodeURIComponent(
                                    JSON.stringify(value.listMenu)
                                )}
                                onClick={this.handleOpenModalRole}
                            >
                                Edit
                            </a>{" "}
                            |{" "}
                            <a
                                className="table-a"
                                id={`delete-${index}`}
                                data-id={value.id}
                                onClick={this.confirmDelete}
                            >
                                Delete
                            </a>
                        </td>
                    </tr>
                );
            });
            if (this.state.valAct == "Add") {
                menu = this.props.dataMenus.map((value, index) => {
                    return (
                        <div key={index} className="col-sm-5">
                            <label className="checkbox-inline">
                                <input type="hidden" id={`no_menu-${index}`} defaultValue={value.noMenu} />
                                <input type="hidden" id={`url_menu-${index}`} defaultValue={value.urlMenu} />
                                <input type="hidden" id={`icon_menu-${index}`} defaultValue={value.iconMenu} />
                                <input
                                    name={`menu-${index}`}
                                    id={`menu-${index}`}
                                    value={value.namaMenu}
                                    type="checkbox"
                                    onChange={(e) => this.state.valMenus.push({ noMenu: document.getElementById('no_menu-' + index).value, namaMenu: e.target.value, urlMenu: document.getElementById('url_menu-' + index).value, iconMenu: document.getElementById('icon_menu-' + index).value })}
                                />
                                {value.namaMenu}
                            </label>
                        </div>
                    );
                });
            } else {
                menu = this.props.dataMenus.map((value, index) => {
                    return (
                        <div key={index} className="col-sm-5">
                            <label className="checkbox-inline">
                                <input type="hidden" id={`no_menu-${index}`} defaultValue={value.noMenu} />
                                <input type="hidden" id={`url_menu-${index}`} defaultValue={value.urlMenu} />
                                <input type="hidden" id={`icon_menu-${index}`} defaultValue={value.iconMenu} />
                                <input
                                    name={`menu-${index}`}
                                    id={`menu-${index}`}
                                    value={value.namaMenu}
                                    type="checkbox"
                                    onChange={this.handleCheckBoxRole}
                                    defaultChecked={this.state.dataMenus.includes(value.noMenu) == true ? "checked" : ""}
                                />
                                {value.namaMenu}
                            </label>
                        </div>
                    );
                });
            }
            form = (
                <div className="Modal-body">
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Nama Role"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valRole}
                            onChange={(event) => this.setState({ valRole: event.target.value })}
                            autoComplete="false"
                            disabled={this.state.valRole == 'Administrator' ? "disabled" : ""}
                        />
                    </div>
                    <div id="input-role" className="modal-row">
                        <fieldset>
                            <legend>Pilih Menu</legend>
                            {menu}
                        </fieldset>
                    </div>
                </div>
            );
        } else if (this.props.menu == "products") {
            row = this.props.data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td key={index + 1} style={{ display: "none" }}>
                            {value.id}
                        </td>
                        <td key={index + 2}>{value.judul}</td>
                        <td key={index + 3}>
                            <img src={value.gambar} height="20" width="20" />
                        </td>
                        <td key={index + 4}>
                            {value.status == 1 ? "Aktif" : "Tidak Aktif"}
                        </td>
                        <td key={index + 5}>
                            <a
                                className="table-a"
                                id={`edit-${index}`}
                                data-id={value.id}
                                data-judul={value.judul}
                                data-gambar={value.gambar}
                                data-status={value.status}
                                data-idmenu={value.idMenu}
                                onClick={this.handleOpenModalEdit}
                            >
                                Edit
                    </a>{" "}
                    |{" "}
                            <a
                                className="table-a"
                                id={`delete-${index}`}
                                data-id={value.id}
                                onClick={this.confirmDelete}
                            >
                                Delete
                    </a>
                        </td>
                    </tr>
                );
            });
            form = (
                <div className="Modal-body">
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Judul Menu"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_1}
                            onChange={(event) => this.setState({ valEdit_1: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="No Urut Menu"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_5}
                            onChange={(event) => this.setState({ valEdit_5: event.target.value })}
                            autoComplete="false"
                            disabled={this.state.valAct == "Add" ? "" : "disabled"}
                        />
                    </div>
                    <div className="upload-btn-wrapper">
                        <img
                            src={this.state.valAct == "Edit" ? this.state.valEdit_3 : ""}
                            id="image-preview"
                            alt="image preview"
                            style={{
                                display: this.state.valAct == "Edit" ? "block" : "none",
                            }}
                        />
                        <input
                            type="file"
                            className="modal-input"
                            id="source_file"
                            placeholder="Gambar Menu"
                            ref={this.fileInput}
                            onChange={this.handleFile}
                            style={{ opacity: "0%", position: "absolute" }}
                        />
                        <input
                            type="text"
                            className="modal-input"
                            id="input_file"
                            placeholder="Gambar Menu"
                            autoComplete="false"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valFile1}
                        />
                        <a>
                            <i
                                className="fa fa-folder-o fa-fw"
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
                    <div id="input-status" className="modal-row">
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="status"
                                    id="status-aktif"
                                    value="1"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_2: event.target.value })}
                                    checked={this.state.valEdit_2 == "1" ? "checked" : ""}
                                />
                        Aktif
                    </label>
                        </div>
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="status"
                                    id="status-tidak-aktif"
                                    value="2"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_2: event.target.value })}
                                    checked={this.state.valEdit_2 == "2" ? "checked" : ""}
                                />
                        Tidak Aktif
                    </label>
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.menu == "kategori") {
            row = this.props.data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td key={index + 1} style={{ display: "none" }}>
                            {value.id}
                        </td>
                        <td key={index + 2}>{value.nama}</td>
                        <td key={index + 3}>
                            {value.status == 1 ? "Aktif" : "Tidak Aktif"}
                        </td>
                        <td key={index + 4}>
                            <a
                                className="table-a"
                                id={`edit-${index}`}
                                data-id={value.id}
                                data-nama={value.nama}
                                data-status={value.status}
                                onClick={this.handleOpenModalEdit}
                            >
                                Edit
                    </a>{" "}
                    |{" "}
                            <a
                                className="table-a"
                                id={`delete-${index}`}
                                data-id={value.id}
                                onClick={this.confirmDelete}
                            >
                                Delete
                    </a>
                        </td>
                    </tr>
                );
            });
            form = (
                <div className="Modal-body">
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Nama Kategori"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_1}
                            onChange={(event) => this.setState({ valEdit_1: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div id="input-status" className="modal-row">
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="status"
                                    id="status-aktif"
                                    value="1"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_2: event.target.value })}
                                    checked={this.state.valEdit_2 == "1" ? "checked" : ""}
                                />
                        Aktif
                    </label>
                        </div>
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="status"
                                    id="status-tidak-aktif"
                                    value="2"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_2: event.target.value })}
                                    checked={this.state.valEdit_2 == "2" ? "checked" : ""}
                                />
                        Tidak Aktif
                    </label>
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.menu == "inspirasi") {
            row = this.props.data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td key={index + 1} style={{ display: "none" }}>
                            {value.id}
                        </td>
                        <td key={index + 2}>{value.namaKategori}</td>
                        <td key={index + 3} id={`isi_inspirasi_${index}`}>
                            {parse(value.isi)}
                        </td>
                        <td key={index + 4}>{value.sumber}</td>
                        <td key={index + 5}>
                            <img src={value.gambar} height="20" width="20" />
                        </td>
                        <td key={index + 6}>
                            {value.status == 1 ? "Aktif" : "Tidak Aktif"}
                        </td>
                        <td key={index + 7}>
                            <a
                                className="table-a"
                                id={`edit-${index}`}
                                data-id={value.id}
                                data-kategori={value.idKategori}
                                data-isi={value.isi}
                                data-sumber={value.sumber}
                                data-gambar={value.gambar}
                                data-status={value.status}
                                data-arti={value.arti}
                                onClick={this.handleOpenModalEdit}
                            >
                                Edit
                            </a>{" "}
                            |{" "}
                            <a
                                className="table-a"
                                id={`delete-${index}`}
                                data-id={value.id}
                                onClick={this.confirmDelete}
                            >
                                Delete
                            </a>{" "}
                            |{" "}
                            <a
                                className="table-a"
                                id={`notif_artikel-${index}`}
                                onClick={this.notifInspirasi}
                            >
                                Kirim Notif
                            </a>
                        </td>
                    </tr>
                );
            });
            kategori = this.props.dataCategories.map((value) => {
                return (
                    <option key={value.id} value={value.id}>
                        {value.nama}
                    </option>
                );
            });
            form = (
                <div className="Modal-body">
                    <div className="form-group">
                        <select
                            className="modal-input"
                            name="kategori"
                            id="kategori"
                            defaultValue={this.state.valEdit_5}
                            onChange={(event) => this.setState({ valEdit_5: event.target.value })}
                        >
                            <option value="0">--Pilih Kategori--</option>
                            {kategori}
                        </select>
                    </div>
                    <div className="form-group">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="inspirasi"
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valEdit_1 != "" ? this.state.valEdit_1 : "Inspirasi"}
                            onEditorChange={this.handleIsiInspirasi}
                        />
                    </div>
                    <div className="form-group">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="arti_inspirasi"
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valEdit_6 != "" ? this.state.valEdit_6 : "Arti Inspirasi"}
                            onEditorChange={this.handleArtiInspirasi}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Sumber Konten Inspirasi"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_2}
                            onChange={(event) => this.setState({ valEdit_2: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div className="upload-btn-wrapper">
                        <img
                            src={this.state.valAct == "Edit" ? this.state.valEdit_4 : ""}
                            id="image-preview"
                            alt="image preview"
                            style={{
                                display: this.state.valAct == "Edit" ? "block" : "none",
                            }}
                        />
                        <input
                            type="file"
                            className="modal-input"
                            id="source_file"
                            placeholder="Gambar Konten Inspirasi"
                            ref={this.fileInput}
                            onChange={this.handleFile}
                            style={{ opacity: "0%", position: "absolute" }}
                        />
                        <input
                            type="text"
                            className="modal-input"
                            id="input_file"
                            placeholder="Gambar Konten Inspirasi"
                            autoComplete="false"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valFile1}
                        />
                        <a>
                            <i
                                className="fa fa-folder-o fa-fw"
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
                    <div id="input-status" className="modal-row">
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="status"
                                    id="status-aktif"
                                    value="1"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_3: event.target.value })}
                                    checked={this.state.valEdit_3 == "1" ? "checked" : ""}
                                />
                        Aktif
                    </label>
                        </div>
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="status"
                                    id="status-tidak-aktif"
                                    value="2"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_3: event.target.value })}
                                    checked={this.state.valEdit_3 == "2" ? "checked" : ""}
                                />
                        Tidak Aktif
                    </label>
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.menu == "artikel") {
            row = this.props.data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td key={index + 1} style={{ display: "none" }}>
                            {value.id}
                        </td>
                        <td key={index + 2}>{value.namaKategori}</td>
                        <td key={index + 3}>{value.judul}</td>
                        <td key={index + 4}>
                            <img src={value.gambar} height="20" width="20" />
                        </td>
                        <td key={index + 5}>
                            {value.status == 1 ? "Aktif" : "Tidak Aktif"}
                        </td>
                        <td key={index + 6}>
                            <a
                                className="table-a"
                                id={`edit-${index}`}
                                data-id={value.id}
                                data-kategori={value.idKategori}
                                data-judul={value.judul}
                                data-isi={value.isi}
                                data-gambar={value.gambar}
                                data-status={value.status}
                                onClick={this.handleOpenModalEdit}
                            >
                                Edit
                            </a>{" "}
                            |{" "}
                            <a
                                className="table-a"
                                id={`delete-${index}`}
                                data-id={value.id}
                                onClick={this.confirmDelete}
                            >
                                Delete
                            </a>{" "}|{" "}
                            <a
                                className="table-a"
                                id={`notif_artikel-${index}`}
                                data-judul={value.judul}
                                onClick={this.notifArtikel}
                            >
                                Kirim Notif
                            </a>
                        </td>
                    </tr>
                );
            });
            kategori = this.props.dataCategories.map((value) => {
                return (
                    <option key={value.id} value={value.id}>
                        {value.nama}
                    </option>
                );
            });
            form = (
                <div className="Modal-body">
                    <div className="form-group">
                        <select
                            className="modal-input"
                            name="kategori"
                            id="kategori"
                            defaultValue={this.state.valEdit_5}
                            onChange={(event) => this.setState({ valEdit_5: event.target.value })}
                        >
                            <option value="0">--Pilih Kategori--</option>
                            {kategori}
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Judul Artikel"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_1}
                            onChange={(event) => this.setState({ valEdit_1: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="artikel"
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | link image | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                                image_title: true,
                                /* enable automatic uploads of images represented by blob or data URIs*/
                                automatic_uploads: true,
                                /*
                                    URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
                                    images_upload_url: 'postAcceptor.php',
                                    here we add custom filepicker only to Image dialog
                                */
                                file_picker_types: 'image',
                                /* and here's our custom image picker*/
                                file_picker_callback: function (cb, value, meta) {
                                    var input = document.createElement('input');
                                    input.setAttribute('type', 'file');
                                    input.setAttribute('accept', 'image/*');
                                
                                    /*
                                    Note: In modern browsers input[type="file"] is functional without
                                    even adding it to the DOM, but that might not be the case in some older
                                    or quirky browsers like IE, so you might want to add it to the DOM
                                    just in case, and visually hide it. And do not forget do remove it
                                    once you do not need it anymore.
                                    */
                                
                                    input.onchange = function () {
                                    var file = this.files[0];
                                
                                    var reader = new FileReader();
                                    reader.onload = function () {
                                        /*
                                        Note: Now we need to register the blob in TinyMCEs image blob
                                        registry. In the next release this part hopefully won't be
                                        necessary, as we are looking to handle it internally.
                                        */
                                        var id = 'blobid' + (new Date()).getTime();
                                        var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                                        var base64 = reader.result.split(',')[1];
                                        var blobInfo = blobCache.create(id, file, base64);
                                        blobCache.add(blobInfo);
                                
                                        /* call the callback and populate the Title field with the file name */
                                        cb(blobInfo.blobUri(), { title: file.name });
                                    };
                                    reader.readAsDataURL(file);
                                    };
                                
                                    input.click();
                                },
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            value={this.state.valEdit_2 != "" ? this.state.valEdit_2 : "Artikel"}
                            onEditorChange={this.handleIsiArtikel}
                        />
                    </div>
                    <div className="upload-btn-wrapper">
                        <img
                            src={this.state.valAct == "Edit" ? this.state.valEdit_4 : ""}
                            id="image-preview"
                            alt="image preview"
                            style={{
                                display: this.state.valAct == "Edit" ? "block" : "none",
                            }}
                        />
                        <input
                            type="file"
                            className="modal-input"
                            id="source_file"
                            placeholder="Gambar Konten Artikel"
                            ref={this.fileInput}
                            onChange={this.handleFile}
                            style={{ opacity: "0%", position: "absolute" }}
                        />
                        <input
                            type="text"
                            className="modal-input"
                            id="input_file"
                            placeholder="Gambar Konten Artikel"
                            autoComplete="false"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valFile1}
                        />
                        <a>
                            <i
                                className="fa fa-folder-o fa-fw"
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
                    <div id="input-status" className="modal-row">
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="status"
                                    id="status-aktif"
                                    value="1"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_3: event.target.value })}
                                    checked={this.state.valEdit_3 == "1" ? "checked" : ""}
                                />
                        Aktif
                            </label>
                        </div>
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="status"
                                    id="status-tidak-aktif"
                                    value="2"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_3: event.target.value })}
                                    checked={this.state.valEdit_3 == "2" ? "checked" : ""}
                                />
                        Tidak Aktif
                            </label>
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.menu == "doa") {
            row = this.props.data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td key={index + 1} style={{ display: "none" }}>
                            {value.id}
                        </td>
                        <td key={index + 2}>{value.judul}</td>
                        <td key={index + 3}>{parse("" + value.versiArab + "")}</td>
                        <td key={index + 4}>{parse("" + value.versiIndo + "")}</td>
                        <td key={index + 5}>{value.sumber}</td>
                        <td key={index + 6}>
                            {value.status == 1 ? "Aktif" : "Tidak Aktif"}
                        </td>
                        <td key={index + 7}>
                            <a
                                className="table-a"
                                id={`edit-${index}`}
                                data-id={value.id}
                                data-judul={value.judul}
                                data-indo={value.versiIndo}
                                data-arab={value.versiArab}
                                data-sumber={value.sumber}
                                data-status={value.status}
                                onClick={this.handleOpenModalEdit}
                            >
                                Edit
                    </a>{" "}
                    |{" "}
                            <a
                                className="table-a"
                                id={`delete-${index}`}
                                data-id={value.id}
                                onClick={this.confirmDelete}
                            >
                                Delete
                    </a>
                        </td>
                    </tr>
                );
            });
            form = (
                <div className="Modal-body">
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Judul Doa"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_1}
                            onChange={(event) => this.setState({ valEdit_1: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="arab"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valEdit_3 != "" ? this.state.valEdit_3 : "Arab"}
                            onEditorChange={this.handleIsiArab}
                        />
                    </div>
                    <div className="form-group">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="indo"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valEdit_2 != "" ? this.state.valEdit_2 : "Terjemahan"}
                            onEditorChange={this.handleIsiIndo}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Sumber Doa"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_4}
                            onChange={(event) => this.setState({ valEdit_4: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div id="input-status" className="modal-row">
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="status"
                                    id="status-aktif"
                                    value="1"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_5: event.target.value })}
                                    checked={this.state.valEdit_5 == "1" ? "checked" : ""}
                                />
                        Aktif
                    </label>
                        </div>
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="status"
                                    id="status-tidak-aktif"
                                    value="2"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_5: event.target.value })}
                                    checked={this.state.valEdit_5 == "2" ? "checked" : ""}
                                />
                        Tidak Aktif
                    </label>
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.menu == "penceramah") {
            row = this.props.data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td key={index + 1} style={{ display: "none" }}>
                            {value.id}
                        </td>
                        <td key={index + 2}>{value.nama}</td>
                        <td key={index + 3}>{value.alamat}</td>
                        <td key={index + 4}>{value.telp}</td>
                        <td key={index + 5}>{value.email}</td>
                        <td key={index + 6}>
                            {value.status == 1 ? "Aktif" : "Tidak Aktif"}
                        </td>
                        <td key={index + 7}>
                            <a
                                className="table-a"
                                id={`edit-${index}`}
                                data-id={value.id}
                                data-nama={value.nama}
                                data-alamat={value.alamat}
                                data-deskripsi={value.deskripsi}
                                data-foto={value.foto}
                                data-galeri1={value.galeri1}
                                data-galeri2={value.galeri2}
                                data-galeri3={value.galeri3}
                                data-galeri4={value.galeri4}
                                data-tgllahir={value.tglLahir}
                                data-telp={value.telp}
                                data-email={value.email}
                                data-almamater={value.almamater}
                                data-sosmed={value.sosmed}
                                data-status={value.status}
                                onClick={this.handleOpenModalEdit}
                            >
                                Edit
                    </a>{" "}
                    |{" "}
                            <a
                                className="table-a"
                                id={`delete-${index}`}
                                data-id={value.id}
                                onClick={this.confirmDelete}
                            >
                                Delete
                    </a>
                        </td>
                    </tr>
                );
            });
            form = (
                <div className="Modal-body">
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Nama"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_1}
                            onChange={(event) => this.setState({ valEdit_1: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="modal-input"
                            placeholder="Alamat"
                            defaultValue={this.state.valEdit_2}
                            onChange={(event) => this.setState({ valEdit_2: event.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="deskripsi"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valEdit_3 != "" ? this.state.valEdit_3 : "Deskripsi"}
                            onEditorChange={this.handleIsiDeskripsi}
                        />
                    </div>
                    <div className="upload-btn-wrapper">
                        <img
                            src={this.state.valAct == "Edit" ? this.state.valEdit_4 : ""}
                            id="image-preview"
                            alt="image preview"
                            style={{
                                display: this.state.valAct == "Edit" ? "block" : "none",
                            }}
                        />
                        <input
                            type="file"
                            className="modal-input"
                            id="source_file"
                            placeholder="Gambar Penceramah"
                            ref={this.fileInput}
                            onChange={this.handleFile}
                            style={{ opacity: "0%", position: "absolute" }}
                        />
                        <input
                            type="text"
                            className="modal-input"
                            id="input_file"
                            placeholder="Gambar Penceramah"
                            autoComplete="false"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valFile1}
                        />
                        <a>
                            <i
                                className="fa fa-folder-o fa-fw"
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
                    <div className="upload-btn-wrapper">
                        <img
                            src={this.state.valAct == "Edit" ? this.state.valEditGalery1 : ""}
                            id="image-preview-1"
                            alt="image preview"
                            style={{
                                display: this.state.valAct == "Edit" ? "block" : "none",
                                width: '30px',
                                height: '30px',
                                marginLeft: '12px'
                            }}
                        />
                        <input
                            type="file"
                            className="modal-input"
                            id="source_files_1"
                            placeholder="Galeri Penceramah 1"
                            ref={this.photoInput1}
                            onChange={this.handleFileGalery1}
                            style={{ opacity: "0%", position: "absolute" }}
                        />
                        <input
                            type="text"
                            className="modal-input"
                            id="input_files_1"
                            placeholder="Galeri Penceramah 1"
                            autoComplete="false"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valFileGalery1}
                        />
                        <a>
                            <i
                                className="fa fa-folder-o fa-fw"
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
                    <div className="upload-btn-wrapper">
                        <img
                            src={this.state.valAct == "Edit" ? this.state.valEditGalery2 : ""}
                            id="image-preview-2"
                            alt="image preview"
                            style={{
                                display: this.state.valAct == "Edit" ? "block" : "none",
                                width: '30px',
                                height: '30px',
                                marginLeft: '12px'
                            }}
                        />
                        <input
                            type="file"
                            className="modal-input"
                            id="source_files_2"
                            placeholder="Galeri Penceramah 2"
                            ref={this.photoInput2}
                            onChange={this.handleFileGalery2}
                            style={{ opacity: "0%", position: "absolute" }}
                        />
                        <input
                            type="text"
                            className="modal-input"
                            id="input_files_2"
                            placeholder="Galeri Penceramah 2"
                            autoComplete="false"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valFileGalery2}
                        />
                        <a>
                            <i
                                className="fa fa-folder-o fa-fw"
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
                    <div className="upload-btn-wrapper">
                        <img
                            src={this.state.valAct == "Edit" ? this.state.valEditGalery3 : ""}
                            id="image-preview-3"
                            alt="image preview"
                            style={{
                                display: this.state.valAct == "Edit" ? "block" : "none",
                                width: '30px',
                                height: '30px',
                                marginLeft: '12px'
                            }}
                        />
                        <input
                            type="file"
                            className="modal-input"
                            id="source_files_3"
                            placeholder="Galeri Penceramah 3"
                            ref={this.photoInput3}
                            onChange={this.handleFileGalery3}
                            style={{ opacity: "0%", position: "absolute" }}
                        />
                        <input
                            type="text"
                            className="modal-input"
                            id="input_files_3"
                            placeholder="Galeri Penceramah 3"
                            autoComplete="false"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valFileGalery3}
                        />
                        <a>
                            <i
                                className="fa fa-folder-o fa-fw"
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
                    <div className="upload-btn-wrapper">
                        <img
                            src={this.state.valAct == "Edit" ? this.state.valEditGalery4 : ""}
                            id="image-preview-4"
                            alt="image preview"
                            style={{
                                display: this.state.valAct == "Edit" ? "block" : "none",
                                width: '30px',
                                height: '30px',
                                marginLeft: '12px'
                            }}
                        />
                        <input
                            type="file"
                            className="modal-input"
                            id="source_files_4"
                            placeholder="Galeri Penceramah 4"
                            ref={this.photoInput4}
                            onChange={this.handleFileGalery4}
                            style={{ opacity: "0%", position: "absolute" }}
                        />
                        <input
                            type="text"
                            className="modal-input"
                            id="input_files_4"
                            placeholder="Galeri Penceramah 4"
                            autoComplete="false"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valFileGalery4}
                        />
                        <a>
                            <i
                                className="fa fa-folder-o fa-fw"
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
                        <DatePicker
                            dateFormat="yyyy-MM-dd"
                            selected={
                                this.state.valEdit_5 != ""
                                    ? new Date(this.state.valEdit_5)
                                    : new Date()
                            }
                            onChange={(date) => this.handleCovertTgl(date)}
                            className="modal-input-textarea"
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="No Telp"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_6}
                            onChange={(event) => this.setState({ valEdit_6: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_7}
                            onChange={(event) => this.setState({ valEdit_7: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Almamater"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_8}
                            onChange={(event) => this.setState({ valEdit_8: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Sosmed"
                            defaultValue={this.state.valAct == "Add" ? "" : this.state.valEdit_9}
                            onChange={(event) => this.setState({ valEdit_9: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div id="input-status" className="modal-row">
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="status"
                                    id="status-aktif"
                                    value="1"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_10: event.target.value })}
                                    checked={this.state.valEdit_10 == "1" ? "checked" : ""}
                                />
                        Aktif
                    </label>
                        </div>
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="status"
                                    id="status-tidak-aktif"
                                    value="2"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_10: event.target.value })}
                                    checked={this.state.valEdit_10 == "2" ? "checked" : ""}
                                />
                        Tidak Aktif
                    </label>
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.menu == "payment") {
            row = this.props.data.map((value, index) => {
                if (value.status != 0 && value.isCancel != 1) {
                    return (
                        <tr key={index}>
                            <td key={index + 1} style={{ display: "none" }}>
                                {value.id}
                            </td>
                            <td key={index + 2}>{value.nama}</td>
                            <td key={index + 3}>{value.codeBooking}</td>
                            <td key={index + 4}>{value.harga != null ? this.currencyFormat(value.harga) : '0'}</td>
                            <td key={index + 5}>{
                                value.isCancel == 1 ?
                                    "Canceled"
                                    : value.status == 0 ?
                                        "Lunas"
                                        : value.status == 1 ?
                                            "Menunggu Verifikasi"
                                            : value.status == 2 ?
                                                "Menunggu Pembayaran Ke 2"
                                                : value.status == 3 ?
                                                    "Menunggu Pembayaran Ke 3"
                                                    : value.status == 4 ?
                                                        "Jatuh Tempo"
                                                        : "Ditolak"
                            }</td>
                            <td key={index + 6}>
                                <a
                                    className="table-a"
                                    id={`detil-${index}`}
                                    data-id={value.id}
                                    data-nama={value.nama}
                                    data-tanggal={value.tanggal}
                                    data-codebooking={value.codeBooking}
                                    data-harga={value.harga}
                                    data-payment={encodeURIComponent(
                                        JSON.stringify(value.listPayment)
                                    )}
                                    onClick={this.handleOpenModalPayment}
                                >
                                    Detail
                                </a>{" "}
                                |{" "}
                                <a
                                    className="table-a"
                                    id={`cancel-${index}`}
                                    data-iscancel={value.isCancel}
                                    data-booking={value.codeBooking}
                                    onClick={this.confirmCancel}
                                >
                                    Cancel
                                </a>
                            </td>
                        </tr>
                    );
                } else {
                    return (
                        <tr key={index}>
                            <td key={index + 1} style={{ display: "none" }}>
                                {value.id}
                            </td>
                            <td key={index + 2}>{value.nama}</td>
                            <td key={index + 3}>{value.codeBooking}</td>
                            <td key={index + 4}>{value.harga != null ? this.currencyFormat(value.harga) : '0'}</td>
                            <td key={index + 5}>{
                                value.isCancel == 1 ?
                                    "Canceled"
                                    : value.status == 0 ?
                                        "Lunas"
                                        : value.status == 1 ?
                                            "Menunggu Verifikasi"
                                            : value.status == 2 ?
                                                "Menunggu Pembayaran Ke 2"
                                                : value.status == 3 ?
                                                    "Menunggu Pembayaran Ke 3"
                                                    : value.status == 4 ?
                                                        "Jatuh Tempo"
                                                        : "Ditolak"
                            }</td>
                            <td key={index + 6}>
                                <a
                                    className="table-a"
                                    id={`detil-${index}`}
                                    data-id={value.id}
                                    data-nama={value.nama}
                                    data-tanggal={value.tanggal}
                                    data-codebooking={value.codeBooking}
                                    data-harga={value.harga}
                                    data-payment={encodeURIComponent(
                                        JSON.stringify(value.listPayment)
                                    )}
                                    onClick={this.handleOpenModalPayment}
                                >
                                    Detail
                                </a>
                            </td>
                        </tr>
                    );
                }

            });

            form = (
                <table>
                    <thead>
                        <tr>
                            <th>Tanggal</th>
                            <th>Jumlah Tagihan</th>
                            <th>Tanggal Bayar</th>
                            <th>Bukti Bayar</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.valPay.map((value, index) => {
                            if (value.status == 0) {
                                return (
                                    <tr key={index}>
                                        <td key={index + 1} style={{ display: "none" }}>
                                            {value.paymentId}
                                        </td>
                                        <td key={index + 2}>{this.formatDate(value.due_date)}</td>
                                        <td key={index + 3}>{this.currencyFormat(value.billed)}</td>

                                        <td key={index + 4}>
                                            {this.formatDate(value.paymentDate.split(" ")[0] != null
                                                ? value.paymentDate.split(" ")[0]
                                                : value.paymentDate)}
                                        </td>
                                        <td key={index + 5}>
                                            <img src={value.urlBuktiBayar} height="70" width="70" style={{ cursor: "pointer" }} className="zoom" />
                                        </td>
                                        <td key={index + 6}>
                                            {value.status == 0
                                                ? "Lunas"
                                                : value.status == 1
                                                    ? "Menunggu Verifikasi"
                                                    : value.description}
                                        </td>
                                        <td key={index + 7}>
                                            <b>Approved</b>
                                        </td>
                                    </tr>
                                )
                            }
                            return (
                                <tr key={index}>
                                    <td key={index + 1} style={{ display: "none" }}>
                                        {value.paymentId}
                                    </td>
                                    <td key={index + 2}>{this.formatDate(value.due_date)}</td>
                                    <td key={index + 3}><input type="input" style={{ border: "0", width: "120px", background: "transparent" }} defaultValue={this.currencyFormat(value.billed)} onChange={(event) => this.setState({ valBayar: event.target.value })} readOnly="readOnly" id={`input-${index}`} /><a id={`adjust-${index}`} data-id={this.state.valOrderId} data-pay={value.paymentId} onClick={this.handleOpenModalEditPayment} style={{ color: "#20b2aa", cursor: "pointer" }}><i className='fa fa-edit'></i></a><a id={`saveAdjust-${index}`} onClick={this.confirmAdjust} style={{ display: "none", color: "#20b2aa", cursor: "pointer", marginLeft: "5px" }}><i className='fa fa-check'></i></a><a id={`closeAdjust-${index}`} onClick={this.handleCloseModalEditPayment} style={{ display: "none", color: "#20b2aa", cursor: "pointer", marginLeft: "5px" }}><i className='fa fa-close'></i></a></td>
                                    <td key={index + 4}>Belum Bayar</td>
                                    <td key={index + 5}>
                                        <img src={value.urlBuktiBayar} height="70" width="70" style={{ cursor: "pointer" }} className="zoom" />
                                    </td>
                                    <td key={index + 6}>
                                        {value.status == 0
                                            ? "Lunas"
                                            : value.status == 1
                                                ? "Menunggu Verifikasi"
                                                : value.description}
                                    </td>
                                    <td key={index + 7}>
                                        <a
                                            className="table-a"
                                            id={`approve-${index}`}
                                            data-id={this.state.valOrderId}
                                            data-pay={value.paymentId}
                                            onClick={this.confirmApprove}>Approve</a> |{" "}
                                        <a
                                            className="table-a"
                                            id={`reject-${index}`}
                                            data-id={this.state.valOrderId}
                                            data-pay={value.paymentId}
                                            onClick={this.confirmReject}>Reject</a>
                                    </td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>
            );
            form2 = (
                <div className="Modal-body">
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="bayar"
                            placeholder="Nominal"
                            defaultValue={this.state.valBayar}
                            onChange={(event) => this.setState({ valBayar: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                </div>
            );

            preview = (
                <img src={this.state.valUrl} height="90%" width="70%" />
            )
        } else if (this.props.menu == "generate") {
            return (
                form = (
                    <table>
                        <thead>
                            <tr>
                                <th>Dari Tanggal</th>
                                <th>Tanggal Akhir</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <DatePicker
                                        dateFormat="yyyy-MM-dd"
                                        selected={
                                            this.state.valFromDt != ""
                                                ? new Date(this.state.valFromDt)
                                                : new Date()
                                        }
                                        onChange={(date) => this.handleCovertTglFrom(date)}
                                        className="modal-input-date"
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                    />
                                </td>
                                <td>
                                    <DatePicker
                                        dateFormat="yyyy-MM-dd"
                                        selected={
                                            this.state.valToDt != ""
                                                ? new Date(this.state.valToDt)
                                                : new Date()
                                        }
                                        onChange={(date) => this.handleCovertTglTo(date)}
                                        className="modal-input-date"
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                    />
                                </td>
                                <td >
                                    <a className="table-a"
                                        id={`dwnld`}
                                        data-from={this.state.fromDt}
                                        data-to={this.state.toDt}
                                        onClick={this.confirmDwnld}
                                    >
                                        Download
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )
            )
        }else if (this.props.menu == "merchant") {
            row = this.props.data.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td key={index + 1} style={{ display: "none" }}>
                                {value.id}
                            </td>
                            <td key={index + 2}>{value.nama}</td>
                            <td key={index + 3}>{value.alamat}</td>
                            <td key={index + 4}>{value.status}</td>
                            <td key={index + 6}>
                                <a
                                className="table-a"
                                id={`detil-${index}`}
                                data-id={value.id}
                                data-nama={value.nama}
                                data-alamat={value.alamat}
                                data-namapj={value.namaPj}
                                data-nikpj={value.nikPj}
                                data-urlktp={value.urlKTP}
                                data-urlsurat={value.urlSurat}
                                data-urlfoto={value.urlFoto}
                                data-latmasjid={value.latMasjid}
                                data-longmasjid={value.longMasjid}
                                onClick={this.handleOpenModalMerchant}
                                >Detail</a>{" | "}
                                <a
                                className="table-a"
                                id={`approve-${index}`}
                                data-id={value.id}
                                onClick={this.confirmMasjidApprove}
                                >
                                Approve
                                </a>
                            </td>
                        </tr>
                    );
            });

            form = (
                <table>
                    <thead>
                        <tr>
                            <th>Nama PJ</th>
                            <th>NIK PJ</th>
                            <th>KTP PJ</th>
                            <th>Surat Masjid</th>
                            <th>Foto Depan</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.valNamaPj}</td>
                            <td>{this.state.valNikPj}</td>
                            <td>{this.state.valUrlKtpPj}</td>
                            <td>{this.state.valUrlSuratMasjid}</td>
                            <td>{this.state.valUrlFotoDepan}</td>
                            <td>{this.state.valLatMasjid}</td>
                            <td>{this.state.valLongMasjid}</td>
                        </tr>
                    </tbody>
                </table>
            );

            preview = (
                <img src={this.state.valUrl} height="90%" width="70%" />
            )
        }  else if (this.props.menu == "kebijakan") {
            row = this.props.data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td key={index + 1} style={{ display: "none" }}>
                            {value.id}
                        </td>
                        <td key={index + 2}>{parse("" + value.isi + "")}</td>
                        <td key={index + 3}>
                            <a
                                className="table-a"
                                id={`edit-${index}`}
                                data-id={value.id}
                                data-content={value.isi}
                                onClick={this.handleOpenModalEdit}
                            >
                                Edit
                    </a>{" "}
                    |{" "}
                            <a
                                className="table-a"
                                id={`delete-${index}`}
                                data-id={value.id}
                                onClick={this.confirmDelete}
                            >
                                Delete
                    </a>
                        </td>
                    </tr>
                );
            });
            form = (
                <div className="Modal-body">
                    <div className="form-group">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="Content"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valEdit_1 != "" ? this.state.valEdit_1 : "Kebijakan Privasi"}
                            onEditorChange={this.handleIsiPrivacy}
                        />
                    </div>
                </div>
            );
        } else if (this.props.menu == "syarat") {
            row = this.props.data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td key={index + 1} style={{ display: "none" }}>
                            {value.id}
                        </td>
                        <td key={index + 2}>{parse("" + value.isi + "")}</td>
                        <td key={index + 3}>
                            <a
                                className="table-a"
                                id={`edit-${index}`}
                                data-id={value.id}
                                data-content={value.isi}
                                onClick={this.handleOpenModalEdit}
                            >
                                Edit
                    </a>{" "}
                    |{" "}
                            <a
                                className="table-a"
                                id={`delete-${index}`}
                                data-id={value.id}
                                onClick={this.confirmDelete}
                            >
                                Delete
                    </a>
                        </td>
                    </tr>
                );
            });
            form = (
                <div className="Modal-body">
                    <div className="form-group">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="Content"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valEdit_1 != "" ? this.state.valEdit_1 : "Syarat Ketentuan"}
                            onEditorChange={this.handleIsiTerm}
                        />
                    </div>
                </div>
            );
        } else if (this.props.menu == "quran") {
            row = this.props.data.map((value, index) => {
                return (
                    <tr key={index}>
                        <td key={index + 1} style={{ display: "none" }}>
                            {value.id}
                        </td>
                        <td key={index + 2}>{value.surah}</td>
                        <td key={index + 3}>{parse("" + value.arab + "")}</td>
                        <td key={index + 4}>{parse("" + value.artiIndo + "")}</td>
                        <td key={index + 5}>{parse("" + value.artiEng + "")}</td>
                        <td key={index + 6}>{value.kategoriSurah}</td>
                        <td key={index + 7}>{value.jmlhAyat}</td>
                        <td style={{ textAlign: "center" }} key={index + 8}>
                            <a
                                className="table-a"
                                id={`detil-${index}`}
                                data-id={value.id}
                                data-ayat={encodeURIComponent(
                                    JSON.stringify(value.dataAyat)
                                )}
                                onClick={this.handleOpenModalAyat}
                            >
                                Detail Ayat
                            </a>{" "}
                            |{" "}
                            <a
                                className="table-a"
                                id={`edit-${index}`}
                                data-id={value.id}
                                data-surah={value.surah}
                                data-arab={value.arab}
                                data-artiindo={value.artiIndo}
                                data-artieng={value.artiEng}
                                data-kategorisurah={value.kategoriSurah}
                                data-jmlhayat={value.jmlhAyat}
                                onClick={this.handleOpenModalEdit}
                            >
                                Edit
                            </a>
                        </td>
                    </tr>
                );
            });
            form = (
                <div className="Modal-body">
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Nama Surah"
                            defaultValue={this.state.valEdit_1}
                            onChange={(event) => this.setState({ valEdit_1: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="arab"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valEdit_2 != "" ? this.state.valEdit_2 : "Nama Arab"}
                            onEditorChange={this.handleNamaArab}
                        />
                    </div>
                    <div className="form-group">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="arti_indo"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valEdit_3 != "" ? this.state.valEdit_3 : "Arti Indonesia"}
                            onEditorChange={this.handleIsiDeskripsi}
                        />
                    </div>
                    <div className="upload-btn-wrapper">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="arti_eng"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valEdit_4 != "" ? this.state.valEdit_4 : "Arti English"}
                            onEditorChange={this.handleArtiEnglish}
                        />
                    </div>
                    <div id="input-status" className="modal-row">
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="kategori_surah"
                                    id="makkiyah"
                                    value="Makkiyah"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_5: event.target.value })}
                                    checked={this.state.valEdit_5 == "Makkiyah" ? "checked" : ""}
                                />
                        Makkiyah
                            </label>
                        </div>
                        <div className="col-sm-5">
                            <label className="radio-inline">
                                <input
                                    name="kategori_surah"
                                    id="madaniyah"
                                    value="Madaniyah"
                                    type="radio"
                                    onChange={(event) => this.setState({ valEdit_5: event.target.value })}
                                    checked={this.state.valEdit_5 == "Madaniyah" ? "checked" : ""}
                                />
                        Madaniyah
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="Jumlah Ayat"
                            defaultValue={this.state.valEdit_6}
                            onChange={(event) => this.setState({ valEdit_6: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                </div>
            );
            form2 = (
                <table>
                    <thead>
                        <tr>
                            <th>Juz</th>
                            <th>Ayat</th>
                            <th>Arab</th>
                            <th>Indo</th>
                            <th>Eng</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.valAyat.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td key={index + 1} style={{ display: "none" }}>
                                        {this.state.valSurahId}
                                    </td>
                                    <td key={index + 2}>{value.noJuz}</td>
                                    <td key={index + 3}>{value.noAyat}</td>
                                    <td key={index + 4}>{parse(value.ayatArab)}</td>
                                    <td key={index + 5}>{parse(value.artiIndoAyat)}</td>
                                    <td key={index + 6}>{parse(value.artiEngAyat)}</td>
                                    <td key={index + 7}>
                                        <a className="table-a"
                                            id={`edit_ayat-${index}`}
                                            data-juz={value.noJuz}
                                            data-ayat={value.noAyat}
                                            data-ayatarab={value.ayatArab}
                                            data-artiindo={value.artiIndoAyat}
                                            data-artieng={value.artiEngAyat}
                                            data-audio={value.audio}
                                            onClick={this.handleOpenModalEditAyat}>
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            );
            form3 = (
                <div className="Modal-body">
                    <div className="form-group">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="ayat_arab"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valArab != "" ? this.state.valArab : "Ayat Arab"}
                            onEditorChange={this.handleAyatArab}
                        />
                    </div>
                    <div className="upload-btn-wrapper">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="arti_indo"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valArtiIndo != "" ? this.state.valArtiIndo : "Terjemahan Indonesia"}
                            onEditorChange={this.handleArtiIndoAyat}
                        />
                    </div>
                    <div className="upload-btn-wrapper">
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY}
                            initialValue=""
                            id="arti_eng"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen visualchars",
                                    "insertdatetime media table paste code help wordcount directionality emoticons",
                                ],
                                toolbar:
                                    "undo redo | formatselect | bold italic backcolor link | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist | outdent indent| table media code anchor emoticons directionality visualchars | preview | removeformat | help",
                            }}
                            value={this.state.valArtiEng != "" ? this.state.valArtiEng : "Translate"}
                            onEditorChange={this.handleArtiEngAyat}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="modal-input"
                            aria-describedby="emailHelp"
                            placeholder="audio"
                            defaultValue={this.state.valAudio}
                            onChange={(event) => this.setState({ valAudio: event.target.value })}
                            autoComplete="false"
                        />
                    </div>
                </div>
            );
        } else {
            row = <tr></tr>;
        }
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ fontSize: "12px", color: "#20b2aa" }}>
                                        {this.props.nextPage} to{" "}
                                        {Math.ceil(this.props.total / this.props.page)} of{" "}
                                        {this.props.total}
                                    </th>
                                </tr>
                            </thead>
                        </table>
                        <div className="panel panel-default">
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{ fontSize: "16px" }}>
                                                {this.props.nama.split(" ")[1] != null
                                                    ? this.props.nama.split(" ")[1]
                                                    : this.props.nama}
                                            </th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th>
                                                <button
                                                    className="button"
                                                    style={{
                                                        display:
                                                            this.props.tombol == "ok" && this.props.menu != "quran" ? "block" : "none",
                                                    }}
                                                    onClick={this.handleOpenModalAdd}
                                                >
                                                    {this.props.nama}
                                                </button>
                                                <input
                                                    type="text"
                                                    className="search"
                                                    placeholder=" Search.."
                                                    onChange={(e) => this.handleSearchMasjid(e.target.value,valFilterMasjid)}
                                                />
                                                <i
                                                    className="fa fa-search fa-fw"
                                                    style={{
                                                        float: "right",
                                                        marginTop: "9px",
                                                        color: "#20b2aa",
                                                        paddingLeft: "20px",
                                                    }}
                                                >
                                                </i>
                                                <select
                                                    className="modal-input"
                                                    style={{
                                                        display:
                                                            this.props.filter == "on" ? "block" : "none",
                                                        float:
                                                            "right",
                                                        width:
                                                            "25%"
                                                    }}
                                                    name="verifikasi"
                                                    id="verifikasi"
                                                    onChange={(e) => this.handleFilterMasjid(e.target.value)}
                                                >
                                                    <option value="">--Status Verifikasi--</option>                                             
                                                    <option value="0">Belum Verifikasi</option>
                                                    <option value="1">Sudah Verifikasi</option>
                                                </select>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{ display: "none" }}>id</th>
                                            {this.props.header.map((value, index) => {
                                                return <th key={index}>{value}</th>;
                                            })}
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>{row}</tbody>
                                </table>
                            </div>
                        </div>
                        <div className="center">
                            <div>
                                <ReactPaginate
                                    previousLabel={"<"}
                                    nextLabel={">"}
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={Math.ceil(this.props.total / this.props.page)}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={this.handlePageClick}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <ReactModal
                    isOpen={this.state.modalOpen}
                    contentLabel="Minimal Modal Example"
                    // onRequestClose={this.handleCloseModal}
                    className={
                        this.props.menu == "inspirasi" ||
                            this.props.menu == "artikel" ||
                            this.props.menu == "doa" ||
                            this.props.menu == "penceramah" ||
                            this.props.menu == "kebijakan" ||
                            this.props.menu == "penceramah"
                            ? "Modal_big"
                            : "Modal"
                    }>
                    <div className="Modal-content">
                        <div className="Modal-header">
                            <a onClick={this.handleCloseModal}>
                                <span className="close">&times;</span>
                            </a>
                            <h2>{this.state.headerModal}</h2>
                        </div>
                        {form}
                        <div
                            className="Modal-footer"
                            style={{
                                display: this.props.menu == "payment" ? "none" : "block",
                            }}
                        >
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={
                                    this.state.valAct == "Add"
                                        ? this.handleAddData
                                        : this.handleEditData
                                }
                            >
                                {this.state.valAct == "Add" ? "Save" : "Edit"}
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={this.handleCloseModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </ReactModal>

                <ReactModal
                    isOpen={this.state.modalOpen2}
                    contentLabel="Minimal Modal Example"
                    // onRequestClose={this.handleCloseModal}
                    className="Modal_big"
                >
                    <div className="Modal-content">
                        <div className="Modal-header">
                            <a onClick={this.handleCloseModalMerchant}>
                                <span className="close">&times;</span>
                            </a>
                            <h2>Detail Masjid</h2>
                        </div>
                        {form}
                    </div>
                </ReactModal>

                <ReactModal
                    isOpen={this.state.modalOpen3}
                    contentLabel="Minimal Modal Example"
                    // onRequestClose={this.handleCloseModal}
                    className="Modal_big"
                >
                    <div className="Modal-content">
                        <div className="Modal-header">
                            <a onClick={this.handleCloseModalAyat}>
                                <span className="close">&times;</span>
                            </a>
                            <h2>List Ayat</h2>
                            {/*<button type="button" className="btn btn-primary" style={{float:"right",display:this.props.menu == 'quran' ? "block" : "none"}} onClick={this.handleUploadAyat}>Upload</button><input type="file" name="file" id="file" ref={this.fileInput} onChange={this.handleFileAyat} style={{float:"right",display: this.props.menu == 'quran' ? "block" : "none"}}/>*/}
                        </div>
                        {form2}
                    </div>
                </ReactModal>

                <ReactModal
                    isOpen={this.state.modalOpen4}
                    contentLabel="Minimal Modal Example"
                    // onRequestClose={this.handleCloseModal}
                    className="Modal_big"
                >
                    <div className="Modal-content">
                        <div className="Modal-header">
                            <a onClick={this.handleCloseModalEditAyat}>
                                <span className="close">&times;</span>
                            </a>
                            <h2>{this.state.headerModal}</h2>
                        </div>
                        {form3}
                        <div className="Modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.handleEditDataAyat}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={this.handleCloseModalEditAyat}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </ReactModal>

            </div>
        );
    }
}
