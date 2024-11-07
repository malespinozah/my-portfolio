const express = require("express");
const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
//load the environment variables from .env
dotenv.config();

const cors = require("cors"); // this ables to receive/parse JSON from request

const { MongoClient } = require("mongodb");

const app = express();

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@cluster0.g4rtgpd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(dbUrl);

const port = process.env.PORT || "8888";

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

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: process.env.USERMAIL,
      pass: process.env.USERPWD,
  },
});

  //set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });


async function connection() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db("Portfolio");
        return db;
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error; // This will propagate the error to the calling function
    }
}

  
/* functions */

async function getSkills() {
    const db = await connection(); //await result of connection() and store the returned db
    const results = await db.collection("Skills").find({}).toArray(); // query and convert the results to an array
    return results; // returning directly
}

async function getProjects() {
    const db = await connection(); //await result of connection() and store the returned db
    const results = await db.collection("Projects").find({}).toArray(); // query and convert the results to an array
    return results; // returning directly
}

/* mail */

app.post("/api/contact", async (request, response) => {
  const { nameUser, surnameUser, emailUser, phoneUser, subjectMessage, textUser } = request.body;

  const mailOptions = {
      from: emailUser,
      to: process.env.USERMAIL,
      subject: `New message from ${nameUser} ${surnameUser}: ${subjectMessage}`,
      text: `You have a new contact form submission:
      
      Name: ${nameUser} ${surnameUser}
      Email: ${emailUser}
      Phone: ${phoneUser}
      Subject: ${subjectMessage}
      
      Message: 
      ${textUser}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error('Error sending email:', error);
          return response.json({ message: 'Failed to send email' });
      }
      console.log('Email sent:', info.response);
      response.json({ message: 'Email sent successfully!' });
  });
});



module.exports = app