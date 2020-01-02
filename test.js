'use strict'

const { strictEqual } = require('assert')
const { TestDirector } = require('test-director')
const googleStaticMapsStyleQuery = require('.')

const tests = new TestDirector()

tests.add('A styler rule with a string.', () => {
  strictEqual(
    googleStaticMapsStyleQuery([{ stylers: [{ visibility: 'simplified' }] }]),
    '&style=visibility%3Asimplified'
  )
})

tests.add('A styler rule with a hex color.', () => {
  strictEqual(
    googleStaticMapsStyleQuery([{ stylers: [{ hue: '#ff0000' }] }]),
    '&style=hue%3A0xff0000'
  )
})

tests.add('A styler rule with a number.', () => {
  strictEqual(
    googleStaticMapsStyleQuery([{ stylers: [{ gamma: 0.8 }] }]),
    '&style=gamma%3A0.8'
  )
})

tests.add('Multiple styler rules.', () => {
  strictEqual(
    googleStaticMapsStyleQuery([
      { stylers: [{ saturation: 90 }, { lightness: 50 }] }
    ]),
    '&style=saturation%3A90%7Clightness%3A50'
  )
})

tests.add('A styler rule for a feature.', () => {
  strictEqual(
    googleStaticMapsStyleQuery([
      {
        featureType: 'road',
        stylers: [{ visibility: 'off' }]
      }
    ]),
    '&style=feature%3Aroad%7Cvisibility%3Aoff'
  )
})

tests.add('A styler rule for an element.', () => {
  strictEqual(
    googleStaticMapsStyleQuery([
      {
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]),
    '&style=element%3Alabels%7Cvisibility%3Aoff'
  )
})

tests.add('A styler rule for a feature element.', () => {
  strictEqual(
    googleStaticMapsStyleQuery([
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]),
    '&style=feature%3Aroad%7Celement%3Alabels%7Cvisibility%3Aoff'
  )
})

tests.add('Multiple styles.', () => {
  strictEqual(
    googleStaticMapsStyleQuery([
      { featureType: 'road', stylers: [{ visibility: 'off' }] },
      { featureType: 'poi', stylers: [{ visibility: 'off' }] }
    ]),
    '&style=feature%3Aroad%7Cvisibility%3Aoff&style=feature%3Apoi%7Cvisibility%3Aoff'
  )
})

tests.run()
