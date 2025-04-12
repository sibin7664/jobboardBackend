import Job from '../models/Job.js';

// Create a job
const createJob = async (req, res) => {
    try {
        const job = new Job(req.body);
        const savedJob = await job.save();
        res.status(201).json({
            message: "Job added successfully",
            job: savedJob
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating job' });
    }
};

// Get all jobs
const getAllJobs = async (req, res) => {
    try {
        const { search, category } = req.query;

        const query = {};

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { company: { $regex: search, $options: 'i' } }
            ];
        }

        if (location) {
            query.category = { $regex: category, $options: 'i' };
        }
        console.log('GET /jobs called');
        const jobs = await Job.find(query);
        res.status(200).json(jobs);
    } catch (err) {
        console.error('Error in getAllJobs:', err);
        res.status(500).json({ message: 'Error fetching jobs' });
    }
};


// Get job by ID
const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching job' });
    }
};

export { getAllJobs, getJobById, createJob }
