'use strict';

/**
 * Converts a Google Maps styler array to a Google Static Maps styler URL query
 * string.
 * @kind function
 * @name googleStaticMapsStylerQuery
 * @param {Array<object>} styles [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference).
 * @returns {string} [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).
 * @example <caption>How to create a styled static map URL.</caption>
 * ```js
 * const googleStaticMapsStylerQuery = require('google-static-maps-styler-query');
 *
 * const styles = [{ elementType: 'labels', stylers: [{ visibility: 'off' }] }];
 * const stylerQuery = googleStaticMapsStylerQuery(styles);
 * const googleStaticMapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=250x200${stylerQuery}`;
 * ```
 */
module.exports = function googleStaticMapsStylerQuery(styles) {
  var query = '';

  styles.forEach((style) => {
    var component = [];

    if (style.featureType) component.push('feature:' + style.featureType);
    if (style.elementType) component.push('element:' + style.elementType);

    style.stylers.forEach((rule) => {
      var name = Object.keys(rule)[0];
      var value = rule[name].toString().replace('#', '0x');
      component.push(name + ':' + value);
    });

    query += '&style=' + encodeURIComponent(component.join('|'));
  });

  return query;
};
