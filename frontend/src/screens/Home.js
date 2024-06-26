import Details from "../components/Details";
import Header from "../components/Header";
import { useShowContext } from "../context/showContext";
const Home = () => {
    const { show, setShow } = useShowContext();
    const { title } = useShowContext();

    return (
        <>
            <Header />
            {show ? <Details title={title} /> : null}
            <button onClick={() => setShow(!show)}>Show Details</button>
        </>
    );
};

export default Home;
