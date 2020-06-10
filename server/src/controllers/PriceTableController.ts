import {Request, Response} from 'express';
import knex from '../database/connection';

class PriceTableController {
  async index(request: Request, response: Response) {
    const priceTable = await knex('pricetable').select('*');

    const serialized = priceTable.map(p => {
        return {
            id: p.id,
            name: p.name,
        }
    })

    return response.json(serialized);
  }
}

export default PriceTableController