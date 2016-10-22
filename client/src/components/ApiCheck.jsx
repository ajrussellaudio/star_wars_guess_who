var React = require('react');
var SWAPI = require('../models/SWAPI');

var StarWarsPeople = React.createClass({

  getInitialState() {
    return { people: [] };
  },

  componentDidMount() {
    var StarWarsApi = new SWAPI();
    var self = this;
    StarWarsApi.getPeople(function( people ) {
      var usefulPeople = people.filter( function(person){
        return person.films.length >= 4;
      });
      var newPeople = self.state.people.concat( usefulPeople );
      self.setState({ people: newPeople })
    });
  },

  filterPeople( numFilms ) {
    return this.state.allPeople.filter( )
  },

  render() {
    var listItems = this.state.people.map(function(person, index) {
      return <li key={index}>{person.name}</li>
    });

    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    )
  }

})

module.exports = StarWarsPeople;
