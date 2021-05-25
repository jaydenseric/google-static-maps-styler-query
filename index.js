'use strict';

/**
 * Converts a
 * [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference)
 * to a
 * [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).
 * @kind function
 * @name googleStaticMapsStylerQuery
 * @param {Array<object>} styles [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference).
 * @returns {string} [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).
 * @example <caption>How to `import`.</caption>
 * ```js
 * import googleStaticMapsStylerQuery from 'google-static-maps-styler-query';
 * ```
 * @example <caption>How to `require`.</caption>
 * ```js
 * const googleStaticMapsStylerQuery = require('google-static-maps-styler-query');
 * ```
 * @example <caption>How to create a styled static map URL.</caption>
 * ```js
 * const styles = [{ elementType: 'labels', stylers: [{ visibility: 'off' }] }];
 * const stylerQuery = googleStaticMapsStylerQuery(styles);
 * const googleStaticMapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=250x200${stylerQuery}`;
 * ```
 */
module.exports = function googleStaticMapsStylerQuery(styles) {
  let query = '';

  for (const style of styles) {
    const component = [];

    if (style.featureType) component.push('feature:' + style.featureType);
    if (style.elementType) component.push('element:' + style.elementType);

    for (const rule of style.stylers) {
      const [name] = Object.keys(rule);
      const value = rule[name].toString().replace('#', '0x');

      component.push(`${name}:${value}`);
    }

    query += '&style=' + encodeURIComponent(component.join('|'));
  }

  return query;
};
