import {Request, Response} from 'express';
import knex from '../database/connection';

class JobTypeController {
  async index(request: Request, response: Response) {
    const jobType = await knex('jobtype').select('*');

    const serialized = jobType.map(j => {
        return {
            id: j.id,
            name: j.name,
        }
    })

    return response.json(serialized);
  }
}

export default JobTypeController