import Head from "next/head";

export default function LayoutLogin(props) {
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
      <div className="container">
        {props.children}
        <script src="../js/bootstrap.min.js"></script>
      </div>
      <footer>
      </footer>
    </div>
  );
}