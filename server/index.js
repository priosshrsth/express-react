"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const route_1 = __importDefault(require("./route"));
mongoose_1.default.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
    // const data = await db.collection("users").find({}).toArray()
    console.log('connect');
});
// call express
const app = express_1.default(); // define our app using express
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const port = Number(process.env.PORT) || 8050; // set our port
app.use(express_1.default.static('dist'));
app.get('/', (req, res) => {
    console.log('sending index.html');
    res.sendFile('/dist/index.html');
});
// ROUTES FOR OUR API
// =============================================================================
// const router = express.Router(); // get an instance of the express Router
// // middleware to use for all requests
// router.use((req, res, next) => {
//     // do logging
//     console.log(req.method, '\t', `${req.baseUrl}${req.url}`, '\t', req.body);
//     next(); // make sure we go to the next routes and don't stop here
// });
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
const routes = Object.values(route_1.default);
app.use('/api', routes);
// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`App listening on ${port}`);
//# sourceMappingURL=index.js.map