var React = require('react');
var SWAPI = require('../models/SWAPI');

var StarWarsPerson = require('./SWPerson')

var StarWarsPeople = React.createClass({

  getInitialState() {
    return { 
      people: [] 
    };
  },

  componentDidMount() {
    var StarWarsApi = new SWAPI();
    var self = this;
    StarWarsApi.get(
      StarWarsApi.buildUrl({endpoint: 'people'}), 
      function( response ) {
        var people = response.results;
        var usefulPeople = people.filter( function(person){
          return person.films.length >= self.props.numFilms;
        });
        var newPeople = self.state.people.concat( usefulPeople );
        self.setState({ people: newPeople })
      });
  },

  render() {
    var listItems = this.state.people.map(function(person, index) {
      return <li key={index}><StarWarsPerson options={person} /></li>
    });

    return (
      <div>
        {listItems}
      </div>
    )
  }
})

module.exports = StarWarsPeople;