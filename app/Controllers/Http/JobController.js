'use strict'

const Job = use('App/Models/Job')
const edge = require('edge.js')

class JobController {
	async home({view}) {
		// Create a job
		const job 	= new Job;
		job.title 	= 'Backend Developer';
		job.link	= 'http://embuncode.blogspot.com';
		job.description = 'Make a Website E-Goverment';

		await job.save();

		// Fetch a job
		const jobs = await Job.all();

		return view.render('index', { jobs: jobs.toJSON() })
	}
}

module.exports = JobController