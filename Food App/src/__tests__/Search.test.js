import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/swiggyData.json";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

// it("Should search the items", async () => {
//     await act(async() => render(
//         <BrowserRouter>
//             <Body />
//         </BrowserRouter>
//     ));

//     const search = screen.getByRole("button", {name: "Search"});
//     const input = screen.getByTestId("input");
//     // expect(input).toBeInTheDocument();
//     fireEvent.change(input, {target: {value: "pizza"}});
//     fireEvent.click(search);
//     const cards = screen.getAllByTestId("card");

//     expect(cards.length).toBe(9);
//     // expect(search).toBeInTheDocument();
// });

it("Should filter top rated restaurant", async() => {
    await act(async() => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId("card");
    const filterBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(filterBtn);

    const cardsAfterFilter = screen.getAllByTestId("card");

    expect(cardsAfterFilter.length).toBe(6);
});