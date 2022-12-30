"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const colors_1 = __importDefault(require("colors"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = __importDefault(require("./config/db"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
// Routes
const moviesRoutes_1 = __importDefault(require("./routes/moviesRoutes"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, "..", "config.env") });
(0, db_1.default)();
const app = (0, express_1.default)();
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("dev"));
}
app.use(express_1.default.json());
// To enable colors
colors_1.default.enable();
app.get("/", (req, res) => {
    res.send("API IS RUNNING...");
});
app.use("/api/movies", moviesRoutes_1.default);
app.use(errorMiddleware_1.notFound);
app.use(errorMiddleware_1.errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} in port ${PORT}`.yellow.bold);
});
