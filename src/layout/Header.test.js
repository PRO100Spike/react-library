const rewire = require("rewire")
const Header = rewire("./Header")
const myFunction = Header.__get__("myFunction")
// @ponicode
describe("myFunction", () => {
    test("0", () => {
        let callFunction = () => {
            myFunction()
        }
    
        expect(callFunction).not.toThrow()
    })
})
