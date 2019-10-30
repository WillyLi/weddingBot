'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  imagePlaceholder: '"https://i1.wp.com/www.foot.com/wp-content/uploads/2017/03/placeholder.gif?zoom=2&fit=300%2C185&ssl=1"',
  googlePlaceApiUrl: '"https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json"'
})
