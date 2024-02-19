import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantCategory from "../components/RestaurantCategory";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resCategory.json";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("Should render the Restaurant category", async() => {
    await act(async() => render(
        <BrowserRouter>
            <RestaurantCategory />
        </BrowserRouter>
    ));
});