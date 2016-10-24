var React = require('react');

var CharacteristicSelect = React.createClass({

  getInitialState() {
    return {
      characteristics: []
    }
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      characteristics: this.eliminateDupes( nextProps.characteristics )
    })
  },

  eliminateDupes( array ) {
    // stack overflow
    // http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
    return array.filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
  },

  render() {
    console.log("state:", this.state.characteristics)
    if( !this.state.characteristics[0] ){
      return <div></div>
    } else {
      return <div>This is gonna work!</div>
    }
  }

})

module.exports = CharacteristicSelect;