import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShowContextProvider } from "./context/showContext";
import Home from "./screens/Home";
import Input from "./screens/InputAnime";
import Edit from "./screens/Edit";
import Footer from "./components/Footer";

const App = () => {
    return (
        <ShowContextProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/input" element={<Input />} />
                    <Route path="/edit" element={<Edit />} />
                </Routes>
                <Footer />
            </Router>
        </ShowContextProvider>
    );
};

export default App;
