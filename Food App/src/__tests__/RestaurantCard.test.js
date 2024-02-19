import { render, screen } from "@testing-library/react";
import Card from "../components/Card";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("Should render the restaurant card", () => {
    render(<Card data={MOCK_DATA}/>);
    const card = screen.getByText("Gupta Brothers The Abarkhabo Shoppe");

    expect(card).toBeInTheDocument();
});