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
            return "指定したプログラムは正しく動作しました。";
        } catch (error) {
            return `エラー: ${error.message}`;
        }
    },
    isType: function(value) {
        return typeof value;
    },
    isNull: function(value) {
        return value === null;
    },
    isUndefined: function(value) {
        return value === undefined;
    },
    isArray: function(value) {
        return Array.isArray(value);
    },
    isFunction: function(value) {
        return typeof value === 'function';
    },
    isObject: function(value) {
        return typeof value === 'object' && value !== null;
    },
    isString: function(value) {
        return typeof value === 'string';
    },
    isNumber: function(value) {
        return typeof value === 'number';
    },
    isBoolean: function(value) {
        return typeof value === 'boolean';
    },
    isNaN: function(value) {
        return isNaN(value);
    },
    isInfinity: function(value) {
        return value === Infinity || value === -Infinity;
    },
    isNullOrUndefined: function(value) {
        return value === null || value === undefined;
    },
    isEmptyString: function(value) {
        return value === '';
    },
    isEmptyObject: function(value) {
        return Object.keys(value).length === 0;
    },
    isEmptyArray: function(value) {
        return Array.isArray(value) && value.length === 0;
    },
    isEmptyMapOrSet: function(value) {
        return (value instanceof Map || value instanceof Set) && value.size === 0;
    },
    isPromise: function(value) {
        return value instanceof Promise;
    },
    isSymbol: function(value) {
        return typeof value === 'symbol';
    },
    isBigInt: function(value) {
        return typeof value === 'bigint';
    },
    isRegExp: function(value) {
        return value instanceof RegExp;
    },
    isDate: function(value) {
        return value instanceof Date;
    },
    isError: function(value) {
        return value instanceof Error;
    },
    isTypeMatch: function(value, expectedType) {
        return typeof value === expectedType;
    },
    isValueMatch: function(value, expectedValue) {
        return value === expectedValue;
    },
    isInArray: function(value, array) {
        return array.includes(value);
    },
    isPropertyOfObject: function(value, object) {
        return value in object;
    },
    isMethodOfObject: function(methodName, object) {
        return typeof object[methodName] === 'function';
    }, 
    nres: async function(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTPエラー! ステータス: ${response.status}`);
            }
            return "ネットワークリクエストは200で完了しました。";
        } catch (error) {
            return `エラーが発生しました。: ${error.message}`;
        }
    },
    sErr: function() {
        throw new Error("Error. created by Kitty Base.");
    },
   ts200: async function(url) {
        try {
            const response = await fetch(url);
            if (response.status === 200) {
                return "ステータスコード200が返されました。";
            } else {
                throw new Error(`200以外のステータスコードが返されました。: ${response.status}`);
            }
        } catch (error) {
            return `エラーが発生しました。: ${error.message}`;
        }
    }
};



module.exports = kitty;
