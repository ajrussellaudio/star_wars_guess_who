var React = require('react');
var SWAPI = require('../models/SWAPI');
var classNames = require('classnames');

var StarWarsPerson = require('./SWPerson')

var StarWarsPeople = React.createClass({

  getInitialState() {
    return { 
      people: [] 
    };
  },

  componentDidMount() {
    var StarWarsApi = new SWAPI();
    var url = StarWarsApi.buildUrl({endpoint: 'people'});
    var self = this;
    StarWarsApi.get( url, function( response ) {
      var people = response.results;
      var selectedPeople = people.filter( function(person){
        return person.films.length >= self.props.numFilms;
      });
      var newPeople = self.state.people.concat( selectedPeople );
      self.setState({ people: newPeople })
    });
  },

  render() {
    var listItems = this.state.people.map(function(person, index) {
      return (
        <StarWarsPerson options={person} key={index} />
      )
    });

    return (
      <div 
        className="peopleList">
        {listItems}
      </div>
    )
  }
})

module.exports = StarWarsPeople;