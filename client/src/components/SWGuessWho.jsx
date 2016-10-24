var React = require('react');

var AttributesSelect = require('./AttributesSelect');
var CharacteristicSelect = require('./CharacteristicSelect');

var StarWarsGuessWho = React.createClass({

  getInitialState() {
    return {
      people: this.props.people,
      person: {},
      selectedAttribute: "",
      selectedCharacteristic: ""
    }
  },

  componentWillReceiveProps(nextProps) {
    var index = Math.floor(Math.random() * nextProps.people.length)
    var theChosenOne = nextProps.people[index];
    this.setState({ person: theChosenOne });
  },

  attributes() {
    return Object.keys(this.state.people[0])
  },

  characteristics( key ) {
    return this.state.people.map( function(person){
      return person[this.state.selectedAttribute]
    }.bind(this))
  },

  attributeChangeHandler(event) {
    this.setState({ selectedAttribute: event.target.value })
  },

  render() {
    return (
      <div className="gameBox">
        <div className="game">
        <p>Answer: {this.state.person.name}</p>
        <AttributesSelect 
          attributes={this.attributes()}
          onChange={this.attributeChangeHandler}/>
        <CharacteristicSelect
          characteristics={this.characteristics( this.state.selectedAttribute )}/>
        </div>
      </div>
    )
  }

})

module.exports = StarWarsGuessWho;