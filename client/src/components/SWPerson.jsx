var React = require('react');
var SWAPI = require('../models/SWAPI');

class StarWarsPerson extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.options.name,
      homeworld: ""
    }
  }

  componentDidMount() {
    var starWarsApi = new SWAPI();
    var self = this;
    starWarsApi.get( this.props.options.homeworld, function(homeworld){
      self.setState({ homeworld: homeworld.name });
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <p>{this.state.homeworld}</p>
      </div>
    )
  }

}

module.exports = StarWarsPerson;