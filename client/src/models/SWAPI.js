var SWAPI = function(){
  this.baseUrl = "http://swapi.co/api";
}

SWAPI.prototype.buildUrl = function( options ) {
  var items = [];
  var query = "";
  items.push( this.baseUrl );
  items.push( options.endpoint );
  if( options.id ) items.push( options.id );
  var builtUrl = items.join('/') + '/';
  return builtUrl;
};

SWAPI.prototype.get = function( url, callback ) {
  var self = this;
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.onload = function() {
    var data = JSON.parse( request.responseText );
    if( data.next ) self.get( data.next, callback );
    callback( data );
  }
  request.send();
};

module.exports = SWAPI;