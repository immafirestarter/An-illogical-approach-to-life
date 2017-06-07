const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');

var app = require('../server/index.js')


describe('Battle', function(done) {
  const browser = new Browser();

  it('can start a battle', function(done) {
    browser.visit('http://localhost:9000/battle').then(function() {
      assert.ok(browser.success);
      browser.assert.text('h2', 'BATTLE');
      browser.assert.text('p', 'Test Warrior');
    }).then(done, done)
  })
})