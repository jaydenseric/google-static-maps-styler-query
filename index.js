'use strict'

/**
 * Converts a [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference)
 * to a [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).
 * @kind function
 * @name googleStaticMapsStylerQuery
 * @param {Array<object>} styles - Google Maps styler array.
 * @returns {string} Google Static Maps styler URL query string.
 * @example <caption>A simple conversion.</caption>
 * ```js
 * const googleStaticMapsStylerQuery = require('google-static-maps-styler-query')
 *
 * const stylerArray = [
 *   {
 *     stylers: [
 *       { visibility: 'simplified' },
 *       { hue: '#e91e63' },
 *       { gamma: 0.8 }
 *     ]
 *   },
 *   {
 *     elementType: 'labels',
 *     stylers: [{ visibility: 'off' }]
 *   }
 * ]
 * const stylerQuery = googleStaticMapsStylerQuery(stylerArray)
 * const googleStaticMapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=250x200${stylerQuery}`
 * ```
 */
module.exports = function googleStaticMapsStylerQuery(styles) {
  var query = ''

  styles.forEach(style => {
    var component = []

    if (style.featureType) component.push('feature:' + style.featureType)
    if (style.elementType) component.push('element:' + style.elementType)

    style.stylers.forEach(rule => {
      var name = Object.keys(rule)[0]
      var value = rule[name].toString().replace('#', '0x')
      component.push(name + ':' + value)
    })

    query += '&style=' + encodeURIComponent(component.join('|'))
  })

  return query
}
