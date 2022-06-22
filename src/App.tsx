import React from "react";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "components";

import 'react-toastify/dist/ReactToastify.css';
import './styles/app.scss';

function App() {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
