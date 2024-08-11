import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShowContextProvider } from "./context/showContext";
import Home from "./screens/Home";
import Input from "./screens/InputAnime";
const App = () => {
    return (
        <ShowContextProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/input" element={<Input />} />
                </Routes>
            </Router>
        </ShowContextProvider>
    );
};

export default App;
