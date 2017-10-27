var Pspdfkit = require("nativescript-pspdfkit").Pspdfkit;
var pspdfkit = new Pspdfkit();

describe("greet function", function() {
    it("exists", function() {
        expect(pspdfkit.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(pspdfkit.greet()).toEqual("Hello, NS");
    });
});