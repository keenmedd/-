"use strict";

var utils = require("../utils/writer.js");
var Default = require("../service/DefaultService");

module.exports.doctorDetailsGET = function doctorDetailsGET(
    req,
    res,
    next,
    id
) {
    Default.doctorDetailsGET(id)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.doctorGET = function doctorGET(
    req,
    res,
    next,
    id
) {
    Default.doctorGET(
            req,
            res,
            next,
            id
        )
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
module.exports.doctorFeedbackGET = function doctorFeedbackGET(
    req,
    res,
    next,
    id
) {
    Default.doctorFeedbackGET(id)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.doctorFeedbackPOST = function doctorFeedbackPOST(
    req,
    res,
    next,
    id
) {
    Default.doctorFeedbackPOST(id)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};