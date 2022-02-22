const checkLength = require("./verifyPassword");
const notNull = require("./verifyPassword");
const checkVoorGrootletter = require("./verifyPassword");

test("Moet niet langer dan 9 characters", () => {
    expect(checkLength("mohammed")).toBe(true);
})

test("Het moet niet 'Null' zijn", () => {
    expect(notNull("wincacademy")).not.toBeNull();

})

test("moet een letter groot",() => {
    const regEx = /[A-Z]/;
    console.log("Hello world",regEx.test(checkVoorGrootletter("Wincacademy")))
    expect(regEx.test(checkVoorGrootletter("Wincacademy"))).toBe(true)
})



// test("checken voor minimaal 1 kleine letter", () => {
//     const name = "Wincacademy";
//     expect(functions.checkenVoorkleineLetter(name)).toContain(name)
// })

// test("checken voor 1 of meer digits", () => {
//     expect(functions.checkDigits("WincAcademy2022")).toContain("WincAcademy2022")
// })

