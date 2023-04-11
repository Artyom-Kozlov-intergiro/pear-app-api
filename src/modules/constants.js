const countryCodes = require('country-codes-list')

const myCountryCodesObject = countryCodes.customList('countryCode', '{countryNameEn}')

module.exports = {
    countryCodes: Object.keys(myCountryCodesObject),
}
