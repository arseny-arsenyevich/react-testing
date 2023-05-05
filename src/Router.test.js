import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import createReduxStore from "./store/store";

describe("router testing", () => {
	test("main about switch", () => {
		render(
			<Provider store={createReduxStore()}>
				<MemoryRouter>
					<App />
				</MemoryRouter>
			</Provider>
		);
		const mainLink = screen.getByTestId("main-link");
		const aboutLink = screen.getByTestId("about-link");
		fireEvent.click(aboutLink, { button: 0})
		expect(screen.getByTestId("about-page")).toBeInTheDocument();
		fireEvent.click(mainLink, { button: 0})
		expect(screen.getByTestId("main-page")).toBeInTheDocument();
	});

	test("error page on wrong url", () => {
		render(
			<Provider store={createReduxStore()}>
				<MemoryRouter initialEntries={["/safano"]}>
					<App />
				</MemoryRouter>
			</Provider>
		);
		expect(screen.getByTestId("error-page")).toBeInTheDocument();
	});
});
