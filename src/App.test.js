import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createReduxStore from './store/store';

describe("test app", () => {
  test('renders learn react link', () => {
		render(
			<Provider store={createReduxStore()}>
				<MemoryRouter>
					<App />
				</MemoryRouter>
			</Provider>
		);
    const workELement = screen.getByText(/работает/i);
    const btn = screen.getByTestId("toggle-btn")
    const input = screen.getByPlaceholderText("input")
    expect(workELement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();

  });

  test('async render', async () => {
		render(
			<Provider store={createReduxStore()}>
				<MemoryRouter>
					<App />
				</MemoryRouter>
			</Provider>
		);
    const helloDiv = await screen.findByText(/hello!/i);
    expect(helloDiv).toBeInTheDocument()
  });

  test('click event', async () => {
		render(
			<Provider store={createReduxStore()}>
				<MemoryRouter>
					<App />
				</MemoryRouter>
			</Provider>
		);
    const btn = screen.getByTestId("toggle-btn");
    let toggleDiv = screen.queryByTestId("toggle-div");
    expect(toggleDiv).toBeNull()
    fireEvent.click(btn)
    toggleDiv = screen.queryByTestId("toggle-div");
    expect(toggleDiv).toBeInTheDocument()
    fireEvent.click(btn)
    toggleDiv = screen.queryByTestId("toggle-div");
    expect(toggleDiv).toBeNull()
  });

  test('click event 2', async () => {
		render(
			<Provider store={createReduxStore()}>
				<MemoryRouter>
					<App />
				</MemoryRouter>
			</Provider>
		);
    const input = screen.getByTestId("input");
    let inputH = screen.queryByTestId("input-h1");
    fireEvent.input(input, {
      target: { value: '123' }
    })

    // ну так се проверочка
    expect(inputH).toContainHTML("2")
  });
})
