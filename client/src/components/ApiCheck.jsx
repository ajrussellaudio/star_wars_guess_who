var React = require('react');
var SWAPI = require('../models/SWAPI');

var StarWarsPeople = React.createClass({

  getInitialState() {
    return { allPeople: [] };
  },

  componentDidMount() {
    var StarWarsApi = new SWAPI();
    var self = this;
    StarWarsApi.getPeople(function( people ) {
      self.setState({ allPeople: self.state.allPeople.concat( people ) })
    });
  },

  filterPeople( numFilms ) {
    return this.state.allPeople.filter( function(person){
      return person.films.length >= numFilms;
    })
  },

  render() {
    var listItems = this.filterPeople(4).map(function(person, index) {
      return <li key={index}>{person.name}, {person.hair_color}</li>
    })

    console.log( listItems.length )

    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    )
  }

})

module.exports = StarWarsPeople;
