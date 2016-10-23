var React = require('react');
var SWAPI = require('../models/SWAPI');

class StarWarsPerson extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.options.name,
      eyeColor: this.props.options.eye_color,
      hairColor: this.props.options.hair_color,
      gender: this.props.options.gender,
      skinColor: this.props.options.skin_color,
      homeworld: "",
      species: "",
      isPressed: false
    }
    this.proptypes = {
      options: React.PropTypes.object.isRequired
    }
  }

  componentWillMount() {
    var starWarsApi = new SWAPI();
    var self = this;
    starWarsApi.get( this.props.options.homeworld, function(homeworld){
      self.setState({ homeworld: homeworld.name });
    })
    starWarsApi.get( this.props.options.species, function(species){
      self.setState({ species: species.name });
    })
  }

  handleClick(event) {
    console.log("click")
    this.setState({ isPressed: true })
  }

  render() {
    var personClass = "person"
    if( this.state.isPressed ) personClass += ' red';
    return (
      <div className={personClass} key={this.props.key}
        onClick={this.handleClick.bind(this)}>
        <span className="name">{this.state.name}</span>
        <span className="info"><ul>
          <li>Species: {this.state.species}</li>
          <li>Eyes: {this.state.eyeColor}</li>
          <li>Hair: {this.state.hairColor}</li>
          <li>Gender: {this.state.gender}</li>
          <li>Homeworld: {this.state.homeworld}</li>
        </ul></span>
      </div>
    )
  }

}

module.exports = StarWarsPerson;