import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import "../index.css";
const Home = () => {
    return (
        <div style={{minHeight: "100vh"}}>
            <Header />
            <Main />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
