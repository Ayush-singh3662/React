import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Test cases for Contact component", () => {
    test("Contact component should be rendered", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Contact Component's button should be rendered", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("Sholud name input el;ement should get rendered", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("Name");
        expect(inputName).toBeInTheDocument();
    });
    
    test("Should message input element get rendered", () => {
        render(<Contact />);
        const message = screen.getByPlaceholderText("Message");
        expect(message).toBeInTheDocument();
    });
});