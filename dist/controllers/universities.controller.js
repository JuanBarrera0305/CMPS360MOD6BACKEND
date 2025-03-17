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
exports.getUniversities = void 0;
const db_1 = __importDefault(require("../config/db")); // Import the database connection
// Define the getUniversities function with correct typing
const getUniversities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Replace the dummy data with a database call
        const data = yield db_1.default.any('SELECT * FROM universities');
        res.status(200).json(data); // Return the data as a JSON response
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching universities', error: error.message });
    }
});
exports.getUniversities = getUniversities;
