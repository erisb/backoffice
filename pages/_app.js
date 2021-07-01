import { wrapper } from "../redux/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import '../styles/bootstrap.min.css'
import '../styles/style.css'
import '../styles/font-awesome.min.css'
import "react-datepicker/dist/react-datepicker.css";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);