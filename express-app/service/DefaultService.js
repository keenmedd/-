"use strict";

const { fake } = require("faker");
var faker = require("faker");
faker.locale = "ru";

const specialities = [
    "Терапевт",
    "Педиатр",
    "Стомотолог",
    "Хирург",
    "Ортодонт",
    "Офтальмолог",
    "Подолог",
    "Реабилитолог",
    "Психолог",
];
const categories = [
    "второй категории",
    "первой категории",
    "высшей категории",
];
const authorities = [
    "Гродненский государственный университет",
    "Минский государственный медицинский университет",
    "Витебский государственный медицинский университет",
    "Московский государственный медицинский университет",
];
const workplaces = [
    "Больница скорой помощи",
    "Поликлиника №38",
    "Поликлиника №35",
    "Детская поликлиника №13",
    "Поликлиника №5",
    "Поликлиника №6",
    "Поликлиника №10",
    "Поликлиника №1",
    "Поликлиника №12",
    "Поликлиника №39",
    "Поликлиника №3",
    "Поликлиника №8",
    "Медицинский центр 'Горизонт'",
    "ЛОДЭ",
    "Городская студенческая поликлиника №33",
    "Поликлиника №37",
];

/**
 * searches doctors
 * By passing in the appropriate options, you can search for available doctor in the system
 *
 * name String pass an optional search string for looking up doctor (optional)
 * speciality Integer pass a filter for looking up doctor (optional)
 * experience Integer pass a filter for looking up doctor (optional)
 * returns List
 **/
exports.doctorGET = function(name, speciality, experience) {
    return new Promise(function(resolve, reject) {
        const doctors = Array.from({ length: faker.datatype.number(10) },
            (x, i) => ({
                name: faker.name.findName(),
                speciality: faker.helpers.randomize(specialities),
                category: faker.helpers.randomize(categories),
                experience: faker.datatype.number({ min: 0, max: 50 }),
                workplace: faker.helpers.randomize(workplaces),
                city: "Минск",
                rating: faker.datatype.number({ min: 0, max: 5 }),
                image: faker.image.avatar(),
                feedbackAmount: faker.datatype.number({ min: 0 }),
                secondaryVisitPercent: faker.datatype.number({ min: 0, max: 100 }),
                id: faker.datatype.uuid(),
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
exports.doctorFeedbackGET = function(name, speciality, experience) {
    return new Promise(function(resolve, reject) {
        const doctors = Array.from({ length: faker.datatype.number(5) },
            (x, i) => ({
                rating: faker.datatype.number({ min: 0, max: 5 }),
                punctuality: faker.datatype.number({ min: 0, max: 5 }),
                politeness: faker.datatype.number({ min: 0, max: 5 }),
                clearity: faker.datatype.number({ min: 0, max: 5 }),
                isFirstVisit: faker.datatype.boolean(),
                authorName: faker.name.findName(),
                visitDate: faker.date.past(),
                comment: faker.lorem.sentence(15),
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
exports.doctorFeedbackPOST = function(name, speciality, experience) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

exports.doctorDetailsGET = function(name, speciality, experience) {
    return new Promise(function(resolve, reject) {
        debugger;

        const doctor = {
            name: faker.name.findName(),
            speciality: faker.helpers.randomize(specialities),
            category: faker.helpers.randomize(categories),
            experience: faker.datatype.number({ min: 0, max: 50 }),
            workplace: faker.helpers.randomize(workplaces),
            city: "Минск",
            rating: faker.datatype.number({ min: 0, max: 5 }),
            image: faker.image.avatar(),
            feedbackAmount: faker.datatype.number({ min: 0, max: 150 }),
            secondaryVisitPercent: faker.datatype.number({ min: 0, max: 100 }),
            id: faker.datatype.uuid(),
            education: Array.from({ length: faker.datatype.number(10) }, (x, i) => ({
                year: faker.datatype.number({ min: 1950, max: 2021 }),
                authority: faker.helpers.randomize(authorities),
                note: faker.lorem.words(3),
            })),
            workExperience: Array.from({ length: faker.datatype.number(10) },
                (x, i) => ({
                    start: faker.date.past(),
                    end: faker.date.past(),
                    position: faker.helpers.randomize(specialities),
                    workplace: faker.helpers.randomize(workplaces),
                    competencies: Array.from({ length: faker.datatype.number(10) },
                        (x, i) => faker.lorem.sentence(7)
                    ),
                    extraInfo: Array.from({ length: faker.datatype.number(10) }, (x, i) =>
                        faker.lorem.sentence(6)
                    ),
                })
            ),
        };

        var examples = {};
        examples["application/json"] = doctor;
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
};