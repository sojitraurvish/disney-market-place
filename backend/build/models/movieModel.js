"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MovieSchema = new mongoose_1.default.Schema({
    backgroundImg: {
        type: String,
    },
    cardImg: {
        type: String,
    },
    description: {
        type: String,
    },
    subTitle: {
        type: String,
    },
    title: {
        type: String,
    },
    titleImg: {
        type: String,
    },
    type: {
        type: String,
    }
});
exports.Movie = mongoose_1.default.model("Movie", MovieSchema);
