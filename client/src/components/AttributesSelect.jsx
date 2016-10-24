var React = require('react');

var AttributesSelect = React.createClass({

  prettify(string) {
    var input = string.split('');
    var output = []
    for( var i = 0; i < input.length; i++){
      var char = input[i];
      if( char === char.toUpperCase() ) {
        output.push(' ' + char);
      } else {
        output.push(char);
      }
    }
    var result = output.join('')
    var capitalized = result[0][0].toUpperCase() + result.substring(1, result.length);
    return capitalized;  
  },

  render() {
    var optionsMinusName = this.props.attributes.filter(function(item){
      return item !== "name"
    })
    var options = optionsMinusName.map( function(item, index) {
      return <option key={index} value={item}>{this.prettify(item)}</option>
    }.bind(this))

    return (
      <select defaultValue="default" onChange={this.props.onChange}>
        <option value="default" disabled>Choose an attribute...</option>
        {options}
      </select>
    )
  }

})

module.exports = AttributesSelect;