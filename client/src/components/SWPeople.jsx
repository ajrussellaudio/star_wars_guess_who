var React = require('react');
var SWAPI = require('../models/SWAPI');
var classNames = require('classnames');

var StarWarsPeopleList = require('./SWPeopleList');
var StarWarsGuessWho = require('./SWGuessWho');

var SWPerson = require('../models/SWPerson');

var StarWarsPeople = React.createClass({

  getInitialState() {
    return { 
      people: [],
      listComplete: false 
    };
  },

  componentDidMount() {
    var StarWarsApi = new SWAPI();
    var url = StarWarsApi.buildUrl({endpoint: 'people'});
    var self = this;
    StarWarsApi.get( url, function( response ) {
      if( !response.next ) self.setState({ listComplete: true })
      var people = response.results;
      var selectedPeople = people.filter( function(person){
        return person.films.length >= self.props.numFilms;
      });
      var peopleObjects = selectedPeople.map( function(person){
        return new SWPerson( person );
      })
      var newPeople = self.state.people.concat( peopleObjects );
      self.setState({ people: self.shuffle(newPeople) });
    });
  },

  render() {
    var contents = <div className="app"></div>;
    if( this.state.listComplete ){
      contents = (
        <div className="app">
          <StarWarsGuessWho 
            people={this.state.people} />
          <StarWarsPeopleList
            people={this.state.people} />
        </div>
    )}
    return contents
  },

  shuffle(array) {
    // borrowed from Stack Overflow
    // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
  }
})

module.exports = StarWarsPeople;