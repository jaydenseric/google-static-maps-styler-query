/**
 * Converts a Google Maps styler array to a Google Static Maps styler URL query string.
 * @param {Object[]} styles - Google Maps styler array.
 * @returns {string} Google Static Maps styler URL query string.
 */
export default function googleStaticMapsStylerQuery (styles) {
  let query = ''
  styles.forEach(({featureType, elementType, stylers}) => {
    let component = []
    if (featureType) component.push(`feature:${featureType}`)
    if (elementType) component.push(`element:${elementType}`)
    stylers.forEach(rule => {
      const name = Object.keys(rule)[0]
      const value = rule[name].toString().replace('#', '0x')
      component.push(`${name}:${value}`)
    })
    query += `&style=${encodeURIComponent(component.join('|'))}`
  })
  return query
}
