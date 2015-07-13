//
// test/tests.js
//

var request = require('request')
var expect = require('chai').expect
var cheerio = require("cheerio");
var chai = require("chai");
var mocha = require("mocha");
var baseUrl = 'http://localhost:3000';

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

//Test 1 - GET
describe('Your awesome app', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request(baseUrl, function(err, res, body) {
      //Positive case
      expect(res.statusCode).to.equal(200)
      //Negative case
      //expect(res.statusCode).to.equal(300)
      done();
    })
  })
});