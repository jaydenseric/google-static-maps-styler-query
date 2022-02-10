// @ts-check
/// <reference types="@types/google.maps" />

/**
 * Converts a
 * [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference)
 * to a
 * [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).
 * @param {Array<google.maps.MapTypeStyle>} styles
 *   [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference).
 * @returns {string}
 *   [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).
 * @example
 * How to create a styled static map URL:
 *
 * ```js
 * const styles = [{ elementType: "labels", stylers: [{ visibility: "off" }] }];
 * const stylerQuery = googleStaticMapsStylerQuery(styles);
 * const googleStaticMapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=250x200${stylerQuery}`;
 * ```
 */
export default function googleStaticMapsStylerQuery(styles) {
  let query = "";

  for (const style of styles) {
    const component = [];

    if (style.featureType) component.push("feature:" + style.featureType);
    if (style.elementType) component.push("element:" + style.elementType);

    for (const rule of /** @type {Array<{ [key: string]: unknown }>} */ (
      style.stylers
    )) {
      const [name] = Object.keys(rule);
      const value = String(rule[name]).replace("#", "0x");

      component.push(`${name}:${value}`);
    }

    query += "&style=" + encodeURIComponent(component.join("|"));
  }

  return query;
}
