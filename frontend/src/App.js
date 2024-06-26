import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShowContextProvider } from "./context/showContext";
import Home from "./screens/Home";
const App = () => {
    return (
        <ShowContextProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </ShowContextProvider>
    );
};

export default App;
