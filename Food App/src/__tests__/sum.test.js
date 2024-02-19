import { sum } from "../components/sum";

test("Sum function should return the sum of two numbers", () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
})