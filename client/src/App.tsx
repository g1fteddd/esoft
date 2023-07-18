import React from "react";
import styles from "./App.module.scss";

import Main from "./pages/Main";
import FlatPage from "./pages/FlatPage";
import { Navigate, Route, Routes } from "react-router-dom";
import FloorPlan from "./pages/FloorPlan";

const App: React.FC = () => {
    return (
        <div className={styles["content"]}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/flats/:id" element={<FlatPage />} />
                <Route path="/plan" element={<FloorPlan />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
};

export default App;
