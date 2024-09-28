import { Outlet,useLocation,matchPath } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../../utils/Store";

const Layout = () => {

    const location = useLocation();

    const showFooter = !matchPath("/restaurant/:id", location.pathname);


    return (
        <Provider store={store}>
            <Header />
            <Outlet />
            {showFooter && <Footer />}
        </Provider>
    )
}

export default Layout;