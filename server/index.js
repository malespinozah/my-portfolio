const express = require("express");
const dotenv = require("dotenv");
//load the environment variables from .env
dotenv.config();

const cors = require("cors"); // this ables to receive/parse JSON from request

const { MongoClient } = require("mongodb");

const app = express();

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@cluster0.g4rtgpd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(dbUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: "https://my-portfolio-one-olive-35.vercel.app"
}));

/*
 *  returns: arrays of back-end data
 */

app.get("/api/skills", async (request, response) => {
    let skills = await getSkills();
    response.json(skills);
  });

  app.get("/api/projects", async (request, response) => {
    let projects = await getProjects();
    response.json(projects);
  });

  //set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });

async function connection() {
    await client.connect();
    db = client.db("Portfolio"); //select testdb database
    return db;
}
  
/* functions */

async function getSkills() {
    db = await connection(); //await result of connection() and store the returned db
    var results = db.collection("Skills").find({}); //{} as the query means no filter, so select all
    res = await results.toArray();
    return res;
}

async function getProjects() {
    db = await connection(); //await result of connection() and store the returned db
    var results = db.collection("Projects").find({}); //{} as the query means no filter, so select all
    res = await results.toArray();
    return res;
}

  