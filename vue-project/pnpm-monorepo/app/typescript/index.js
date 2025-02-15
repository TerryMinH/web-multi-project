"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var accessDict = {
    create: false,
    receive: false
};
var averageData1 = {
    seasonList: []
};
var averageData2 = [];
// console.log(averageData1, averageData2);
function giveSay(name) {
    return function (target) {
        target.say = function () {
            console.log("hello! My name is  ".concat(name));
        };
    };
}
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1 = __decorate([
        giveSay("Yuanhao")
    ], Animal1);
    return Animal1;
}());
Animal1.say();
