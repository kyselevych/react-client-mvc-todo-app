import React from "react";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "components";

import 'antd/dist/antd.min.css';
import './styles/app.scss';

function App() {
	return (
        <React.StrictMode>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </React.StrictMode>
	);
}

export default App;
