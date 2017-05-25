let MyApp = function () {
    let getFlag = function () {
        return false;
    };

    let useFlagForSomething = function () {
        if (this.getFlag() === true) {
            return "It was true";
        } else {
            return "It was false";
        }
    };

    return {
        getFlag: getFlag,
        useFlagForSomething: useFlagForSomething
    };
};

describe("Testing spies", function () {

    it("Should replace the return value of function being spied on", function () {
        let myApp = new MyApp();
        spyOn(myApp, "getFlag").and.returnValue(true);
        let result = myApp.useFlagForSomething();
        expect(result).toEqual("It was true");
    });
});