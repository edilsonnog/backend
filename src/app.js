import express from 'express';
import mongose, { mongo } from "mongoose";
import routes from './routes';
import cors from 'cors';

class App {
    constructor() {
        this.server = express();

        this.database();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.server.use(cors());
        this.server.use(express.json());
    }

    database() {
        mongose.connect("mongodb+srv://ttalzero:ff0VfDho1tuEfLlo@cluster0.agu4l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }
        );
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;