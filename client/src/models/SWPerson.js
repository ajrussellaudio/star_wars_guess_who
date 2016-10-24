var SWPerson = function( options ) {
  this.name = options.name,
  this.eyeColor = options.eye_color,
  this.hairColor = options.hair_color,
  this.gender = options.gender,
  this.skinColor = options.skin_color,
  this.homeworld = options.homeworld,
  this.species = options.species
}

module.exports = SWPerson;