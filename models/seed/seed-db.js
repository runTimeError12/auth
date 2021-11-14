"use strict";

const models = require("../db");

const _User = require("./mockUser.json");
const _LOGIN_TYPE = require('./mockLogin.json');
const _COUNTRIES = require('./mockCountries.json');
const _STATE = require('./mockState.json');
const _CITY = require('./mockCities.json');

const _MEALS= require('./mockMeals.json')
const _MEAL_TYPE= require('./mockMealType.json');
const _MEAL_TAKEN= require('./mockMealTaken.json');
const _MEAL_TAKEN_DETAILS=require('./mockMealTakenDetails.json');
const _WATER_SETTINGS=require('./mockWaterSettings.json');

const _WB_SUBJECTIVE_RATING=require('./mockWBSubjectiveRating.json')
const _WB_QUESTION_TYPE=require('./mockWbQuestionType.json');
const _WB_QUESTION=require('./mockWbQuestion.json');

const _HRT_CURRENT_STATUS=require('./mockHrtCurrentStatus.json');


module.exports = {
    insert: async () => {

       

       await models.user_login_type.bulkCreate(_LOGIN_TYPE);
       await models.users.bulkCreate(_User);
       await models.countries.bulkCreate(_COUNTRIES);
       await models.state.bulkCreate(_STATE);
       await models.cities.bulkCreate(_CITY);

        console.log("Reference Data Inserted Successfully");
    }
};