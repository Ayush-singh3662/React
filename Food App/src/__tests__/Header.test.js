import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { Provider } from "react-redux";
import Store from "../Redux/Store";
import { BrowserRouter } from "react-router-dom";

it("Should rennder the login button of Header", () => {
  render(
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByRole("button");
//   const login = screen.getByText("Login");
  expect(login).toBeInTheDocument();
});

it("Sholud change login button to logout button", () => {
    render(
        <BrowserRouter>
            <Provider store={Store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const login = screen.getByRole('button', {name: 'Login'});

    fireEvent.click(login);

    const logout = screen.getByRole("button", {name: "Logout"});

    expect(logout).toBeInTheDocument();
});
