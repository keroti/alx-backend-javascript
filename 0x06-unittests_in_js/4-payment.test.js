const expect = require("chai").expect;
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
    it("validate the usage of the Utils function", function () {
        const calculateNumberStub = sinon
            .stub(Utils, "calculateNumber")
            .returns(10);
        const consoleSpy = sinon.spy(console, "log");

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnceWithExactly("SUM", 100, 20))
            .to.be.true;
        expect(consoleSpy.calledOnceWithExactly("The total is: 10")).to.be
            .true;

        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});
