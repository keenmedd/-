'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.doctorDetailsGET = function doctorDetailsGET (req, res, next, id) {
  Default.doctorDetailsGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.doctorGET = function doctorGET (req, res, next, name, specialty, expirience) {
  Default.doctorGET(name, specialty, expirience)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
