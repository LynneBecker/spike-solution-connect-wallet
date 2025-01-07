import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Header from "./component/header";
const App = () => {

    return (<div>
        <Header />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    </div>
    );
}

export default App;