import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "components";

import 'antd/dist/antd.min.css';
import './styles/app.scss';

function App() {
	return (
		<BrowserRouter>
			<AppRouter/>
		</BrowserRouter>
	);
}

export default App;
