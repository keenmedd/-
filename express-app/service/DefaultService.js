"use strict";

var faker = require("faker");
faker.locale = "ru";

const specialities = ["Терапия", "Педиатрия"];
/**
 * get doctor details
 * By passing in the appropriate options, you can get doctor details
 *
 * id String pass an id to get doctor details
 * returns List
 **/
exports.doctorDetailsGET = function (id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        specialty: "Терапия",
        comments: [
          {
            createdAt: "2021-05-30T18:28:19.684Z",
            rating: 7.7,
            id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
            text: "Восхитительная работа!",
          },
          {
            createdAt: "2021-05-30T18:28:19.684Z",
            rating: 7.7,
            id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
            text: "Восхитительная работа!",
          },
        ],
        education: [
          {
            authority: "БелМАПО",
            name: "Курсы кардилогии",
            finishedAt: "2021-05-30T18:28:19.684Z",
          },
          {
            authority: "БелМАПО",
            name: "Курсы кардилогии",
            finishedAt: "2021-05-30T18:28:19.684Z",
          },
        ],
        popularity: 3222,
        name: "Куку Валентина Андреевна",
        rating: 7.7,
        id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
        experience: 5,
        workplace: "Минская ЦРБ",
      },
      {
        specialty: "Терапия",
        comments: [
          {
            createdAt: "2021-05-30T18:28:19.684Z",
            rating: 7.7,
            id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
            text: "Восхитительная работа!",
          },
          {
            createdAt: "2021-05-30T18:28:19.684Z",
            rating: 7.7,
            id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
            text: "Восхитительная работа!",
          },
        ],
        education: [
          {
            authority: "БелМАПО",
            name: "Курсы кардилогии",
            finishedAt: "2021-05-30T18:28:19.684Z",
          },
          {
            authority: "БелМАПО",
            name: "Курсы кардилогии",
            finishedAt: "2021-05-30T18:28:19.684Z",
          },
        ],
        popularity: 3222,
        name: "Куку Валентина Андреевна",
        rating: 7.7,
        id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
        experience: 5,
        workplace: "Минская ЦРБ",
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * searches doctors
 * By passing in the appropriate options, you can search for available doctor in the system
 *
 * name String pass an optional search string for looking up doctor (optional)
 * specialty Integer pass a filter for looking up doctor (optional)
 * expirience Integer pass a filter for looking up doctor (optional)
 * returns List
 **/
exports.doctorGET = function (name, specialty, expirience) {
  return new Promise(function (resolve, reject) {
    const doctors = Array.from(
      { length: faker.datatype.number(4) },
      (x, i) => ({
        specialty: faker.helpers.randomize(specialities),
        popularity: faker.datatype.number({ min: 0, max: 5000 }),
        name: faker.name.findName(),
        rating: faker.datatype.float({ min: 0, max: 5000, precision: 2 }),
        id: faker.datatype.uuid(),
        image: faker.image.avatar(),
      })
    );
    var examples = {};
    examples["application/json"] = doctors;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
