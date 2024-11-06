const { MongoClient } = require('mongodb');
const cors = require('cors');

// Use environment variables for DB credentials
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@cluster0.g4rtgpd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(dbUrl);

const corsOptions = {
  origin: 'https://my-portfolio-one-olive-35.vercel.app', // Your Frontend URL
};

module.exports = async (req, res) => {
  // Apply CORS
  cors(corsOptions)(req, res, async () => {
    try {
      await client.connect();
      const db = client.db('Portfolio');
      const projects = await db.collection('Projects').find({}).toArray();
      res.status(200).json(projects);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await client.close();
    }
  });
};
