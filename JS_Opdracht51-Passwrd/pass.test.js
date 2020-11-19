const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
} = require("./pass.js");

// independent checks
describe("Password functions", () => {
    test("hasRightLength false", () => {
        expect(hasRightLength("123456789")).toBe(false);
    });

    test("hasRightLength true", () => {
        expect(hasRightLength("Ahold123")).toBe(true);
    });

    test("isNotNull false", () => {
        expect(isNotNull("NULL")).toBe(false);
    });

    test("isNotNull true", () => {
        expect(isNotNull("ahold")).toBe(true);
    });

    test("isNotNull false", () => {
        expect(hasUpperCaseCharacter("aaaaa")).toBe(false);
    });

    test("isNotNull true", () => {
        expect(hasUpperCaseCharacter("Ahold")).toBe(true);
    });

    test("hasLowerCaseCharacter false", () => {
        expect(hasLowerCaseCharacter("AHOLD")).toBe(false);
    });

    test("hasLowerCaseCharacter true", () => {
        expect(hasLowerCaseCharacter("Ahold")).toBe(true);
    });
    test("hasDigit false", () => {
        expect(hasDigit("AHOLD")).toBe(false);
    });

    test("ihasDigit true", () => {
        expect(hasDigit("Ahold123")).toBe(true);
    });
});
// VerifyPassword
describe("Verify password", () => {
    test("verifyPassword null", () => {
        expect(verifyPassword(null)).toBe(false);
    });

    test("verifyPassword '1'", () => {
        expect(verifyPassword("1")).toBe(false);
    });

    test("verifyPassword 'Ahold123'", () => {
        expect(verifyPassword("Ahold123")).toBe(true);
    });


});