import Details from "../components/Details";
import Header from "../components/Header";
import { useShowContext } from "../context/showContext";
const Home = () => {
    const { show } = useShowContext();
    const { title } = useShowContext();

    return (
        <>
            <Header />
            {show ? <Details title={title} /> : null}
        </>
    );
};

export default Home;
