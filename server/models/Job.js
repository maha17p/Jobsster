import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time',
    },
    salary: {
      type: String,
      required: [true, 'Please provide salary'],

    },
    candidates: {
      type: Number,
      default: 1,
    },
    skills: {
      type: String,
      required: [true, 'Please provide skills'],
    },
    experience:{
      type: String,
      enum: ['fresher', '1+', '2+', '5+','10+'],
      default: 'fresher',

    },

    jobDetails: {
      type: String,
      required: [true, 'Please provide job details'],
    },
    jobLocation: {
      type: String,
      required: [true, 'Please provide job location'],
      maxlength: 100,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Job', JobSchema)
