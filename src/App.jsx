import { Routes, Route } from "react-router-dom";
import Main from "./assets/layout/Main";
import Work from "./assets/layout/Work";
import WorksModal from "./components/Details";
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Main></Main>} />;
			<Route path="/:id" element={<Work></Work>} />;
		</Routes>
	);
};

export default App;
