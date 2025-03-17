"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const universities_controller_1 = require("../controllers/universities.controller");
const router = (0, express_1.Router)();
// GET /api/universities
router.get('/universities', universities_controller_1.getUniversities);
exports.default = router;
