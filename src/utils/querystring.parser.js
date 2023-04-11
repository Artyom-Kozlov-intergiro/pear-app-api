'use strict';

const qs = require('qs');

module.exports = parseQueryString;

function parseQueryString(str) {
    return qs.parse(str, {
        arrayLimit: 0,
    });
}
