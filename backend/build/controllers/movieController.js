"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieById = exports.getAllMovies = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const movieModel_1 = require("../models/movieModel");
/**
 * Get all movies
 * @route POST /api/orders
 * @access Private
 */
exports.getAllMovies = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield movieModel_1.Movie.find({});
    res.status(200).json(movies);
}));
/**
 * get Movie by id
 * @route POST /api/orders
 * @access Private
 */
exports.getMovieById = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield movieModel_1.Movie.findById(req.params.id);
    if (movie) {
        res.status(200).json(movie);
    }
    else {
        throw new Error("Product not Found");
    }
}));
