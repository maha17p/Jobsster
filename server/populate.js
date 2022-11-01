const connectDB = require('./db/connectDB');
const Job = require('./models/Job');
const jobDetails = require('./mock-data.json')


const start = async() =>{
  try {
    await connectDB(process.env.MONGO_URL)
    await Job.deleteMany()
    await Job.create(jobDetails)
    console.log("Created Successfully");
    process.exit(0)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
};


start()