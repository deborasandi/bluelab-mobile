import {Request, Response} from 'express';
import knex from '../database/connection';

class JobController {
  async index(request: Request, response: Response) {
    const job = await knex('job').select('*');

    const serialized = job.map(j => {
        return {
          id: j.id,
          client_id: j.client_id,
          jobtype_id: j.jobtype_id,
          productcolor_id: j.productcolor_id,
          qtd: j.qtd,
          shipping: j.shipping,
          isrepetition: j.isrepetition,
          isnocost: j.isnocost,
          ispaid: j.ispaid,
          total: j.total,
        }
    })

    return response.json(serialized);
  }
}

export default JobController