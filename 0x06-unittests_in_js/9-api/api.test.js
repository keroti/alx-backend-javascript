const request = require("request");
const { expect } = require("chai");

describe("Regex integration testing", () => {
    describe("GET /cart/:id", () => {
        it("should return Payment methods for cart :id when :id is a number", (done) => {
            request.get(
                "http://localhost:7865/cart/12",
                (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    expect(body).to.equal("Payment methods for cart 12");
                    done();
                }
            );
        });

        it("should return 404 when :id is not a number", (done) => {
            request.get(
                "http://localhost:7865/cart/hello",
                (error, response, body) => {
                    expect(response.statusCode).to.equal(404);
                    expect(body).to.contain("Cannot GET /cart/hello");
                    done();
                }
            );
        });
    });
});
