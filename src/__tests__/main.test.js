// @ts-check
import { sayHello } from "../main"
import { describe, expect, it, jest } from "@jest/globals"

describe("Main", () => {
    it("test sample function", () => {
        jest.spyOn(console, "log")
        sayHello()
        expect(console.log).toHaveBeenCalledWith("Hello")
    })
})
