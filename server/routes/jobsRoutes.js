import express from 'express'
const router = express.Router()

import {
  createJob,
  deleteJob,
  getAllJobs,
  getUserAllJobs,
  updateJob,
  showStats,
  getJob,
  getPopJobs,
} from '../controllers/jobsController.js'
import verifyJobProvider from '../middleware/verifyJobProvider'
import verifyJobSeeker from '../middleware/verifyJobSeeker'

router.route('/').post(verifyJobProvider ,createJob).get(verifyJobProvider,getUserAllJobs)
router.route('/all').get(verifyJobSeeker,getAllJobs)
router.route('/all_jobs').get(getPopJobs)
// remember about :id
router.route('/all/:id').get(getJob)
router.route('/stats').get(verifyJobProvider,showStats)
router.route('/:id').delete(verifyJobProvider,deleteJob).patch(verifyJobProvider,updateJob)

export default router
