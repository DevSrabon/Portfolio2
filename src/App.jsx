import { BrowserRouter } from "react-router-dom";
import {
	Navbar,
	Hero,
	About,
	Contact,
	Tech,
	Works,
	Feedbacks,
	StarsCanvas,
} from "./components";
const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg0cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
