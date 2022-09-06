import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
};
const btn = {
    display: 'block',
    margin: '20px auto',
}


const Layout = () => {
    const {text: {idText}, image: {idImg}} = useSelector(state => state);

    return (
        <div style={wrapper}>
            <Header />
            <Outlet />
            {idText && idImg && (
                <Link style={btn} to={`singleCard/${idText}/${idImg}`}>
                    Поделится открыткой!
                </Link>
            )}
            <Footer />
        </div>
    )
}
export default Layout;