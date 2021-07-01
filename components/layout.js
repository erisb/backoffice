import Head from "next/head";
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const klik=(e)=>{
    // e.preventDefault()
    if (!e.target.matches('.dropdown-toggle')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
}

export default function Layout(props) {
    return (
      <div>
        <Head>
          <title>Back Office - Hijrah Nuswantara</title>
          <link rel="icon" href="../images/favicon.ico" type="image/x-icon"></link>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/*if lt IE 9*/}
          {/*script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
          {/*endif*/}
        </Head>
        <div className="wrapper" onClick={klik}>
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
          </nav>
          <div id="page-wrapper">
              {props.children}
          </div>
          <script src="../js/bootstrap.min.js"></script>
        </div>
        <footer>
        </footer>
      </div>
    );
}