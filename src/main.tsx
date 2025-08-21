import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";
import Menu from "./routes/Menu.tsx";
import NotFound from "./routes/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<App />} />
				<Route path='restaurant' element={<Menu />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
