"use strict";

const request = require("supertest");
const shipItApi = require('../shipItApi')

shipItApi.shipProduct = jest.fn();
const app = require("../app");

describe("POST /", function () {
  test("valid", async function () {
    
    shipItApi.shipProduct.mockReturnValue(5419);

    const resp = await request(app).post("/shipments").send({
      productId: 1000,
      name: "Test Tester",
      addr: "100 Test St",
      zip: "12345-6789",
    });

    expect(resp.body).toEqual({ shipped: 5419 });
  });

  // test("invalid", async function () {
  //   const resp = await  request(app).post("/shipments").send({
  //     productId: 1,
  //     name: 34,
  //     addr: true,
  //     zip: 9009
  //   });
  //   expect(resp.statusCode).toEqual(400);
  //   expect(resp.body.error.message).toEqual(
  //     [
  //           "instance.productId must be greater than or equal to 1000",
  //           "instance.name is not of a type(s) string",
  //           "instance.addr is not of a type(s) string",
  //           "instance.zip is not of a type(s) string"
  //     ])
  // });


});
