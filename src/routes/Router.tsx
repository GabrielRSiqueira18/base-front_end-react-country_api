import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../components/Home";
import { Country } from "../components/Country";

export function Router() {
	return 	(
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/country/:id" element={<Country />} />
			</Route>
		</Routes>
	)
}