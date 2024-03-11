/*
©Carnation 2024
Kitty System Based Manager
Module name: kitty
All rights reserved
*/
"use strict";
const kitty = {
    testFunction: function(funcToTest) {
        try {
            funcToTest();
            return "Function executed successfully.";
        } catch (error) {
            return `Error occurred: ${error.message}`;
        }
    },
    isVariableType: function(variable) {
        return typeof variable;
    },
    isVariableNull: function(variable) {
        return variable === null;
    },
    isVariableUndefined: function(variable) {
        return variable === undefined;
    },
    isVariableArray: function(variable) {
        return Array.isArray(variable);
    },
    isVariableFunction: function(variable) {
        return typeof variable === 'function';
    },
    isVariableObject: function(variable) {
        return typeof variable === 'object' && variable !== null;
    },
    isVariableString: function(variable) {
        return typeof variable === 'string';
    },
    isVariableNumber: function(variable) {
        return typeof variable === 'number';
    },
    isVariableBoolean: function(variable) {
        return typeof variable === 'boolean';
    },
    isVariableNaN: function(variable) {
        return isNaN(variable);
    },
    isVariableInfinity: function(variable) {
        return variable === Infinity || variable === -Infinity;
    },
    isVariableNullOrUndefined: function(variable) {
        return variable === null || variable === undefined;
    },
    isVariableEmptyString: function(variable) {
        return variable === '';
    },
    isVariableEmptyObject: function(variable) {
        return Object.keys(variable).length === 0;
    },
    isVariableEmptyArray: function(variable) {
        return Array.isArray(variable) && variable.length === 0;
    },
    isVariableEmptyMapOrSet: function(variable) {
        return (variable instanceof Map || variable instanceof Set) && variable.size === 0;
    },
    isVariablePromise: function(variable) {
        return variable instanceof Promise;
    },
    isVariableSymbol: function(variable) {
        return typeof variable === 'symbol';
    },
    isVariableBigInt: function(variable) {
        return typeof variable === 'bigint';
    },
    isVariableRegExp: function(variable) {
        return variable instanceof RegExp;
    },
    isVariableDate: function(variable) {
        return variable instanceof Date;
    },
    isVariableError: function(variable) {
        return variable instanceof Error;
    },
    isVariableTypeMatch: function(variable, expectedType) {
        return typeof variable === expectedType;
    },
    isVariableValueMatch: function(variable, expectedValue) {
        return variable === expectedValue;
    },
    isVariableInArray: function(variable, array) {
        return array.includes(variable);
    },
    isVariablePropertyOfObject: function(variable, object) {
        return variable in object;
    },
    isMethodOfObject: function(methodName, object) {
        return typeof object[methodName] === 'function';
    }
};


module.exports = kitty;
