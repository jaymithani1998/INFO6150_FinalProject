import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";

import Accomodation from "./components/Accomodation/accomodation";
import Food from "./components/Food/food";
import Courses from "./components/Courses/courses";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}

			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			
			<Route path="/accomodation" exact element={<Accomodation />} />
			<Route path="/food" exact element={<Food />} />
			<Route path="/courses" exact element={<Courses />} />
			
			
{/* 
			<Route path="/accomodation" exact element={<Accomodation />} /> */}
			
		</Routes>
	);
}

export default App;
