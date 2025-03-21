"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const universities_routes_1 = __importDefault(require("./routes/universities.routes")); // Adjust path if needed
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Use university routes
app.use('/api', universities_routes_1.default);
// Root route
app.get('/', (req, res) => {
    res.send('API is running on localhost:5001');
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
