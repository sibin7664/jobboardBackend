import express from 'express';
import Job from '../models/Job.js';
import {
    createJob,
    getAllJobs,
    getJobById
} from '../controllers/jobController.js';

const router = express.Router();

// POST /jobs - Create a new job
router.route("/").post(createJob).get(getAllJobs);       // Get all jobs
router.get('/:id', getJobById);    // Get job by ID


export default router;