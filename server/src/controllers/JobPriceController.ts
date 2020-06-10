import {Request, Response} from 'express';
import knex from '../database/connection';

class PriceTableController {
  async index(request: Request, response: Response) {
    const jobPrice = await knex('jobprice').select('*');

    const serialized = jobPrice.map(j => {
        return {
          pricetable_id: j.pricetable_id,
          jobtype_id: j.jobtype_id,
          price: j.price,
        }
    })

    return response.json(serialized);
  }
}

export default PriceTableController