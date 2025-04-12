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

// GET /jobs - Get all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find(); // You can also sort or limit if needed
        res.status(200).json(jobs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching jobs' });
    }
});


export default router;