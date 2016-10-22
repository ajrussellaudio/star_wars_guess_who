var StarWarsAPI = require('../models/SWAPI.js');
var assert = require('assert');

describe( "SWAPI", function() {

  var SWAPI = new StarWarsAPI();

  it( "should build a URL", function() {
    var endpoint = "people";
    var id = 1;
    var options = {
      endpoint: endpoint,
      id: id
    }
    var expectedUrl = "http://swapi.co/api/people/1/";
    assert.equal( expectedUrl, SWAPI.buildUrl( options ) );
  })

})