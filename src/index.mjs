/**
 * Converts a [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference)
 * to a [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).
 * @kind function
 * @name googleStaticMapsStylerQuery
 * @param {Array<object>} styles - Google Maps styler array.
 * @returns {string} Google Static Maps styler URL query string.
 * @example <caption>Import using ESM.</caption>
 * ```js
 * import { googleStaticMapsStylerQuery } from 'google-static-maps-styler-query'
 * ```
 * @example <caption>Import using CJS.</caption>
 * ```js
 * const { googleStaticMapsStylerQuery } require('google-static-maps-styler-query')
 * ```
 * @example <caption>A simple conversion.</caption>
 * ```js
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
export function googleStaticMapsStylerQuery(styles) {
  let query = ''

  styles.forEach(({ featureType, elementType, stylers }) => {
    const component = []

    if (featureType) component.push(`feature:${featureType}`)
    if (elementType) component.push(`element:${elementType}`)

    stylers.forEach(rule => {
      const [name] = Object.keys(rule)
      const value = rule[name].toString().replace('#', '0x')

      component.push(`${name}:${value}`)
    })

    query += `&style=${encodeURIComponent(component.join('|'))}`
  })

  return query
}
