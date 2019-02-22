import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const {GraphQLSchema} = require('graphql');


const schema = new GraphQLSchema({});
const app = express();
const PORT = process.env.PORT || "4000";
const db = "mongodb+srv://Vitor:vitor98@cluster0-yqco7.mongodb.net/test?retryWrites=true";

mongoose
    .connect(
        db,
        {
            useCreateIndex: true,
            userNewUrlParse: true
        }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

    app.use(
        "/graphql",
        cors(),
        bodyParser.json(),
        expressGraphQL({
          schema,
          graphiql: true
        })
      );
      
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));